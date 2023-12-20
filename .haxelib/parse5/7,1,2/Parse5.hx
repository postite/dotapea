@:jsRequire("parse5") @valueModuleOnly extern class Parse5 {
	/**
		Parses an HTML string.
	**/
	static function parse<T>(html:String, ?options:parse5.ParserOptions<T>):Dynamic;
	/**
		Parses an HTML fragment.
	**/
	@:overload(function<T>(html:String, ?options:parse5.ParserOptions<T>):Dynamic { })
	static function parseFragment<T>(fragmentContext:Null<Dynamic>, html:String, options:parse5.ParserOptions<T>):Dynamic;
	static var type : Dynamic;
	static final defaultTreeAdapter : Dynamic;
	/**
		Serializes an AST node to an HTML string.
	**/
	static function serialize<T>(node:Dynamic, ?options:parse5.SerializerOptions<T>):String;
	/**
		Serializes an AST element node to an HTML string, including the element node.
	**/
	static function serializeOuter<T>(node:Dynamic, ?options:parse5.SerializerOptions<T>):String;
	static final TokenizerMode : {
		final DATA : Int;
		final RCDATA : Int;
		final RAWTEXT : Int;
		final SCRIPT_DATA : Int;
		final PLAINTEXT : Int;
		final CDATA_SECTION : Int;
	};
}