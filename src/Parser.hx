import haxe.macro.Expr.ExprDef;
import asys.FileSystem;
import js.Browser;
import mozilla.readability.Readability;
import asys.io.File;
import tink.http.Fetch;

using haxe.io.Path;
using Mots;
using Parser.DotapeaTools;

class Parser {
	static final dotapeaPath = "./www.dotapea.com/";
	static final mdPath = "./www/md";

	var done:Array<String> = [];
	var laliste:Array<String> = [];
	var counter = 0;
	var cleanIndexPages:Bool = true;
	var pages_lettres = "a,b,c,e,d,e,f,g,h,ijk,l,m,no,p,qr,s,t,uv,wxyz".split(",").map(n -> n + ".html");
	var pages_lettres_md = "a,b,c,e,d,e,f,g,h,ijk,l,m,no,p,qr,s,t,uv,wxyz".split(",").map(n -> n + ".md");

	public function new() {
		trace("new");
		// getOne("zinc.html")
		// return ;
		extractGlossaire().eager();
		return;
		getFiles().next(liste -> {
			laliste = liste.slice(0, -1);
			trace(laliste.length);
			batchexport(laliste);
		}) // getOne("")

			.tryRecover(r -> {
				resumed().Log("resumed");
				r;
			}).next(n -> {
			resumed().Log("resumed");
			}).eager();
	}

	static function main() {
		new Parser();
	}

	function extractGlossaire() {
		cleanIndexPages = true;
		return getMd().next(tab -> {
			//tab=tab.slice(0,2);
			var  proms=[];
			for (a in tab)
			proms.push(
				File.getContent(mdPath + "/" + a).next(content -> content.getDef()).next(tab -> tab));
			proms;
		}).next(proms ->  {
			var t=[]; 
			Promise.inSequence(proms).flatMap(
				tab->{
				$type(tab);
				t=t.concat(tab.sure());
				//tab;
				}
			).next(
				r->{
					$type(t);
					//trace(t);
					var  f=Lambda.flatten(t);
				File.saveContent(mdPath+"/"+"gloss.json",haxe.Json.stringify(f));
				}
			);

		});
	}

	function getOne(name:String):Promise<Array<String>> {
		laliste = [name];
		return Promise.lift(laliste);
	}

	function getMd():Promise<Array<String>> {
		return FileSystem.readDirectory(mdPath)
			.next(n -> {
				n.length.Log();
				n;
			})
			.next(n -> n.filter(s -> !sys.FileSystem.isDirectory(mdPath + s)))
			.next(n -> if (cleanIndexPages) n.filter(s -> pages_lettres_md.contains(s)) else n)
			.next(n -> n.Log('mds'));
	}

	function getFiles():Promise<Array<String>> {
		return FileSystem.readDirectory(dotapeaPath)
			.next(n -> {
				n.length.Log();
				n;
			})
			.next(n -> n.filter(s -> !sys.FileSystem.isDirectory(dotapeaPath + s)))
			.next(n -> if (cleanIndexPages) n.filter(s -> pages_lettres.contains(s)) else n)
			.next(n -> n.filter(s -> (haxe.io.Path.extension(s) == "html")

				&& !StringTools.contains(s, "courrier")
				&& !StringTools.contains(s, "archive")

				&& !StringTools.contains(s, "communique")))

			.next(n -> {
				n.length.Log();
				n;
			})
			.next(n -> n.Log('path'))
			.tryRecover(r -> r.Log('oups'));
	}

	function batchexport(liste:Array<String>):Promise<Noise> {
		var proms = liste.map(name -> exportToMd(dotapeaPath + name.Log('name')).tryRecover(n -> n.Log('ok')));
		return Promise.inSequence(proms).tryRecover(f -> f.Log('continue qund même'));
	}

	var resumedBuf:StringBuf = new StringBuf();

	function logToResumed(s:String) {
		resumedBuf.add('$s\n');
	}

	function resumed():String {
		trace(laliste.length, "laliste");
		trace(done.length, "done");
		logToResumed("laliste" + laliste.length);
		logToResumed("done" + done.length);
		File.saveContent("./resumed.txt", resumedBuf.toString()).eager();
		return resumedBuf.toString();
	}

	function exportToMd(path:String):Promise<Noise> {
		return File.getContent(path)
			.tryRecover(n -> n.Log("erreur fichier"))
			.next(s -> {
				if (s == "")
					return None;
				var doc:js.html.Document = new jsdom.JSDOM(s).window.document;
				var read = new Readability(doc).parse();
				Some(read);
			})
			.next(readOpt -> {
				trace("path", path);
				counter = (counter + 1).Log("count");
				switch readOpt {
					case None:
						logToResumed('$path is vide');
						return None; // fichier vide
					case Some(parsed):
						if (parsed.title == "404 Not Found") {
							logToResumed('$path is not found');
							return None;
						}
						// trace( 'continue $path');
						var content = "";
						if (parsed.content == "html") {
							content = parsed.content;
						} else {
							content = new Turndown().turndown(parsed.content);
						}

						var titre = parsed.title.removeDotapeaTitle().Log("titre");
						var excerpt = parsed.excerpt.removeDotapeaTitle();

						content = content.remOrphanLink("Retour début de page");
						if (cleanIndexPages) {
							content = content.remImages();
							content = content.remIndex();
							content = content.remDoubleBreaks();
							content = content.remSpaceandBreaks();
						}
						var meta = '```\ntitle: $titre\ndate: ${Date.now()}\nauthor: postite\n```\n';
						if (!cleanIndexPages)
							content = '## $titre\n### $excerpt\n $content\n$meta';
						else
							content = '$content\n$meta';

						Some(content);
				}
			})
			.next(opt -> {
				switch opt {
					case Some(content):
						var mdPath = (path.withoutDirectory().withoutExtension() + ".md").Log('mdPath');
						File.saveContent(Sys.getCwd() + '/www/md/$mdPath'.Log('write'), content).next(n -> done.push(mdPath)).next(n -> Noise);
					case None:
						Promise.NOISE;
				}
			})
			.tryRecover(r -> r.Log("err" + path));
	}
}

@:publicFields
class DotapeaTools {
	static function removeDotapeaTitle(d:String):String {
		return StringTools.replace(d, " - Dotapea", "");
	}

	static function remOrphanLink(big:String, link:String):String {
		var reg = new EReg('^(\\[[' + link + ']).*$', "gm");
		return reg.replace(big, "");
	}

	static function remImages(big:String):String {
		var reg = new EReg('^\\[!(.+)\\]\\((.+)?\\)', "gm");
		return reg.replace(big, "");
	}

	static function remIndex(big:String):String {
		var reg = new EReg('\\*\\*_(.*)_\\*\\*', "gm");
		return reg.replace(big, "");
	}

	static function remDoubleBreaks(big:String):String {
		var reg = new EReg('^\n{2,}', "gm");
		return reg.replace(big, "");
	}

	static function remSpaceandBreaks(big:String):String {
		var reg = new EReg('^(\\s{1,3}\n)', "gm");
		return reg.replace(big, "\n");
	}

	static function getDef(input:String):Array<{def:String, link:String}> {
		var ereg = new EReg('\\*\\*(\\[(.*)\\])(\\((.*)\\))\\*\\*', 'gm');
		var list = [];
		while (ereg.match(input)) {
			list.push({
				def: ereg.matched(2),
				link: ereg.matched(4),
			});
			input = ereg.matchedRight();
		}
		
		return list;
	}
}
