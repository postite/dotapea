package jsdom;

@:jsRequire("jsdom", "CookieJar") extern class CookieJar extends tough_cookie.CookieJar {
	static var prototype : CookieJar;
}