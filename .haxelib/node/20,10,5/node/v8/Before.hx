package node.v8;

/**
	Called before a promise continuation executes. This can be in the form of `then()`, `catch()`, or `finally()` handlers or an await resuming.
	
	The before callback will be called 0 to N times. The before callback will typically be called 0 times if no continuation was ever made for the promise.
	The before callback may be called many times in the case where many continuations have been made from the same promise.
**/
typedef Before = (promise:js.lib.Promise<Any>) -> Void;