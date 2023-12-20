@:jsRequire("tough-cookie") @valueModuleOnly extern class ToughCookie {
	/**
		Parse a cookie date string into a Date.
		Parses according to RFC6265 Section 5.1.1, not Date.parse().
	**/
	static function parseDate(string:String):js.lib.Date;
	/**
		Format a Date into a RFC1123 string (the RFC6265-recommended format).
	**/
	static function formatDate(date:js.lib.Date):String;
	/**
		Transforms a domain-name into a canonical domain-name.
		The canonical domain-name is a trimmed, lowercased, stripped-of-leading-dot
		and optionally punycode-encoded domain-name (Section 5.1.2 of RFC6265).
		For the most part, this function is idempotent (can be run again on its output without ill effects).
	**/
	static function canonicalDomain(str:String):String;
	/**
		Answers "does this real domain match the domain in a cookie?".
		The str is the "current" domain-name and the domStr is the "cookie" domain-name.
		Matches according to RFC6265 Section 5.1.3, but it helps to think of it as a "suffix match".
		
		The canonicalize parameter will run the other two parameters through canonicalDomain or not.
	**/
	static function domainMatch(str:String, domStr:String, ?canonicalize:Bool):Bool;
	/**
		Given a current request/response path, gives the Path apropriate for storing in a cookie.
		This is basically the "directory" of a "file" in the path, but is specified by Section 5.1.4 of the RFC.
		
		The path parameter MUST be only the pathname part of a URI (i.e. excludes the hostname, query, fragment, etc.).
		This is the .pathname property of node's uri.parse() output.
	**/
	static function defaultPath(path:String):String;
	/**
		Answers "does the request-path path-match a given cookie-path?" as per RFC6265 Section 5.1.4.
		Returns a boolean.
		
		This is essentially a prefix-match where cookiePath is a prefix of reqPath.
	**/
	static function pathMatch(reqPath:String, cookiePath:String):Bool;
	/**
		alias for Cookie.parse(cookieString[, options])
	**/
	static function parse(cookieString:String, ?options:tough_cookie.cookie.ParseOptions):Null<tough_cookie.Cookie>;
	/**
		alias for Cookie.fromJSON(string)
	**/
	static function fromJSON(string:String):tough_cookie.Cookie;
	static function getPublicSuffix(hostname:String):Null<String>;
	static function cookieCompare(a:tough_cookie.Cookie, b:tough_cookie.Cookie):Float;
	static function permuteDomain(domain:String, ?allowSpecialUseDomain:Bool):Array<String>;
	static function permutePath(path:String):Array<String>;
	static final version : String;
	static final PrefixSecurityEnum : {
		var DISABLED : String;
		var SILENT : String;
		var STRICT : String;
	};
}