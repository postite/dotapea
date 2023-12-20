package tough_cookie.cookie;

typedef Properties = {
	@:optional
	var key : String;
	@:optional
	var value : String;
	@:optional
	var expires : ts.AnyOf2<js.lib.Date, String>;
	@:optional
	var maxAge : ts.AnyOf2<Float, String>;
	@:optional
	var domain : String;
	@:optional
	var path : String;
	@:optional
	var secure : Bool;
	@:optional
	var httpOnly : Bool;
	@:optional
	var extensions : Array<String>;
	@:optional
	var creation : js.lib.Date;
	@:optional
	var creationIndex : Float;
	@:optional
	var hostOnly : Bool;
	@:optional
	var pathIsDefault : Bool;
	@:optional
	var lastAccessed : js.lib.Date;
	@:optional
	var sameSite : String;
};