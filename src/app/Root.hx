package app;


import haxe.Json;
import cross.NanoCast;
import asys.FileSystem;
import asys.io.File;
import tink.multipart.Multipart;
import tink.web.forms.FormField;
import tink.web.forms.FormFile;
using StringTools;
import cross.ICrossRoot;
import tink.template.Html;
import tink.Url;

// import server.app.Session;
// import auth.IAuthRoute.AuthContext;
// import auth.User;
// import views.*;
using poscope.wire.Actor;
import tink.template.Html;
import views.Layout;
//import command.*;


using cross.Tools;
import command.*;
import auth.command.*;
import views.*;

using tink.CoreApi;

import cross.Config;
import tink.http.Response;



using haxe.io.Path;
using tink.io.Source;


class Root implements ICrossRoot {


	var nav = [];

	public function new() {
		trace("hello");
		//this.nanopi = new NanoCastApi(Lite.connect())
	
		Actor.defaultLayout=new views.Layout();
		Actor.defaultHead =  new Head();

		Actor.defaultLayout.footer = Footer.render();
		Actor.defaultLayout.header = Header.render();

		makethemes().next(
			tab->{
				trace(tab);
				var nav = [];
				for( opt in tab)
					switch opt {
						case Some(v):
							nav.push(v);
						case None:
							continue;
					}
					nav.Log("nav");
			}
		).next(
			nav->Actor.defaultLayout.menu = Menu.render(nav)
		)
		.tryRecover(f->f.Log("frfrfr"))
		.eager();


	}


	function makeGlossaire() {

			var  gloss="abcedfghijklmnopqrstuvxyz".split('');
			gloss.map(
				lettre->
				new Named(lettre,lettre+".html")
			);
	}

	function makethemes(){
		trace( "themes");
		return File.getContent("mdnav/themesNav.md".addRoot())
		.next(n->{
				n.split('\n').map(
					line->{
						trace(line);
						switch
						extractLinks(line).Log("x")
						{
							case Some(pair):
								Some(new Named(pair.a, pair.b));
							case None:
								None;
						}
					}
				);
		}
		);
	}
	
	@:get("/")
	public function home():Url{
		return ("/accueil":Url);
	}



	@:get('/glossaire')
	public function gloss(){
		
		return File.getContent(("md/gloss.json").addRoot())
		.next(n->{
			var   tab= haxe.Json.parse(n);
			return Glossaire.render(tab)
			.withLayout()
			.addAction(NavCommand)
			.render();
		}
		);
	}


	@:get('/create')
	@:params(text in query)
	public function create(text:String):Promise<Url>{
		trace( text);
		//return Promise.lift(("/accueil":Url));
		return File.getContent(("md/gloss.json").addRoot())
		.next(n->{
			var   tab= haxe.Json.parse(n);
			tab.push({def:text,link:'${text}.html'});
			Json.stringify(tab);
		}
		)
		.next(n->File.saveContent(("md/gloss.json").addRoot(),n))
		.next(n->File.saveContent(('md/$text.md').addRoot(),'## $text\n'))
		.next(
			n-> ('/edit/$text':Url)
		);
	}
	


	@:get("/edit/$page/")
	public function edit(page:String){
		var name= Path.withoutExtension(page);
		return FileSystem.exists(("md/"+name+"_lock.md").addRoot())
		.next(b->if( b)
			 File.getContent(("md/"+name+"_lock.md").addRoot())
			else
			 File.getContent(("md/"+name+".md").addRoot())
		)
		.next(md->{
			return  Editor.render(md,name)
			.withLayout(name)
			.addAction(NavCommand)
			.addStyle('https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css')
			.addScript("https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js")
			.addAction(EditCommand,{id:name})
			.render();
		}
		);
	}

	@:post
    public function save(body:{text:String,id:String}):Promise<Noise>{
		var name= Path.withoutExtension(body.id);
		//var name= "opp";
		trace( "...saving "+name);
		trace( body.text);
		return File.saveContent(("md/"+name+"_lock.md").addRoot(),body.text);
	}

	@:get("/$page")
	public function page(page:String){
		var name= Path.withoutExtension(page);
		return FileSystem.exists(("md/"+name+"_lock.md").addRoot())
		.next(b->if( b)
			 File.getContent(("md/"+name+"_lock.md").addRoot())
			else
			 File.getContent(("md/"+name+".md").addRoot())
		)
		.next(n->{
			var htm=Markdown.markdownToHtml(n);
			var H:MeHtml=htm;
			return  H.toHtml()
			.withLayout(name)
			.addAction(NavCommand)
			.render();
		}
		);
	}

	function extractLinks(line:String):Option<Pair<String,String>>{
		var ereg= ~/^\[(.+)\]\((.+)?\)/gm;
		if(ereg.match(line))
		return Some(new Pair(ereg.matched(1),ereg.matched(2)));
		return None;
	}


	
}


abstract MeHtml(String) from String to String{
  
	public inline function  new(s:String){
	   trace( "Mehtml");
	   this = s;
	}
 
	@:to public inline function toHtml():tink.template.Html
	 return new Html(this);
 
 }
