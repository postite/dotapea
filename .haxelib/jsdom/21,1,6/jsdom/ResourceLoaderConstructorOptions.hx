package jsdom;

typedef ResourceLoaderConstructorOptions = {
	@:optional
	var strictSSL : Bool;
	@:optional
	var proxy : String;
	@:optional
	var userAgent : String;
};