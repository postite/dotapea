package turndown;

typedef Options = {
	@:optional
	var headingStyle : String;
	@:optional
	var hr : String;
	@:optional
	var br : String;
	@:optional
	var bulletListMarker : String;
	@:optional
	var codeBlockStyle : String;
	@:optional
	var emDelimiter : String;
	@:optional
	var fence : String;
	@:optional
	var strongDelimiter : String;
	@:optional
	var linkStyle : String;
	@:optional
	var linkReferenceStyle : String;
	@:optional
	dynamic function keepReplacement(content:String, node:Node, options:Options):String;
	@:optional
	dynamic function blankReplacement(content:String, node:Node, options:Options):String;
	@:optional
	dynamic function defaultReplacement(content:String, node:Node, options:Options):String;
};