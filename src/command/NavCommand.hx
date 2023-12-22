package command;

import js.html.DivElement;
import js.Browser.document as doc;
import js.Browser.window;
import cross.ICrossRoot;
import tink.web.proxy.Remote;

using tink.CoreApi;

class NavCommand<T> implements poscope.wire.ICommand<Noise> {
	var remote:Remote<ICrossRoot>;

	public function new(r:Remote<ICrossRoot>) {
		trace(r);
		this.remote = r;
	}

	public function execute<T>(?data:T):Promise<Noise> {
		trace("navCommand");
		doc.addEventListener("DOMContentLoaded", init);
		return Promise.NOISE;
	}

	function init(e) {
        if (window.matchMedia("(max-width: 600px)").matches) {
		var colls = doc.querySelectorAll(".collapsible");
		for (a in 0...colls.length)
			collapse(cast colls.item(a));
    }
	}

    var memo =  new Map();
	public function collapse(el:DivElement) {
      trace("collapsing "+el.className);
        var content = el.nextElementSibling;
        var etat=content.style.display;
        memo.set(content,etat);
		el.addEventListener("click", e -> {
			el.classList.toggle("active");
            var memoz=memo.get(content);
			if (content.style.display == memoz) {
				content.style.display = "none";
			} else {
				content.style.display = memoz;
			};
		});
        content.style.display = "none";
	}
}
