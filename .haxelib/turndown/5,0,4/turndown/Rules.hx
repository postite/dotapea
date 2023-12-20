package turndown;

typedef Rules = {
	var options : Options;
	var array : Array<Rule>;
	dynamic function blankRule(content:String, node:Node, options:Options):String;
	dynamic function defaultRule(content:String, node:Node, options:Options):String;
	dynamic function keepReplacement(content:String, node:Node, options:Options):String;
	function add(key:Filter, rule:Rule):Void;
	function forEach(callback:(rule:Rule, index:Float) -> Dynamic):Void;
	function forNode(node:Node):Rule;
	function keep(filter:Filter):Void;
	function remove(filter:Filter):Void;
};