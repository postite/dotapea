package jsdom;

@:jsRequire("jsdom", "JSDOM") extern class JSDOM {
	function new(?html:ts.AnyOf16<String, js.lib.ArrayBuffer, js.node.buffer.Buffer, js.lib.SharedArrayBuffer, js.lib.Uint8Array, js.lib.Uint8ClampedArray, js.lib.Uint16Array, js.lib.Uint32Array, js.lib.Int8Array, js.lib.Int16Array, js.lib.Int32Array, js.lib.BigUint64Array, js.lib.BigInt64Array, js.lib.Float32Array, js.lib.Float64Array, js.lib.DataView>, ?options:Dynamic);
	 final window : js.html.Window;
	// final virtualConsole : VirtualConsole;
	// final cookieJar : CookieJar;
	// /**
	// 	The serialize() method will return the HTML serialization of the document, including the doctype.
	// **/
	// function serialize():String;
	// /**
	// 	The nodeLocation() method will find where a DOM node is within the source document,
	// 	returning the parse5 location info for the node.
	// **/
	// function nodeLocation(node:js.html.Node):Dynamic;
	// /**
	// 	The built-in `vm` module of Node.js is what underpins JSDOM's script-running magic.
	// 	Some advanced use cases, like pre-compiling a script and then running it multiple
	// 	times, benefit from using the `vm` module directly with a jsdom-created `Window`.
	// **/
	// function getInternalVMContext():node.vm.Context;
	// /**
	// 	The reconfigure method allows changing the `window.top` and url from the outside.
	// **/
	// function reconfigure(settings:ReconfigureSettings):Void;
	// static var prototype : JSDOM;
	// static function fromURL(url:String, ?options:BaseOptions):js.lib.Promise<JSDOM>;
	// static function fromFile(url:String, ?options:FileOptions):js.lib.Promise<JSDOM>;
	// static function fragment(html:String):js.html.DocumentFragment;
}