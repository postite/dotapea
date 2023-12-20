import js.Browser;
import mozilla.readability.Readability;
import asys.io.File;
import tink.http.Fetch;
using Mots;
class App {
	static function main() {
		trace("Hella, world!");

		// Fetch.fetch("./www.dotapea.com/a.html")
		// //Fetch.fetch("http://postite.com")
		// .all().next(res->res.Log("res"))
		// .tryRecover(r->r.Log("error"))
		// .handle(
		// 	f->f
		// );

		File.getContent("./www.dotapea.com/a.html")
		.next(s->{
			var doc:js.html.Document=  new jsdom.JSDOM(s).window.document;
			new Readability(doc).parse();
		})
		//.next(parsed->parsed.textContent.Log("parsed"))
		.next(parsed->{
			var  content="";
			if (parsed.content == "html") {
				content = parsed.content;
			  } else {
				content = new Turndown().turndown(parsed.content);
			  }
			  content.Log("content");
			  new Pair(parsed.title.underclean(),content);
	})
	.next(pair->File.saveContent(Sys.getCwd()+'/www/md/${pair.a}.md',pair.b))

		.tryRecover(r->r.Log("err"))
		.eager();
	}

}
