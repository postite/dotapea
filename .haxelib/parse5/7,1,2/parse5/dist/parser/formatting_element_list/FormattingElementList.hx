package parse5.dist.parser.formatting_element_list;

@:jsRequire("parse5/dist/parser/formatting-element-list", "FormattingElementList") extern class FormattingElementList<T> {
	function new(treeAdapter:Dynamic);
	private var treeAdapter : Dynamic;
	var entries : Array<Entry<T>>;
	var bookmark : Null<Entry<T>>;
	private var _getNoahArkConditionCandidates : Dynamic;
	private var _ensureNoahArkCondition : Dynamic;
	function insertMarker():Void;
	function pushElement(element:Dynamic, token:Dynamic):Void;
	function insertElementAfterBookmark(element:Dynamic, token:Dynamic):Void;
	function removeEntry(entry:Entry<T>):Void;
	/**
		Clears the list of formatting elements up to the last marker.
	**/
	function clearToLastMarker():Void;
	function getElementEntryInScopeWithTagName(tagName:String):Null<ElementEntry<T>>;
	function getElementEntry(element:Dynamic):Null<ElementEntry<T>>;
	static var prototype : FormattingElementList<Dynamic>;
}