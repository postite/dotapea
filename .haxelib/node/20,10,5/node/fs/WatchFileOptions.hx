package node.fs;

/**
	Watch for changes on `filename`. The callback `listener` will be called each
	time the file is accessed.
	
	The `options` argument may be omitted. If provided, it should be an object. The`options` object may contain a boolean named `persistent` that indicates
	whether the process should continue to run as long as files are being watched.
	The `options` object may specify an `interval` property indicating how often the
	target should be polled in milliseconds.
	
	The `listener` gets two arguments the current stat object and the previous
	stat object:
	
	```js
	import { watchFile } from 'fs';
	
	watchFile('message.text', (curr, prev) => {
	   console.log(`the current mtime is: ${curr.mtime}`);
	   console.log(`the previous mtime was: ${prev.mtime}`);
	});
	```
	
	These stat objects are instances of `fs.Stat`. If the `bigint` option is `true`,
	the numeric values in these objects are specified as `BigInt`s.
	
	To be notified when the file was modified, not just accessed, it is necessary
	to compare `curr.mtimeMs` and `prev.mtimeMs`.
	
	When an `fs.watchFile` operation results in an `ENOENT` error, it
	will invoke the listener once, with all the fields zeroed (or, for dates, the
	Unix Epoch). If the file is created later on, the listener will be called
	again, with the latest stat objects. This is a change in functionality since
	v0.10.
	
	Using {@link watch} is more efficient than `fs.watchFile` and`fs.unwatchFile`. `fs.watch` should be used instead of `fs.watchFile` and`fs.unwatchFile` when possible.
	
	When a file being watched by `fs.watchFile()` disappears and reappears,
	then the contents of `previous` in the second callback event (the file's
	reappearance) will be the same as the contents of `previous` in the first
	callback event (its disappearance).
	
	This happens when:
	
	* the file is deleted, followed by a restore
	* the file is renamed and then renamed a second time back to its original name
**/
typedef WatchFileOptions = {
	@:optional
	var bigint : Bool;
	@:optional
	var persistent : Bool;
	@:optional
	var interval : Float;
};