package tough_cookie;

@:jsRequire("tough-cookie", "MemoryCookieStore") extern class MemoryCookieStore extends Store {
	@:overload(function(domain:String, path:String, key:String):js.lib.Promise<Null<Cookie>> { })
	function findCookie(domain:String, path:String, key:String, cb:(err:Null<js.lib.Error>, cookie:Null<Cookie>) -> Void):Void;
	@:overload(function(domain:String, path:String, cb:(err:Null<js.lib.Error>, cookie:Array<Cookie>) -> Void):Void { })
	@:overload(function(domain:String, path:String, ?allowSpecialUseDomain:Bool):js.lib.Promise<Array<Cookie>> { })
	function findCookies(domain:String, path:String, allowSpecialUseDomain:Bool, cb:(err:Null<js.lib.Error>, cookie:Array<Cookie>) -> Void):Void;
	@:overload(function(cookie:Cookie):js.lib.Promise<ts.Undefined> { })
	function putCookie(cookie:Cookie, cb:(err:Null<js.lib.Error>) -> Void):Void;
	@:overload(function(oldCookie:Cookie, newCookie:Cookie):js.lib.Promise<ts.Undefined> { })
	function updateCookie(oldCookie:Cookie, newCookie:Cookie, cb:(err:Null<js.lib.Error>) -> Void):Void;
	@:overload(function(domain:String, path:String, key:String):js.lib.Promise<ts.Undefined> { })
	function removeCookie(domain:String, path:String, key:String, cb:(err:Null<js.lib.Error>) -> Void):Void;
	@:overload(function(domain:String, path:String):js.lib.Promise<ts.Undefined> { })
	function removeCookies(domain:String, path:String, cb:(err:Null<js.lib.Error>) -> Void):Void;
	@:overload(function():js.lib.Promise<Array<Cookie>> { })
	function getAllCookies(cb:(err:Null<js.lib.Error>, cookie:Array<Cookie>) -> Void):Void;
	static var prototype : MemoryCookieStore;
}