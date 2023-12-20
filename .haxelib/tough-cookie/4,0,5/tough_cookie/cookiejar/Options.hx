package tough_cookie.cookiejar;

typedef Options = {
	@:optional
	var allowSpecialUseDomain : Bool;
	@:optional
	var looseMode : Bool;
	@:optional
	var rejectPublicSuffixes : Bool;
	@:optional
	var prefixSecurity : String;
};