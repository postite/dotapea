package command;

import tink.http.Client;
import js.html.Event;
import js.html.Element;
import js.Browser.document as doc;
import js.Browser.window;
import cross.ICrossRoot;
import tink.web.proxy.Remote;
import tink.http.Header.HeaderField;

using tink.CoreApi;

import tink.http.Method;

class EditCommand<T> implements poscope.wire.ICommand<Noise> {
	#if client
	var remote:Remote<ICrossRoot>;
	var id:String;

	public function new(r:Remote<ICrossRoot>) {
		// trace(r);
		this.remote = r;
	}

	public function execute<T>(?data:T):Promise<Noise> {
		trace("editCommand");
		doc.addEventListener("DOMContentLoaded", init);
		this.id = untyped (data.id);
		return Promise.NOISE;
	}

	function init(e) {
		trace("init");
		var content = doc.getElementById('my_text_area');
		var savers = doc.querySelectorAll('.save_btn');

		var easymde = new EasyMDE({
			element: content,
			spellChecker: false
		});
		for (a in 0...savers.length) {
			var saver = savers.item(a);
			trace(  saver);
			saver.addEventListener("click", function(e:Event) {
				e.preventDefault();
				var result = easymde.value();
				// var result= "oui";

				remote.save({text: result, id: id}).next(n -> "ok saved".Log()).next(s -> {
					window.location.assign("/" + id + ".html");
					s;
				}).eager();
			});
		}
	}
	#end
}

#if client
typedef MDEOptions = {
	element:Element,
	?spellChecker:Bool,
}

@:native("EasyMDE")
extern class EasyMDE {
	public function new(options:MDEOptions):Void;

	public function value():String;
}
#end
