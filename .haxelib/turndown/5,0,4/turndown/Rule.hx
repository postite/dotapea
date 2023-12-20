package turndown;

typedef Rule = {
	var filter : Filter;
	@:optional
	dynamic function replacement(content:String, node:Node, options:Options):String;
};