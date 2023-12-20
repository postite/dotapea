package tough_cookie.cookiejar;

typedef Serialized = {
	var version : String;
	var storeType : String;
	var rejectPublicSuffixes : Bool;
	var cookies : Array<tough_cookie.cookie.Serialized>;
};