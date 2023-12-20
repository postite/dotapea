package node.vm;

typedef RunningScriptInNewContextOptions = {
	/**
		Human-readable name of the newly created context.
	**/
	@:optional
	var contextName : String;
	/**
		Origin corresponding to the newly created context for display purposes. The origin should be formatted like a URL,
		but with only the scheme, host, and port (if necessary), like the value of the `url.origin` property of a `URL` object.
		Most notably, this string should omit the trailing slash, as that denotes a path.
	**/
	@:optional
	var contextOrigin : String;
	@:optional
	var contextCodeGeneration : {
		/**
			If set to false any calls to eval or function constructors (Function, GeneratorFunction, etc)
			will throw an EvalError.
		**/
		@:optional
		var strings : Bool;
		/**
			If set to false any attempt to compile a WebAssembly module will throw a WebAssembly.CompileError.
		**/
		@:optional
		var wasm : Bool;
	};
	/**
		If set to `afterEvaluate`, microtasks will be run immediately after the script has run.
	**/
	@:optional
	var microtaskMode : String;
	/**
		When `true`, if an `Error` occurs while compiling the `code`, the line of code causing the error is attached to the stack trace.
		Default: `true`.
	**/
	@:optional
	var displayErrors : Bool;
	/**
		Specifies the number of milliseconds to execute code before terminating execution.
		If execution is terminated, an `Error` will be thrown. This value must be a strictly positive integer.
	**/
	@:optional
	var timeout : Float;
	/**
		If `true`, the execution will be terminated when `SIGINT` (Ctrl+C) is received.
		Existing handlers for the event that have been attached via `process.on('SIGINT')` will be disabled during script execution, but will continue to work after that.
		If execution is terminated, an `Error` will be thrown.
		Default: `false`.
	**/
	@:optional
	var breakOnSigint : Bool;
	/**
		Specifies the filename used in stack traces produced by this script.
		Default: `''`.
	**/
	@:optional
	var filename : String;
	/**
		Specifies the line number offset that is displayed in stack traces produced by this script.
		Default: `0`.
	**/
	@:optional
	var lineOffset : Float;
	/**
		Specifies the column number offset that is displayed in stack traces produced by this script.
	**/
	@:optional
	var columnOffset : Float;
};