package parse5;

@jsInaccessible @:enum extern abstract InsertionMode(Int) from Int to Int {
	var INITIAL;
	var BEFORE_HTML;
	var BEFORE_HEAD;
	var IN_HEAD;
	var IN_HEAD_NO_SCRIPT;
	var AFTER_HEAD;
	var IN_BODY;
	var TEXT;
	var IN_TABLE;
	var IN_TABLE_TEXT;
	var IN_CAPTION;
	var IN_COLUMN_GROUP;
	var IN_TABLE_BODY;
	var IN_ROW;
	var IN_CELL;
	var IN_SELECT;
	var IN_SELECT_IN_TABLE;
	var IN_TEMPLATE;
	var AFTER_BODY;
	var IN_FRAMESET;
	var AFTER_FRAMESET;
	var AFTER_AFTER_BODY;
	var AFTER_AFTER_FRAMESET;
}