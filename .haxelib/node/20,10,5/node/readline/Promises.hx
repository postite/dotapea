package node.readline;

@:jsRequire("readline", "promises") @valueModuleOnly extern class Promises {
	/**
		The `readlinePromises.createInterface()` method creates a new `readlinePromises.Interface`instance.
		
		```js
		const readlinePromises = require('node:readline/promises');
		const rl = readlinePromises.createInterface({
		   input: process.stdin,
		   output: process.stdout,
		});
		```
		
		Once the `readlinePromises.Interface` instance is created, the most common case
		is to listen for the `'line'` event:
		
		```js
		rl.on('line', (line) => {
		   console.log(`Received: ${line}`);
		});
		```
		
		If `terminal` is `true` for this instance then the `output` stream will get
		the best compatibility if it defines an `output.columns` property and emits
		a `'resize'` event on the `output` if or when the columns ever change
		(`process.stdout` does this automatically when it is a TTY).
	**/
	@:overload(function(options:ReadLineOptions):node.readline.promises.Interface { })
	static function createInterface(input:global.nodejs.ReadableStream, ?output:global.nodejs.WritableStream, ?completer:ts.AnyOf2<Completer, AsyncCompleter>, ?terminal:Bool):node.readline.promises.Interface;
}