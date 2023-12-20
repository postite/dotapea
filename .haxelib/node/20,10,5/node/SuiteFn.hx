package node;

/**
	The type of a function under Suite.
**/
typedef SuiteFn = (s:SuiteContext) -> ts.AnyOf2<ts.Undefined, js.lib.Promise<ts.Undefined>>;