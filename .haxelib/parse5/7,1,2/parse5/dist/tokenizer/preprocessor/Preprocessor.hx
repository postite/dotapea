package parse5.dist.tokenizer.preprocessor;

@:jsRequire("parse5/dist/tokenizer/preprocessor", "Preprocessor") extern class Preprocessor {
	function new(handler:{ @:optional dynamic function onParseError(error:parse5.ParserError):Void; });
	private var handler : Dynamic;
	var html : String;
	private var pos : Dynamic;
	private var lastGapPos : Dynamic;
	private var gapStack : Dynamic;
	private var skipNextNewLine : Dynamic;
	private var lastChunkWritten : Dynamic;
	var endOfChunkHit : Bool;
	var bufferWaterline : Float;
	private var isEol : Dynamic;
	private var lineStartPos : Dynamic;
	var droppedBufferSize : Float;
	var line : Float;
	/**
		The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before.
	**/
	final col : Float;
	final offset : Float;
	function getError(code:parse5.ErrorCodes):parse5.ParserError;
	private var lastErrOffset : Dynamic;
	private var _err : Dynamic;
	private var _addGap : Dynamic;
	private var _processSurrogate : Dynamic;
	function willDropParsedChunk():Bool;
	function dropParsedChunk():Void;
	function write(chunk:String, isLastChunk:Bool):Void;
	function insertHtmlAtCurrentPos(chunk:String):Void;
	function startsWith(pattern:String, caseSensitive:Bool):Bool;
	function peek(offset:Float):Float;
	function advance():Float;
	private var _checkForProblematicCharacters : Dynamic;
	function retreat(count:Float):Void;
	static var prototype : Preprocessor;
}