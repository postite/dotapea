package parse5;

@:enum extern abstract State(Int) from Int to Int {
	var DATA = 0;
	var RCDATA = 1;
	var RAWTEXT = 2;
	var SCRIPT_DATA = 3;
	var PLAINTEXT = 4;
	var TAG_OPEN = 5;
	var END_TAG_OPEN = 6;
	var TAG_NAME = 7;
	var RCDATA_LESS_THAN_SIGN = 8;
	var RCDATA_END_TAG_OPEN = 9;
	var RCDATA_END_TAG_NAME = 10;
	var RAWTEXT_LESS_THAN_SIGN = 11;
	var RAWTEXT_END_TAG_OPEN = 12;
	var RAWTEXT_END_TAG_NAME = 13;
	var SCRIPT_DATA_LESS_THAN_SIGN = 14;
	var SCRIPT_DATA_END_TAG_OPEN = 15;
	var SCRIPT_DATA_END_TAG_NAME = 16;
	var SCRIPT_DATA_ESCAPE_START = 17;
	var SCRIPT_DATA_ESCAPE_START_DASH = 18;
	var SCRIPT_DATA_ESCAPED = 19;
	var SCRIPT_DATA_ESCAPED_DASH = 20;
	var SCRIPT_DATA_ESCAPED_DASH_DASH = 21;
	var SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22;
	var SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23;
	var SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24;
	var SCRIPT_DATA_DOUBLE_ESCAPE_START = 25;
	var SCRIPT_DATA_DOUBLE_ESCAPED = 26;
	var SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27;
	var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28;
	var SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29;
	var SCRIPT_DATA_DOUBLE_ESCAPE_END = 30;
	var BEFORE_ATTRIBUTE_NAME = 31;
	var ATTRIBUTE_NAME = 32;
	var AFTER_ATTRIBUTE_NAME = 33;
	var BEFORE_ATTRIBUTE_VALUE = 34;
	var ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35;
	var ATTRIBUTE_VALUE_SINGLE_QUOTED = 36;
	var ATTRIBUTE_VALUE_UNQUOTED = 37;
	var AFTER_ATTRIBUTE_VALUE_QUOTED = 38;
	var SELF_CLOSING_START_TAG = 39;
	var BOGUS_COMMENT = 40;
	var MARKUP_DECLARATION_OPEN = 41;
	var COMMENT_START = 42;
	var COMMENT_START_DASH = 43;
	var COMMENT = 44;
	var COMMENT_LESS_THAN_SIGN = 45;
	var COMMENT_LESS_THAN_SIGN_BANG = 46;
	var COMMENT_LESS_THAN_SIGN_BANG_DASH = 47;
	var COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48;
	var COMMENT_END_DASH = 49;
	var COMMENT_END = 50;
	var COMMENT_END_BANG = 51;
	var DOCTYPE = 52;
	var BEFORE_DOCTYPE_NAME = 53;
	var DOCTYPE_NAME = 54;
	var AFTER_DOCTYPE_NAME = 55;
	var AFTER_DOCTYPE_PUBLIC_KEYWORD = 56;
	var BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57;
	var DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58;
	var DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59;
	var AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60;
	var BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61;
	var AFTER_DOCTYPE_SYSTEM_KEYWORD = 62;
	var BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63;
	var DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64;
	var DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65;
	var AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66;
	var BOGUS_DOCTYPE = 67;
	var CDATA_SECTION = 68;
	var CDATA_SECTION_BRACKET = 69;
	var CDATA_SECTION_END = 70;
	var CHARACTER_REFERENCE = 71;
	var NAMED_CHARACTER_REFERENCE = 72;
	var AMBIGUOUS_AMPERSAND = 73;
	var NUMERIC_CHARACTER_REFERENCE = 74;
	var HEXADEMICAL_CHARACTER_REFERENCE_START = 75;
	var HEXADEMICAL_CHARACTER_REFERENCE = 76;
	var DECIMAL_CHARACTER_REFERENCE = 77;
	var NUMERIC_CHARACTER_REFERENCE_END = 78;
}