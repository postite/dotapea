package jsdom;

@:jsRequire("jsdom", "ResourceLoader") extern class ResourceLoader {
	function new(?obj:ResourceLoaderConstructorOptions);
	function fetch(url:String, options:FetchOptions):Null<AbortablePromise<node.buffer.Buffer>>;
	static var prototype : ResourceLoader;
}