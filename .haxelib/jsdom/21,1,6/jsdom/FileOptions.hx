package jsdom;

typedef FileOptions = {
	/**
		url sets the value returned by window.location, document.URL, and document.documentURI,
		and affects things like resolution of relative URLs within the document
		and the same-origin restrictions and referrer used while fetching subresources.
		It will default to a file URL corresponding to the given filename, instead of to "about:blank".
	**/
	@:optional
	var url : String;
	/**
		contentType affects the value read from document.contentType, and how the document is parsed: as HTML or as XML.
		Values that are not "text/html" or an XML mime type will throw. It will default to "application/xhtml+xml" if
		the given filename ends in .xhtml or .xml; otherwise it will continue to default to "text/html".
	**/
	@:optional
	var contentType : String;
	/**
		referrer just affects the value read from document.referrer.
		It defaults to no referrer (which reflects as the empty string).
	**/
	@:optional
	var referrer : String;
	/**
		userAgent affects the value read from navigator.userAgent, as well as the User-Agent header sent while fetching subresources.
	**/
	@:optional
	var userAgent : String;
	/**
		`includeNodeLocations` preserves the location info produced by the HTML parser,
		allowing you to retrieve it with the nodeLocation() method (described below).
		
		It defaults to false to give the best performance,
		and cannot be used with an XML content type since our XML parser does not support location info.
	**/
	@:optional
	var includeNodeLocations : Bool;
	@:optional
	var runScripts : String;
	@:optional
	var resources : ts.AnyOf2<ResourceLoader, String>;
	@:optional
	var virtualConsole : VirtualConsole;
	@:optional
	var cookieJar : CookieJar;
	/**
		jsdom does not have the capability to render visual content, and will act like a headless browser by default.
		It provides hints to web pages through APIs such as document.hidden that their content is not visible.
		
		When the `pretendToBeVisual` option is set to `true`, jsdom will pretend that it is rendering and displaying
		content.
	**/
	@:optional
	var pretendToBeVisual : Bool;
	@:optional
	function beforeParse(window:DOMWindow):Void;
};