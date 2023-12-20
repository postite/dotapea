package jsdom;

typedef FetchOptions = {
	@:optional
	var cookieJar : CookieJar;
	@:optional
	var referrer : String;
	@:optional
	var accept : String;
	@:optional
	var element : ts.AnyOf4<js.html.LinkElement, js.html.ImageElement, js.html.ScriptElement, js.html.IFrameElement>;
};