package tough_cookie;

@:jsRequire("tough-cookie", "Cookie") extern class Cookie {
	function new(?properties:tough_cookie.cookie.Properties);
	var key : String;
	var value : String;
	var expires : ts.AnyOf2<js.lib.Date, String>;
	var maxAge : ts.AnyOf2<Float, String>;
	var domain : Null<String>;
	var path : Null<String>;
	var secure : Bool;
	var httpOnly : Bool;
	var extensions : Null<Array<String>>;
	var creation : Null<js.lib.Date>;
	var creationIndex : Float;
	var hostOnly : Null<Bool>;
	var pathIsDefault : Null<Bool>;
	var lastAccessed : Null<js.lib.Date>;
	var sameSite : String;
	function toString():String;
	function cookieString():String;
	function setExpires(exp:ts.AnyOf2<String, js.lib.Date>):Void;
	function setMaxAge(number:Float):Void;
	function expiryTime(?now:Float):Float;
	function expiryDate(?now:Float):js.lib.Date;
	function TTL(?now:js.lib.Date):Float;
	function isPersistent():Bool;
	function canonicalizedDomain():Null<String>;
	function cdomain():Null<String>;
	function inspect():String;
	function toJSON():haxe.DynamicAccess<Dynamic>;
	function clone():Cookie;
	function validate():ts.AnyOf2<String, Bool>;
	static var prototype : Cookie;
	static function parse(cookieString:String, ?options:tough_cookie.cookie.ParseOptions):Null<Cookie>;
	static function fromJSON(strOrObj:ts.AnyOf2<String, Dynamic>):Null<Cookie>;
}