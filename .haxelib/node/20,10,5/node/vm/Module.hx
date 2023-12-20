package node.vm;

/**
	This feature is only available with the `--experimental-vm-modules` command
	flag enabled.
	
	The `vm.Module` class provides a low-level interface for using
	ECMAScript modules in VM contexts. It is the counterpart of the `vm.Script`class that closely mirrors [Module Record](https://262.ecma-international.org/14.0/#sec-abstract-module-records) s as
	defined in the ECMAScript
	specification.
	
	Unlike `vm.Script` however, every `vm.Module` object is bound to a context from
	its creation. Operations on `vm.Module` objects are intrinsically asynchronous,
	in contrast with the synchronous nature of `vm.Script` objects. The use of
	'async' functions can help with manipulating `vm.Module` objects.
	
	Using a `vm.Module` object requires three distinct steps: creation/parsing,
	linking, and evaluation. These three steps are illustrated in the following
	example.
	
	This implementation lies at a lower level than the `ECMAScript Module
	loader`. There is also no way to interact with the Loader yet, though
	support is planned.
	
	```js
	import vm from 'node:vm';
	
	const contextifiedObject = vm.createContext({
	   secret: 42,
	   print: console.log,
	});
	
	// Step 1
	//
	// Create a Module by constructing a new `vm.SourceTextModule` object. This
	// parses the provided source text, throwing a `SyntaxError` if anything goes
	// wrong. By default, a Module is created in the top context. But here, we
	// specify `contextifiedObject` as the context this Module belongs to.
	//
	// Here, we attempt to obtain the default export from the module "foo", and
	// put it into local binding "secret".
	
	const bar = new vm.SourceTextModule(`
	   import s from 'foo';
	   s;
	   print(s);
	`, { context: contextifiedObject });
	
	// Step 2
	//
	// "Link" the imported dependencies of this Module to it.
	//
	// The provided linking callback (the "linker") accepts two arguments: the
	// parent module (`bar` in this case) and the string that is the specifier of
	// the imported module. The callback is expected to return a Module that
	// corresponds to the provided specifier, with certain requirements documented
	// in `module.link()`.
	//
	// If linking has not started for the returned Module, the same linker
	// callback will be called on the returned Module.
	//
	// Even top-level Modules without dependencies must be explicitly linked. The
	// callback provided would never be called, however.
	//
	// The link() method returns a Promise that will be resolved when all the
	// Promises returned by the linker resolve.
	//
	// Note: This is a contrived example in that the linker function creates a new
	// "foo" module every time it is called. In a full-fledged module system, a
	// cache would probably be used to avoid duplicated modules.
	
	async function linker(specifier, referencingModule) {
	   if (specifier === 'foo') {
	     return new vm.SourceTextModule(`
	       // The "secret" variable refers to the global variable we added to
	       // "contextifiedObject" when creating the context.
	       export default secret;
	     `, { context: referencingModule.context });
	
	     // Using `contextifiedObject` instead of `referencingModule.context`
	     // here would work as well.
	   }
	   throw new Error(`Unable to resolve dependency: ${specifier}`);
	}
	await bar.link(linker);
	
	// Step 3
	//
	// Evaluate the Module. The evaluate() method returns a promise which will
	// resolve after the module has finished evaluating.
	
	// Prints 42.
	await bar.evaluate();
	```
**/
@:jsRequire("vm", "Module") extern class Module {
	function new();
	/**
		The specifiers of all dependencies of this module. The returned array is frozen
		to disallow any changes to it.
		
		Corresponds to the `[[RequestedModules]]` field of [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) s in
		the ECMAScript specification.
	**/
	var dependencySpecifiers : haxe.ds.ReadOnlyArray<String>;
	/**
		If the `module.status` is `'errored'`, this property contains the exception
		thrown by the module during evaluation. If the status is anything else,
		accessing this property will result in a thrown exception.
		
		The value `undefined` cannot be used for cases where there is not a thrown
		exception due to possible ambiguity with `throw undefined;`.
		
		Corresponds to the `[[EvaluationError]]` field of [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) s
		in the ECMAScript specification.
	**/
	var error : Dynamic;
	/**
		The identifier of the current module, as set in the constructor.
	**/
	var identifier : String;
	var context : Context;
	/**
		The namespace object of the module. This is only available after linking
		(`module.link()`) has completed.
		
		Corresponds to the [GetModuleNamespace](https://tc39.es/ecma262/#sec-getmodulenamespace) abstract operation in the ECMAScript
		specification.
	**/
	var namespace : Dynamic;
	/**
		The current status of the module. Will be one of:
		
		* `'unlinked'`: `module.link()` has not yet been called.
		* `'linking'`: `module.link()` has been called, but not all Promises returned
		by the linker function have been resolved yet.
		* `'linked'`: The module has been linked successfully, and all of its
		dependencies are linked, but `module.evaluate()` has not yet been called.
		* `'evaluating'`: The module is being evaluated through a `module.evaluate()` on
		itself or a parent module.
		* `'evaluated'`: The module has been successfully evaluated.
		* `'errored'`: The module has been evaluated, but an exception was thrown.
		
		Other than `'errored'`, this status string corresponds to the specification's [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records)'s `[[Status]]` field. `'errored'`
		corresponds to`'evaluated'` in the specification, but with `[[EvaluationError]]` set to a
		value that is not `undefined`.
	**/
	var status : ModuleStatus;
	/**
		Evaluate the module.
		
		This must be called after the module has been linked; otherwise it will reject.
		It could be called also when the module has already been evaluated, in which
		case it will either do nothing if the initial evaluation ended in success
		(`module.status` is `'evaluated'`) or it will re-throw the exception that the
		initial evaluation resulted in (`module.status` is `'errored'`).
		
		This method cannot be called while the module is being evaluated
		(`module.status` is `'evaluating'`).
		
		Corresponds to the [Evaluate() concrete method](https://tc39.es/ecma262/#sec-moduleevaluation) field of [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) s in the
		ECMAScript specification.
	**/
	function evaluate(?options:ModuleEvaluateOptions):js.lib.Promise<ts.Undefined>;
	/**
		Link module dependencies. This method must be called before evaluation, and
		can only be called once per module.
		
		The function is expected to return a `Module` object or a `Promise` that
		eventually resolves to a `Module` object. The returned `Module` must satisfy the
		following two invariants:
		
		* It must belong to the same context as the parent `Module`.
		* Its `status` must not be `'errored'`.
		
		If the returned `Module`'s `status` is `'unlinked'`, this method will be
		recursively called on the returned `Module` with the same provided `linker`function.
		
		`link()` returns a `Promise` that will either get resolved when all linking
		instances resolve to a valid `Module`, or rejected if the linker function either
		throws an exception or returns an invalid `Module`.
		
		The linker function roughly corresponds to the implementation-defined [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) abstract operation in the
		ECMAScript
		specification, with a few key differences:
		
		* The linker function is allowed to be asynchronous while [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) is synchronous.
		
		The actual [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) implementation used during module
		linking is one that returns the modules linked during linking. Since at
		that point all modules would have been fully linked already, the [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) implementation is fully synchronous per
		specification.
		
		Corresponds to the [Link() concrete method](https://tc39.es/ecma262/#sec-moduledeclarationlinking) field of [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) s in
		the ECMAScript specification.
	**/
	function link(linker:ModuleLinker):js.lib.Promise<ts.Undefined>;
	static var prototype : Module;
}