package tough_cookie;

@:jsRequire("tough-cookie", "Store") extern class Store {
	function new();
	var synchronous : Bool;
	function findCookie(domain:String, path:String, key:String, cb:(err:Null<js.lib.Error>, cookie:Null<Cookie>) -> Void):Void;
	function findCookies(domain:String, path:String, allowSpecialUseDomain:Bool, cb:(err:Null<js.lib.Error>, cookie:Array<Cookie>) -> Void):Void;
	function putCookie(cookie:Cookie, cb:(err:Null<js.lib.Error>) -> Void):Void;
	function updateCookie(oldCookie:Cookie, newCookie:Cookie, cb:(err:Null<js.lib.Error>) -> Void):Void;
	function removeCookie(domain:String, path:String, key:String, cb:(err:Null<js.lib.Error>) -> Void):Void;
	function removeCookies(domain:String, path:String, cb:(err:Null<js.lib.Error>) -> Void):Void;
	function getAllCookies(cb:(err:Null<js.lib.Error>, cookie:Array<Cookie>) -> Void):Void;
	static var prototype : Store;
}