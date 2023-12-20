package parse5;

@:jsRequire("parse5", "Parser") extern class Parser<T> {
	function new(?options:ParserOptions<T>, ?document:Dynamic, ?fragmentContext:Dynamic, ?scriptHandler:(pendingScript:Dynamic) -> Void);
	var fragmentContext : Null<Dynamic>;
	@:optional
	dynamic function scriptHandler(pendingScript:Dynamic):Void;
	var treeAdapter : Dynamic;
	@:optional
	dynamic function onParseError(error:ParserError):Void;
	private var currentToken : Dynamic;
	var options : {
		/**
			The [scripting flag](https://html.spec.whatwg.org/multipage/parsing.html#scripting-flag). If set
			to `true`, `noscript` element content will be parsed as text.
		**/
		var scriptingEnabled : Bool;
		/**
			Enables source code location information. When enabled, each node (except the root node)
			will have a `sourceCodeLocation` property. If the node is not an empty element, `sourceCodeLocation` will
			be a {@link ElementLocation} object, otherwise it will be {@link Location}.
			If the element was implicitly created by the parser (as part of
			[tree correction](https://html.spec.whatwg.org/multipage/syntax.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser)),
			its `sourceCodeLocation` property will be `undefined`.
		**/
		var sourceCodeLocationInfo : Bool;
		/**
			Specifies the resulting tree format.
		**/
		var treeAdapter : Dynamic;
		/**
			Callback for parse errors.
		**/
		@:optional
		dynamic function onParseError(error:ParserError):Void;
	};
	var document : Dynamic;
	function getFragment():Dynamic;
	var tokenizer : Tokenizer;
	var stopped : Bool;
	var insertionMode : InsertionMode;
	var originalInsertionMode : InsertionMode;
	var fragmentContextID : parse5.dist.common.html.TAG_ID;
	var headElement : Null<Dynamic>;
	var formElement : Null<Dynamic>;
	var openElements : parse5.dist.parser.open_element_stack.OpenElementStack<T>;
	var activeFormattingElements : parse5.dist.parser.formatting_element_list.FormattingElementList<T>;
	/**
		Indicates that the current node is not an element in the HTML namespace
	**/
	private var currentNotInHTML : Dynamic;
	/**
		The template insertion mode stack is maintained from the left.
		Ie. the topmost element will always have index 0.
	**/
	var tmplInsertionModeStack : Array<InsertionMode>;
	var pendingCharacterTokens : Array<parse5.dist.common.token.CharacterToken>;
	var hasNonWhitespacePendingCharacterToken : Bool;
	var framesetOk : Bool;
	var skipNextNewLine : Bool;
	var fosterParentingEnabled : Bool;
	function _err(token:parse5.dist.common.token.Token, code:ErrorCodes, ?beforeToken:Bool):Void;
	function onItemPush(node:Dynamic, tid:Float, isTop:Bool):Void;
	function onItemPop(node:Dynamic, isTop:Bool):Void;
	private var _setContextModes : Dynamic;
	function _switchToTextParsing(currentToken:parse5.dist.common.token.TagToken, nextTokenizerState:Int):Void;
	function switchToPlaintextParsing():Void;
	function _getAdjustedCurrentElement():Dynamic;
	function _findFormInFragmentContext():Void;
	private var _initTokenizerForFragmentParsing : Dynamic;
	function _setDocumentType(token:parse5.dist.common.token.DoctypeToken):Void;
	function _attachElementToTree(element:Dynamic, location:Null<parse5.dist.common.token.LocationWithAttributes>):Void;
	function _appendElement(token:parse5.dist.common.token.TagToken, namespaceURI:parse5.dist.common.html.NS):Void;
	function _insertElement(token:parse5.dist.common.token.TagToken, namespaceURI:parse5.dist.common.html.NS):Void;
	function _insertFakeElement(tagName:String, tagID:parse5.dist.common.html.TAG_ID):Void;
	function _insertTemplate(token:parse5.dist.common.token.TagToken):Void;
	function _insertFakeRootElement():Void;
	function _appendCommentNode(token:parse5.dist.common.token.CommentToken, parent:Dynamic):Void;
	function _insertCharacters(token:parse5.dist.common.token.CharacterToken):Void;
	function _adoptNodes(donor:Dynamic, recipient:Dynamic):Void;
	function _setEndLocation(element:Dynamic, closingToken:parse5.dist.common.token.Token):Void;
	private var shouldProcessStartTagTokenInForeignContent : Dynamic;
	function _processToken(token:parse5.dist.common.token.Token):Void;
	function _isIntegrationPoint(tid:parse5.dist.common.html.TAG_ID, element:Dynamic, ?foreignNS:parse5.dist.common.html.NS):Bool;
	function _reconstructActiveFormattingElements():Void;
	function _closeTableCell():Void;
	function _closePElement():Void;
	function _resetInsertionMode():Void;
	function _resetInsertionModeForSelect(selectIdx:Float):Void;
	function _isElementCausesFosterParenting(tn:parse5.dist.common.html.TAG_ID):Bool;
	function _shouldFosterParentOnInsertion():Bool;
	function _findFosterParentingLocation():{
		var parent : Dynamic;
		var beforeElement : Null<Dynamic>;
	};
	function _fosterParentElement(element:Dynamic):Void;
	function _isSpecialElement(element:Dynamic, id:parse5.dist.common.html.TAG_ID):Bool;
	function onCharacter(token:parse5.dist.common.token.CharacterToken):Void;
	function onNullCharacter(token:parse5.dist.common.token.CharacterToken):Void;
	function onComment(token:parse5.dist.common.token.CommentToken):Void;
	function onDoctype(token:parse5.dist.common.token.DoctypeToken):Void;
	function onStartTag(token:parse5.dist.common.token.TagToken):Void;
	/**
		Processes a given start tag.
		
		`onStartTag` checks if a self-closing tag was recognized. When a token
		is moved inbetween multiple insertion modes, this check for self-closing
		could lead to false positives. To avoid this, `_processStartTag` is used
		for nested calls.
	**/
	function _processStartTag(token:parse5.dist.common.token.TagToken):Void;
	function _startTagOutsideForeignContent(token:parse5.dist.common.token.TagToken):Void;
	function onEndTag(token:parse5.dist.common.token.TagToken):Void;
	function _endTagOutsideForeignContent(token:parse5.dist.common.token.TagToken):Void;
	function onEof(token:parse5.dist.common.token.EOFToken):Void;
	function onWhitespaceCharacter(token:parse5.dist.common.token.CharacterToken):Void;
	static var prototype : Parser<Dynamic>;
	static function parse<T>(html:String, ?options:ParserOptions<T>):Dynamic;
	static function getFragmentParser<T>(?fragmentContext:Dynamic, ?options:ParserOptions<T>):Parser<T>;
}