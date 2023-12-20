package parse5;

typedef SerializerOptions<T> = {
	/**
		Specifies input tree format.
	**/
	@:optional
	var treeAdapter : Dynamic;
	/**
		The [scripting flag](https://html.spec.whatwg.org/multipage/parsing.html#scripting-flag). If set
		to `true`, `noscript` element content will not be escaped.
	**/
	@:optional
	var scriptingEnabled : Bool;
};