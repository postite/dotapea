package node.fs;

/**
	Asynchronous [`stat(2)`](http://man7.org/linux/man-pages/man2/stat.2.html). The callback gets two arguments `(err, stats)` where`stats` is an `fs.Stats` object.
	
	In case of an error, the `err.code` will be one of `Common System Errors`.
	
	{@link stat} follows symbolic links. Use {@link lstat} to look at the
	links themselves.
	
	Using `fs.stat()` to check for the existence of a file before calling`fs.open()`, `fs.readFile()`, or `fs.writeFile()` is not recommended.
	Instead, user code should open/read/write the file directly and handle the
	error raised if the file is not available.
	
	To check if a file exists without manipulating it afterwards, {@link access} is recommended.
	
	For example, given the following directory structure:
	
	```text
	- txtDir
	-- file.txt
	- app.js
	```
	
	The next program will check for the stats of the given paths:
	
	```js
	import { stat } from 'node:fs';
	
	const pathsToCheck = ['./txtDir', './txtDir/file.txt'];
	
	for (let i = 0; i < pathsToCheck.length; i++) {
	   stat(pathsToCheck[i], (err, stats) => {
	     console.log(stats.isDirectory());
	     console.log(stats);
	   });
	}
	```
	
	The resulting output will resemble:
	
	```console
	true
	Stats {
	   dev: 16777220,
	   mode: 16877,
	   nlink: 3,
	   uid: 501,
	   gid: 20,
	   rdev: 0,
	   blksize: 4096,
	   ino: 14214262,
	   size: 96,
	   blocks: 0,
	   atimeMs: 1561174653071.963,
	   mtimeMs: 1561174614583.3518,
	   ctimeMs: 1561174626623.5366,
	   birthtimeMs: 1561174126937.2893,
	   atime: 2019-06-22T03:37:33.072Z,
	   mtime: 2019-06-22T03:36:54.583Z,
	   ctime: 2019-06-22T03:37:06.624Z,
	   birthtime: 2019-06-22T03:28:46.937Z
	}
	false
	Stats {
	   dev: 16777220,
	   mode: 33188,
	   nlink: 1,
	   uid: 501,
	   gid: 20,
	   rdev: 0,
	   blksize: 4096,
	   ino: 14214074,
	   size: 8,
	   blocks: 8,
	   atimeMs: 1561174616618.8555,
	   mtimeMs: 1561174614584,
	   ctimeMs: 1561174614583.8145,
	   birthtimeMs: 1561174007710.7478,
	   atime: 2019-06-22T03:36:56.619Z,
	   mtime: 2019-06-22T03:36:54.584Z,
	   ctime: 2019-06-22T03:36:54.584Z,
	   birthtime: 2019-06-22T03:26:47.711Z
	}
	```
**/
@:jsRequire("fs", "stat") @valueModuleOnly extern class Stat {
	/**
		Asynchronous [`stat(2)`](http://man7.org/linux/man-pages/man2/stat.2.html). The callback gets two arguments `(err, stats)` where`stats` is an `fs.Stats` object.
		
		In case of an error, the `err.code` will be one of `Common System Errors`.
		
		{@link stat} follows symbolic links. Use {@link lstat} to look at the
		links themselves.
		
		Using `fs.stat()` to check for the existence of a file before calling`fs.open()`, `fs.readFile()`, or `fs.writeFile()` is not recommended.
		Instead, user code should open/read/write the file directly and handle the
		error raised if the file is not available.
		
		To check if a file exists without manipulating it afterwards, {@link access} is recommended.
		
		For example, given the following directory structure:
		
		```text
		- txtDir
		-- file.txt
		- app.js
		```
		
		The next program will check for the stats of the given paths:
		
		```js
		import { stat } from 'node:fs';
		
		const pathsToCheck = ['./txtDir', './txtDir/file.txt'];
		
		for (let i = 0; i < pathsToCheck.length; i++) {
		   stat(pathsToCheck[i], (err, stats) => {
		     console.log(stats.isDirectory());
		     console.log(stats);
		   });
		}
		```
		
		The resulting output will resemble:
		
		```console
		true
		Stats {
		   dev: 16777220,
		   mode: 16877,
		   nlink: 3,
		   uid: 501,
		   gid: 20,
		   rdev: 0,
		   blksize: 4096,
		   ino: 14214262,
		   size: 96,
		   blocks: 0,
		   atimeMs: 1561174653071.963,
		   mtimeMs: 1561174614583.3518,
		   ctimeMs: 1561174626623.5366,
		   birthtimeMs: 1561174126937.2893,
		   atime: 2019-06-22T03:37:33.072Z,
		   mtime: 2019-06-22T03:36:54.583Z,
		   ctime: 2019-06-22T03:37:06.624Z,
		   birthtime: 2019-06-22T03:28:46.937Z
		}
		false
		Stats {
		   dev: 16777220,
		   mode: 33188,
		   nlink: 1,
		   uid: 501,
		   gid: 20,
		   rdev: 0,
		   blksize: 4096,
		   ino: 14214074,
		   size: 8,
		   blocks: 8,
		   atimeMs: 1561174616618.8555,
		   mtimeMs: 1561174614584,
		   ctimeMs: 1561174614583.8145,
		   birthtimeMs: 1561174007710.7478,
		   atime: 2019-06-22T03:36:56.619Z,
		   mtime: 2019-06-22T03:36:54.584Z,
		   ctime: 2019-06-22T03:36:54.584Z,
		   birthtime: 2019-06-22T03:26:47.711Z
		}
		```
	**/
	@:overload(function(path:PathLike, options:Null<StatOptions & { @:optional var bigint : Bool; }>, callback:(err:Null<global.nodejs.ErrnoException>, stats:Stats) -> Void):Void { })
	@:overload(function(path:PathLike, options:Dynamic, callback:(err:Null<global.nodejs.ErrnoException>, stats:BigIntStats) -> Void):Void { })
	@:overload(function(path:PathLike, options:Null<StatOptions>, callback:(err:Null<global.nodejs.ErrnoException>, stats:ts.AnyOf2<Stats, BigIntStats>) -> Void):Void { })
	@:selfCall
	static function call(path:PathLike, callback:(err:Null<global.nodejs.ErrnoException>, stats:Stats) -> Void):Void;
}