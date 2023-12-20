package node;

/**
	Mocking timers is a technique commonly used in software testing to simulate and
	control the behavior of timers, such as `setInterval` and `setTimeout`,
	without actually waiting for the specified time intervals.
	
	The `MockTracker` provides a top-level `timers` export
	which is a `MockTimers` instance.
**/
@jsInaccessible extern class MockTimers {
	function new();
	/**
		Enables timer mocking for the specified timers.
		
		**Note:** When you enable mocking for a specific timer, its associated
		clear function will also be implicitly mocked.
		
		Example usage:
		
		```js
		import { mock } from 'node:test';
		mock.timers.enable(['setInterval']);
		```
		
		The above example enables mocking for the `setInterval` timer and
		implicitly mocks the `clearInterval` function. Only the `setInterval`and `clearInterval` functions from `node:timers`,`node:timers/promises`, and`globalThis` will be mocked.
		
		Alternatively, if you call `mock.timers.enable()` without any parameters:
		
		All timers (`'setInterval'`, `'clearInterval'`, `'setTimeout'`, and `'clearTimeout'`)
		will be mocked. The `setInterval`, `clearInterval`, `setTimeout`, and `clearTimeout`functions from `node:timers`, `node:timers/promises`,
		and `globalThis` will be mocked.
	**/
	function enable(?timers:Array<Timer>):Void;
	/**
		This function restores the default behavior of all mocks that were previously
		created by this `MockTimers` instance and disassociates the mocks
		from the `MockTracker` instance.
		
		**Note:** After each test completes, this function is called on
		the test context's `MockTracker`.
		
		```js
		import { mock } from 'node:test';
		mock.timers.reset();
		```
	**/
	function reset():Void;
	/**
		Advances time for all mocked timers.
		
		**Note:** This diverges from how `setTimeout` in Node.js behaves and accepts
		only positive numbers. In Node.js, `setTimeout` with negative numbers is
		only supported for web compatibility reasons.
		
		The following example mocks a `setTimeout` function and
		by using `.tick` advances in
		time triggering all pending timers.
		
		```js
		import assert from 'node:assert';
		import { test } from 'node:test';
		
		test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) => {
		   const fn = context.mock.fn();
		
		   context.mock.timers.enable(['setTimeout']);
		
		   setTimeout(fn, 9999);
		
		   assert.strictEqual(fn.mock.callCount(), 0);
		
		   // Advance in time
		   context.mock.timers.tick(9999);
		
		   assert.strictEqual(fn.mock.callCount(), 1);
		});
		```
		
		Alternativelly, the `.tick` function can be called many times
		
		```js
		import assert from 'node:assert';
		import { test } from 'node:test';
		
		test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) => {
		   const fn = context.mock.fn();
		   context.mock.timers.enable(['setTimeout']);
		   const nineSecs = 9000;
		   setTimeout(fn, nineSecs);
		
		   const twoSeconds = 3000;
		   context.mock.timers.tick(twoSeconds);
		   context.mock.timers.tick(twoSeconds);
		   context.mock.timers.tick(twoSeconds);
		
		   assert.strictEqual(fn.mock.callCount(), 1);
		});
		```
	**/
	function tick(milliseconds:Float):Void;
	/**
		Triggers all pending mocked timers immediately.
		
		The example below triggers all pending timers immediately,
		causing them to execute without any delay.
		
		```js
		import assert from 'node:assert';
		import { test } from 'node:test';
		
		test('runAll functions following the given order', (context) => {
		   context.mock.timers.enable(['setTimeout']);
		   const results = [];
		   setTimeout(() => results.push(1), 9999);
		
		   // Notice that if both timers have the same timeout,
		   // the order of execution is guaranteed
		   setTimeout(() => results.push(3), 8888);
		   setTimeout(() => results.push(2), 8888);
		
		   assert.deepStrictEqual(results, []);
		
		   context.mock.timers.runAll();
		
		   assert.deepStrictEqual(results, [3, 2, 1]);
		});
		```
		
		**Note:** The `runAll()` function is specifically designed for
		triggering timers in the context of timer mocking.
		It does not have any effect on real-time system
		clocks or actual timers outside of the mocking environment.
	**/
	function runAll():Void;
	static var prototype : MockTimers;
}