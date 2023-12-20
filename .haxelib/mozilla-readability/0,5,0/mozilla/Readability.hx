package mozilla;

@:jsRequire("@mozilla/readability") @valueModuleOnly extern class Readability {
	/**
		Decides whether or not the document is reader-able without parsing the whole thing.
	**/
	static function isProbablyReaderable(document:js.html.Document, ?options:{ /** The minimum node content length used to decide if the document is readerable. **/ @:optional var minContentLength : Float; /** The minumum cumulated 'score' used to determine if the document is readerable. **/ @:optional var minScore : Float; /** The function used to determine if a node is visible. **/ @:optional dynamic function visibilityChecker(node:js.html.Node):Bool; }):Bool;
}