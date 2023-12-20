import asys.FileSystem;
import js.Browser;
import mozilla.readability.Readability;
import asys.io.File;
import tink.http.Fetch;
using Mots;
using App.DotapeaTools;
class App {
	static final dotapeaPath="./www.dotapea.com/";
	var done:Array<String>=[];
	var laliste:Array<String>=[];
	var counter=0;
	public function new() {
		trace("new");
		//getOne("zinc.html")
		// return ;
		getFiles()
		.next(
			liste->{
			//laliste=liste.slice(0,-1);
			trace(laliste.length);
			batchexport(laliste);
			}
		)

		//getOne("")
		
		.tryRecover(r->{
			resumed().Log("resumed");
			r;
		}
		)
		.next(n->{

			resumed().Log("resumed");
			
		}
		)
		.eager();
	}
	static function main() {
		new App();
	}


	function getOne(name:String):Promise<Array<String>>{
		laliste=[name];
		return Promise.lift(laliste);
	}

	function getFiles():Promise<Array<String>>{
		return FileSystem.readDirectory(dotapeaPath)
		.next(n->{
			n.length.Log();
			n;
		})
		.next(n->n.filter(s->
			!sys.FileSystem.isDirectory(dotapeaPath+s)
		))
		.next(n->n.filter(s->
			//true
			(haxe.io.Path.extension(s)=="html")
			//&&
			// !StringTools.contains(s,"DS_Store") 
			&&
			!StringTools.contains(s,"courrier")
			&&
			!StringTools.contains(s,"archive")
			// &&
			// // !StringTools.contains(s,"toile")
			// // &&
			// // !StringTools.contains(s,".rss")
			// // &&
			// // !StringTools.contains(s,".ico")
			&&
			 !StringTools.contains(s,"communique")
			//StringTools.contains(s,"zinc")
		))
		.next(n->{
			n.length.Log();
			n;
		})
		.next(n->n.Log('path'))
		.tryRecover(r->r.Log('oups'));
		
	}

	function batchexport(liste:Array<String>):Promise<Noise>{
		var proms=liste.map(
			name->exportToMd(dotapeaPath+name.Log('name'))
			.tryRecover(n->n.Log('ok'))
		);
		return Promise.inSequence(proms)
		.tryRecover(f->f.Log('continue qund même'));
			
		
	}

	var resumedBuf:StringBuf= new StringBuf();
	function logToResumed(s:String){
			resumedBuf.add('$s\n');
	}

	function resumed():String{
			trace(laliste.length, "laliste");
			trace(done.length, "done");
			logToResumed("laliste"+laliste.length );
			logToResumed("done"+done.length );
			File.saveContent("./resumed.txt",resumedBuf.toString()).eager();
			return resumedBuf.toString();
	}

	function exportToMd(path:String):Promise<Noise>{
		
		return File.getContent(path)
		.tryRecover(
			n->n.Log("erreur fichier")
		)
		.next(s->{
			if(s=="")
				return None;
			var doc:js.html.Document= new jsdom.JSDOM(s).window.document;
			var  read=new Readability(doc).parse();
			Some(read);

		})	
		.next(readOpt->{
			trace("path",path);
			counter= (counter+1).Log("count");
			switch readOpt {
				case None:
					logToResumed( '$path is vide');
					return None;  //fichier vide
				case Some(parsed):
			
			
			if( parsed.title=="404 Not Found"){
				logToResumed( '$path is not found');
				return None;
			}
			//trace( 'continue $path');
			var  content="";
			if (parsed.content == "html") {
				content = parsed.content;
			  } else {
				content = new Turndown().turndown(parsed.content);
			  }
			  
			  var  titre= parsed.title.removeDotapeaTitle();
			  var  excerpt= parsed.excerpt.removeDotapeaTitle();
			 
			  content=content.remOrphanLink("Retour début de page");
			  var meta= '---\ntitle: $titre\ndate: ${Date.now()}\nauthor: postite\n---\n';
			  content = '$meta\n## $titre\n### $excerpt\n $content';
			
			  Some(new Pair(titre.underclean(),content));
			}
	})
	.next(opt->{
		switch opt {
			case Some(pair):
				Promise.NOISE;
				File.saveContent(Sys.getCwd()+'/www/md/${pair.a}.md'.Log('write'),pair.b)
				.next(n->done.push(pair.a))
				.next(n->Noise);
			case None:
				Promise.NOISE;
		}

		
	})
	.tryRecover(r->r.Log("err"+ path));
		
	}



}

@:publicFields
class DotapeaTools{

	static function removeDotapeaTitle(d:String):String{
		return StringTools.replace(d," - Dotapea","");
	}

	static function remOrphanLink(big:String,link:String):String{
		var reg=new EReg('^(\\[['+link+']).*$',"gm");
		return  reg.replace(big,"");
	}
}
