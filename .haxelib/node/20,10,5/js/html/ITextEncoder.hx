package js.html;

/**
	TextEncoder takes a stream of code points as input and emits a stream of bytes. For a more scalable, non-native library, see StringView – a C-like representation of strings based on typed arrays.
	
	`TextEncoder` class is a global reference for `require('util').TextEncoder`
	https://nodejs.org/api/globals.html#textencoder
**/
typedef ITextEncoder = {
	/**
		Returns the result of running UTF-8's encoder.
	**/
	function encode(?input:String):js.lib.Uint8Array;
	/**
		Runs the UTF-8 encoder on source, stores the result of that operation into destination, and returns the progress made as a dictionary whereby read is the number of converted code units of source and written is the number of bytes modified in destination.
	**/
	function encodeInto(source:String, destination:js.lib.Uint8Array):TextEncoderEncodeIntoResult;
	/**
		Returns "utf-8".
	**/
	final encoding : String;
};