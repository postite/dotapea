package tough_cookie.cookiejar;

typedef GetCookiesOptions = {
	@:optional
	var http : Bool;
	@:optional
	var secure : Bool;
	@:optional
	var now : js.lib.Date;
	@:optional
	var expire : Bool;
	@:optional
	var allPaths : Bool;
};