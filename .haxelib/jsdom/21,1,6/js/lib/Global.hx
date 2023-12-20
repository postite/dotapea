package js.lib;

@:native("") extern class Global {
	static var Atomics : Atomics;
	/**
		An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
	**/
	static var JSON : JSON;
	static var BigInt : BigIntConstructor;
}