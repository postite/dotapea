package node;

/**
	The hook function. If the hook uses callbacks, the callback function is passed as the
	second argument.
**/
typedef HookFn = (s:SuiteContext, done:ts.AnyOf2<() -> Void, (result:Dynamic) -> Void>) -> Dynamic;