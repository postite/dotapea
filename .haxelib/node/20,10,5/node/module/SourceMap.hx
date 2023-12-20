package node.module;

@:jsRequire("module", "SourceMap") extern class SourceMap {
	function new(payload:SourceMapPayload);
	/**
		Getter for the payload used to construct the `SourceMap` instance.
	**/
	final payload : SourceMapPayload;
	/**
		Given a line offset and column offset in the generated source
		file, returns an object representing the SourceMap range in the
		original file if found, or an empty object if not.
		
		The object returned contains the following keys:
		
		The returned value represents the raw range as it appears in the
		SourceMap, based on zero-indexed offsets, _not_ 1-indexed line and
		column numbers as they appear in Error messages and CallSite
		objects.
		
		To get the corresponding 1-indexed line and column numbers from a
		lineNumber and columnNumber as they are reported by Error stacks
		and CallSite objects, use `sourceMap.findOrigin(lineNumber, columnNumber)`
	**/
	function findEntry(lineOffset:Float, columnOffset:Float):SourceMapping;
	/**
		Given a 1-indexed `lineNumber` and `columnNumber` from a call site in the generated source,
		find the corresponding call site location in the original source.
		
		If the `lineNumber` and `columnNumber` provided are not found in any source map,
		then an empty object is returned.
	**/
	function findOrigin(lineNumber:Float, columnNumber:Float):ts.AnyOf2<{ }, SourceOrigin>;
	static var prototype : SourceMap;
}