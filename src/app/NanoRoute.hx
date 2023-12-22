package server.app;

import tink.Anon;
import server.apis.MicroFeedApi;
import cross.NanoCast;
import server.apis.NanoCastApi;
import cross.Tools.MSG;

import cross.Config;
import tink.template.Html;
import views.Layout;
import command.*;
using poscope.wire.Actor;

class NanoRoute {
	var nanopi:NanoCastApi;

	public function new() {
		this.nanopi = new NanoCastApi(Lite.connect());

	
		Actor.defaultLayout=new views.Layout();
		Actor.defaultHead =  new Head();

		Actor.defaultLayout.footer = Footer.render();

		var nav = [new Named("home", "/"), new Named("evts", "/evt"),];

		Actor.defaultLayout.menu = Menu.render(nav);

		Actor.defaultLayout.header = Header.render();
		

	}


	@:get("/")
	public function home():Promise<Html> {
		return nanopi.all().next(
			liste->Home.render(liste).withLayout().render()
		);
	}

	@:get
	public function setup():Promise<MSG> {
		return nanopi.setup().next(x -> {msg: "setup ok"});
	}

   // @:produces("application/json")
    @:get("/one/$name")
    public function one(name:String) {
        return nanopi.getByName(name)
        .next(n->{
			var p:NanoCast=cast {};
			trace(n);
			if( Config.local)
				p=Anon.merge(n,{url: StringTools.replace(n.url,"./www/","")});

			else 
				p=Anon.merge(n,{url: StringTools.replace(n.url,".//","")});

			//n.url= StringTools.replace(n.url,"./www/","");
            One.render(p).withLayout()
            .render();
		}
        );
    }
	@:get
	@:produces("application/json")
	public function all():Promise<Array<NanoCast>> {
		return nanopi.all();
	}

	@:get("/delete/$id")
	public function delete(id:Int):Promise<MSG> {
		return nanopi.delete(id).next(n -> {msg: " delete ok"});
	}

    @:get("/flush")
	public function flush():Promise<MSG> {
		return nanopi.flush().next(n -> {msg: "flush ok"});
	}

	@:produces("text/xml")
	@:get('/rss')
	public function rss() {
		return nanopi.all()
			.next(res -> {
				var feed={
                    version:"vesrion", title:"nanocast", language:"fr",
                     items:[],
                      icon:"", home_page_url:"",
                       feed_url:"", favicon:"", description:"", authors:[{
                        "name": "John Doe"
                      }], _microfeed:null
                };
                
                feed.items= cast res.map((nano:NanoCast) -> 
                {
					id: cast nano.id,
					title: nano.title,
					attachments: [{
						url: cross.Config.domain+nano.url,
						mime_type: "audio/mpeg3",
						duration_in_seconds: nano.duration *1.0
					}],
                    guid:nano.orig_url,
					url: nano.orig_url,
					content_html: nano.description,
					content_text: nano.description,
					image: "",
					date_published:  DateTools.format(Date.now(), "%Y-%m-%d %H:%M:%S")
                    //  2023-12-08 09:28:21
				});
				return feed;
			})
			.next(feed -> server.apis.RSSgenerator.render(cast feed))
			.tryRecover(f -> f.Log("err"));
	}
}
// interface INanoRoute {
//     public function setup():Promise<MSG>{
//       public function all():Promise<Array<NanoCast>>{
//         return nanopi.all();
//     }
//     public function delete(id:Int):Promise<MSG>{
//         return nanopi.delete(id)
//         .next(n->{msg:" delete ok"});
//     }
// }
