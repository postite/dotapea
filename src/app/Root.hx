package app;


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

	
	@:get("/$page")
	public function page(page:String){
		var name= Path.withoutExtension(page);
		return File.getContent(("md/"+name+".md").addRoot())
		.next(n->{
			var htm=Markdown.markdownToHtml(n);
			var H:MeHtml=htm;
			return  H.toHtml()
			.withLayout()
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
