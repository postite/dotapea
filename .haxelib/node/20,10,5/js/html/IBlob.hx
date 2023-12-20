package js.html;

/**
	A file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.
	
	`Blob` class is a global reference for `require('node:buffer').Blob`
	https://nodejs.org/api/buffer.html#class-blob
**/
typedef IBlob = {
	final size : Float;
	final type : String;
	function slice(?start:Float, ?end:Float, ?contentType:String):js.html.Blob;
};