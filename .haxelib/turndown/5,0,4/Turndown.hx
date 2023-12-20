@:jsRequire("turndown") extern class Turndown {
	function new(?options:turndown.Options);
	function addRule(key:String, rule:turndown.Rule):Turndown;
	function keep(filter:turndown.Filter):Turndown;
	function remove(filter:turndown.Filter):Turndown;
	function use(plugins:ts.AnyOf2<turndown.Plugin, Array<turndown.Plugin>>):Turndown;
	function escape(str:String):String;
	function turndown(html:ts.AnyOf4<String, js.html.Document, js.html.Element, js.html.DocumentFragment>):String;
	var options : turndown.Options;
	var rules : turndown.Rules;
	static var prototype : Turndown;
}