package node.nodecolontest;

/**
	The `test()` function is the value imported from the `test` module. Each
	invocation of this function results in reporting the test to the `TestsStream`.
	
	The `TestContext` object passed to the `fn` argument can be used to perform
	actions related to the current test. Examples include skipping the test, adding
	additional diagnostic information, or creating subtests.
	
	`test()` returns a `Promise` that fulfills once the test completes.
	if `test()` is called within a `describe()` block, it fulfills immediately.
	The return value can usually be discarded for top level tests.
	However, the return value from subtests should be used to prevent the parent
	test from finishing first and cancelling the subtest
	as shown in the following example.
	
	```js
	test('top level test', async (t) => {
	   // The setTimeout() in the following subtest would cause it to outlive its
	   // parent test if 'await' is removed on the next line. Once the parent test
	   // completes, it will cancel any outstanding subtests.
	   await t.test('longer running subtest', async (t) => {
	     return new Promise((resolve, reject) => {
	       setTimeout(resolve, 1000);
	     });
	   });
	});
	```
	
	The `timeout` option can be used to fail the test if it takes longer than`timeout` milliseconds to complete. However, it is not a reliable mechanism for
	canceling tests because a running test might block the application thread and
	thus prevent the scheduled cancellation.
**/
@:jsRequire("node:test", "test") @valueModuleOnly extern class Test {
	/**
		The `test()` function is the value imported from the `test` module. Each
		invocation of this function results in reporting the test to the `TestsStream`.
		
		The `TestContext` object passed to the `fn` argument can be used to perform
		actions related to the current test. Examples include skipping the test, adding
		additional diagnostic information, or creating subtests.
		
		`test()` returns a `Promise` that fulfills once the test completes.
		if `test()` is called within a `describe()` block, it fulfills immediately.
		The return value can usually be discarded for top level tests.
		However, the return value from subtests should be used to prevent the parent
		test from finishing first and cancelling the subtest
		as shown in the following example.
		
		```js
		test('top level test', async (t) => {
		   // The setTimeout() in the following subtest would cause it to outlive its
		   // parent test if 'await' is removed on the next line. Once the parent test
		   // completes, it will cancel any outstanding subtests.
		   await t.test('longer running subtest', async (t) => {
		     return new Promise((resolve, reject) => {
		       setTimeout(resolve, 1000);
		     });
		   });
		});
		```
		
		The `timeout` option can be used to fail the test if it takes longer than`timeout` milliseconds to complete. However, it is not a reliable mechanism for
		canceling tests because a running test might block the application thread and
		thus prevent the scheduled cancellation.
	**/
	@:overload(function(?name:String, ?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:selfCall
	static function call(?name:String, ?fn:Test):js.lib.Promise<ts.Undefined>;
	/**
		This function is used to create a hook running after  running a suite.
		
		```js
		describe('tests', async () => {
		   after(() => console.log('finished running tests'));
		   it('is a subtest', () => {
		     assert.ok('some relevant assertion here');
		   });
		});
		```
	**/
	static function after(?fn:Test, ?options:Test):Void;
	/**
		This function is used to create a hook running
		after each subtest of the current test.
		
		```js
		describe('tests', async () => {
		   afterEach(() => console.log('finished running a test'));
		   it('is a subtest', () => {
		     assert.ok('some relevant assertion here');
		   });
		});
		```
	**/
	static function afterEach(?fn:Test, ?options:Test):Void;
	/**
		This function is used to create a hook running before running a suite.
		
		```js
		describe('tests', async () => {
		   before(() => console.log('about to run some test'));
		   it('is a subtest', () => {
		     assert.ok('some relevant assertion here');
		   });
		});
		```
	**/
	static function before(?fn:Test, ?options:Test):Void;
	/**
		This function is used to create a hook running
		before each subtest of the current suite.
		
		```js
		describe('tests', async () => {
		   beforeEach(() => console.log('about to run a test'));
		   it('is a subtest', () => {
		     assert.ok('some relevant assertion here');
		   });
		});
		```
	**/
	static function beforeEach(?fn:Test, ?options:Test):Void;
	/**
		The `describe()` function imported from the `node:test` module. Each
		invocation of this function results in the creation of a Subtest.
		After invocation of top level `describe` functions,
		all top level tests and suites will execute.
	**/
	@:overload(function(?name:String, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?fn:Test):js.lib.Promise<ts.Undefined> { })
	static function describe(?name:String, ?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined>;
	/**
		Shorthand for `test()`.
		
		The `it()` function is imported from the `node:test` module.
	**/
	@:overload(function(?name:String, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?fn:Test):js.lib.Promise<ts.Undefined> { })
	static function it(?name:String, ?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined>;
	static final mock : Test;
	/**
		Shorthand for marking a test as `only`, same as `test([name], { only: true }[, fn])`.
	**/
	@:overload(function(?name:String, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?fn:Test):js.lib.Promise<ts.Undefined> { })
	static function only(?name:String, ?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined>;
	/**
		```js
		import { tap } from 'node:test/reporters';
		import { run } from 'node:test';
		import process from 'node:process';
		import path from 'node:path';
		
		run({ files: [path.resolve('./tests/test.js')] })
		   .compose(tap)
		   .pipe(process.stdout);
		```
	**/
	static function run(?options:Test):Test;
	/**
		Shorthand for skipping a test, same as `test([name], { skip: true }[, fn])`.
	**/
	@:overload(function(?name:String, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?fn:Test):js.lib.Promise<ts.Undefined> { })
	static function skip(?name:String, ?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined>;
	/**
		The `test()` function is the value imported from the `test` module. Each
		invocation of this function results in reporting the test to the `TestsStream`.
		
		The `TestContext` object passed to the `fn` argument can be used to perform
		actions related to the current test. Examples include skipping the test, adding
		additional diagnostic information, or creating subtests.
		
		`test()` returns a `Promise` that fulfills once the test completes.
		if `test()` is called within a `describe()` block, it fulfills immediately.
		The return value can usually be discarded for top level tests.
		However, the return value from subtests should be used to prevent the parent
		test from finishing first and cancelling the subtest
		as shown in the following example.
		
		```js
		test('top level test', async (t) => {
		   // The setTimeout() in the following subtest would cause it to outlive its
		   // parent test if 'await' is removed on the next line. Once the parent test
		   // completes, it will cancel any outstanding subtests.
		   await t.test('longer running subtest', async (t) => {
		     return new Promise((resolve, reject) => {
		       setTimeout(resolve, 1000);
		     });
		   });
		});
		```
		
		The `timeout` option can be used to fail the test if it takes longer than`timeout` milliseconds to complete. However, it is not a reliable mechanism for
		canceling tests because a running test might block the application thread and
		thus prevent the scheduled cancellation.
	**/
	@:overload(function(?name:String, ?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?fn:Test):js.lib.Promise<ts.Undefined> { })
	static function test(?name:String, ?fn:Test):js.lib.Promise<ts.Undefined>;
	/**
		Shorthand for marking a test as `TODO`, same as `test([name], { todo: true }[, fn])`.
	**/
	@:overload(function(?name:String, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined> { })
	@:overload(function(?fn:Test):js.lib.Promise<ts.Undefined> { })
	static function todo(?name:String, ?options:Test, ?fn:Test):js.lib.Promise<ts.Undefined>;
}