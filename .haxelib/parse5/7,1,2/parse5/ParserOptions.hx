package parse5;

typedef ParserOptions<T> = {
	/**
		The [scripting flag](https://html.spec.whatwg.org/multipage/parsing.html#scripting-flag). If set
		to `true`, `noscript` element content will be parsed as text.
	**/
	@:optional
	var scriptingEnabled : Bool;
	/**
		Enables source code location information. When enabled, each node (except the root node)
		will have a `sourceCodeLocation` property. If the node is not an empty element, `sourceCodeLocation` will
		be a {@link ElementLocation} object, otherwise it will be {@link Location}.
		If the element was implicitly created by the parser (as part of
		[tree correction](https://html.spec.whatwg.org/multipage/syntax.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser)),
		its `sourceCodeLocation` property will be `undefined`.
	**/
	@:optional
	var sourceCodeLocationInfo : Bool;
	/**
		Specifies the resulting tree format.
	**/
	@:optional
	var treeAdapter : Dynamic;
	/**
		Callback for parse errors.
	**/
	@:optional
	dynamic function onParseError(error:ParserError):Void;
};