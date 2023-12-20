package mozilla.readability;

@:jsRequire("@mozilla/readability", "Readability") extern class Readability<T> {
	function new(document:js.html.Document, ?options:{ @:optional var debug : Bool; @:optional var maxElemsToParse : Float; @:optional var nbTopCandidates : Float; @:optional var charThreshold : Float; @:optional var classesToPreserve : Array<String>; @:optional var keepClasses : Bool; @:optional dynamic function serializer(node:js.html.Node):T; @:optional var disableJSONLD : Bool; @:optional var allowedVideoRegex : js.lib.RegExp; });
	function parse():Null<{
		/**
			article title
		**/
		var title : String;
		/**
			HTML string of processed article content
		**/
		var content : T;
		/**
			text content of the article, with all the HTML tags removed
		**/
		var textContent : String;
		/**
			length of an article, in characters
		**/
		var length : Float;
		/**
			article description, or short excerpt from the content
		**/
		var excerpt : String;
		/**
			author metadata
		**/
		var byline : String;
		/**
			content direction
		**/
		var dir : String;
		/**
			name of the site
		**/
		var siteName : String;
		/**
			content language
		**/
		var lang : String;
		/**
			published time
		**/
		var publishedTime : String;
	}>;
	static var prototype : Readability<Dynamic>;
}