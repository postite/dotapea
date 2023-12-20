package js.html;

/**
	Provides information about files and allows JavaScript in a web page to access their content.
**/
typedef IFile = {
	final lastModified : Float;
	final name : String;
	final size : Float;
	final type : String;
	function slice(?start:Float, ?end:Float, ?contentType:String):js.html.Blob;
};