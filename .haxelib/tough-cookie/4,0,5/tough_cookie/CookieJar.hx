package tough_cookie;

@:jsRequire("tough-cookie", "CookieJar") extern class CookieJar {
	function new(?store:Store, ?options:tough_cookie.cookiejar.Options);
	@:overload(function(cookieOrString:ts.AnyOf2<String, Cookie>, currentUrl:String, options:tough_cookie.cookiejar.SetCookieOptions, cb:(err:Null<js.lib.Error>, cookie:Cookie) -> Void):Void { })
	@:overload(function(cookieOrString:ts.AnyOf2<String, Cookie>, currentUrl:String, cb:(err:Null<js.lib.Error>, cookie:Cookie) -> Void):Void { })
	function setCookie(cookieOrString:ts.AnyOf2<String, Cookie>, currentUrl:String, ?options:tough_cookie.cookiejar.SetCookieOptions):js.lib.Promise<Cookie>;
	function setCookieSync(cookieOrString:ts.AnyOf2<String, Cookie>, currentUrl:String, ?options:tough_cookie.cookiejar.SetCookieOptions):Cookie;
	@:overload(function(currentUrl:String, options:tough_cookie.cookiejar.GetCookiesOptions, cb:(err:Null<js.lib.Error>, cookies:Array<Cookie>) -> Void):Void { })
	@:overload(function(currentUrl:String, cb:(err:Null<js.lib.Error>, cookies:Array<Cookie>) -> Void):Void { })
	function getCookies(currentUrl:String, ?options:tough_cookie.cookiejar.GetCookiesOptions):js.lib.Promise<Array<Cookie>>;
	function getCookiesSync(currentUrl:String, ?options:tough_cookie.cookiejar.GetCookiesOptions):Array<Cookie>;
	@:overload(function(currentUrl:String, options:tough_cookie.cookiejar.GetCookiesOptions, cb:(err:Null<js.lib.Error>, cookies:String) -> Void):Void { })
	@:overload(function(currentUrl:String, cb:(err:Null<js.lib.Error>, cookies:String) -> Void):Void { })
	function getCookieString(currentUrl:String, ?options:tough_cookie.cookiejar.GetCookiesOptions):js.lib.Promise<String>;
	function getCookieStringSync(currentUrl:String, ?options:tough_cookie.cookiejar.GetCookiesOptions):String;
	@:overload(function(currentUrl:String, options:tough_cookie.cookiejar.GetCookiesOptions, cb:(err:Null<js.lib.Error>, cookies:Array<String>) -> Void):Void { })
	@:overload(function(currentUrl:String, cb:(err:Null<js.lib.Error>, cookies:Array<String>) -> Void):Void { })
	function getSetCookieStrings(currentUrl:String, ?options:tough_cookie.cookiejar.GetCookiesOptions):js.lib.Promise<Array<String>>;
	function getSetCookieStringsSync(currentUrl:String, ?options:tough_cookie.cookiejar.GetCookiesOptions):Array<String>;
	@:overload(function(cb:(err:Null<js.lib.Error>, serializedObject:tough_cookie.cookiejar.Serialized) -> Void):Void { })
	function serialize():js.lib.Promise<tough_cookie.cookiejar.Serialized>;
	function serializeSync():tough_cookie.cookiejar.Serialized;
	function toJSON():tough_cookie.cookiejar.Serialized;
	@:overload(function(store:Store, cb:(err:Null<js.lib.Error>, newJar:CookieJar) -> Void):Void { })
	@:overload(function(cb:(err:Null<js.lib.Error>, newJar:CookieJar) -> Void):Void { })
	function clone(?store:Store):js.lib.Promise<CookieJar>;
	function cloneSync(?store:Store):CookieJar;
	@:overload(function(cb:(err:Null<js.lib.Error>) -> Void):Void { })
	function removeAllCookies():js.lib.Promise<ts.Undefined>;
	function removeAllCookiesSync():Void;
	static var prototype : CookieJar;
	@:overload(function(serialized:ts.AnyOf2<String, tough_cookie.cookiejar.Serialized>, store:Store, cb:(err:Null<js.lib.Error>, object:CookieJar) -> Void):Void { })
	@:overload(function(serialized:ts.AnyOf2<String, tough_cookie.cookiejar.Serialized>, cb:(err:Null<js.lib.Error>, object:CookieJar) -> Void):Void { })
	static function deserialize(serialized:ts.AnyOf2<String, tough_cookie.cookiejar.Serialized>, ?store:Store):js.lib.Promise<CookieJar>;
	static function deserializeSync(serialized:ts.AnyOf2<String, tough_cookie.cookiejar.Serialized>, ?store:Store):CookieJar;
	static function fromJSON(string:String):CookieJar;
}