package tough_cookie.cookiejar;

typedef SetCookieOptions = {
	@:optional
	var http : Bool;
	@:optional
	var secure : Bool;
	@:optional
	var now : js.lib.Date;
	@:optional
	var ignoreError : Bool;
};