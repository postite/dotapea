package undici_types;

typedef BodyMixin = {
	final body : Null<node.stream.web.ReadableStream<Dynamic>>;
	final bodyUsed : Bool;
	function arrayBuffer():js.lib.Promise<js.lib.ArrayBuffer>;
	function blob():js.lib.Promise<node.buffer.Blob>;
	function formData():js.lib.Promise<FormData>;
	function json():js.lib.Promise<Any>;
	function text():js.lib.Promise<String>;
};