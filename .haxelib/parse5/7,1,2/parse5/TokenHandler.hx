package parse5;

typedef TokenHandler = {
	function onComment(token:parse5.dist.common.token.CommentToken):Void;
	function onDoctype(token:parse5.dist.common.token.DoctypeToken):Void;
	function onStartTag(token:parse5.dist.common.token.TagToken):Void;
	function onEndTag(token:parse5.dist.common.token.TagToken):Void;
	function onEof(token:parse5.dist.common.token.EOFToken):Void;
	function onCharacter(token:parse5.dist.common.token.CharacterToken):Void;
	function onNullCharacter(token:parse5.dist.common.token.CharacterToken):Void;
	function onWhitespaceCharacter(token:parse5.dist.common.token.CharacterToken):Void;
	@:optional
	dynamic function onParseError(error:ParserError):Void;
};