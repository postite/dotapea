package node.util;

/**
	An implementation of [the MIMEType class](https://bmeck.github.io/node-proposal-mime-api/).
	
	In accordance with browser conventions, all properties of `MIMEType` objects
	are implemented as getters and setters on the class prototype, rather than as
	data properties on the object itself.
	
	A MIME string is a structured string containing multiple meaningful
	components. When parsed, a `MIMEType` object is returned containing
	properties for each of these components.
**/
@:jsRequire("util", "MIMEType") extern class MIMEType {
	/**
		Creates a new MIMEType object by parsing the input.
		
		A `TypeError` will be thrown if the `input` is not a valid MIME.
		Note that an effort will be made to coerce the given values into strings.
	**/
	function new(input:ts.AnyOf2<String, { dynamic function toString():String; }>);
	/**
		Gets and sets the type portion of the MIME.
		
		```js
		import { MIMEType } from 'node:util';
		
		const myMIME = new MIMEType('text/javascript');
		console.log(myMIME.type);
		// Prints: text
		myMIME.type = 'application';
		console.log(myMIME.type);
		// Prints: application
		console.log(String(myMIME));
		// Prints: application/javascript
		```
	**/
	var type : String;
	/**
		Gets and sets the subtype portion of the MIME.
		
		```js
		import { MIMEType } from 'node:util';
		
		const myMIME = new MIMEType('text/ecmascript');
		console.log(myMIME.subtype);
		// Prints: ecmascript
		myMIME.subtype = 'javascript';
		console.log(myMIME.subtype);
		// Prints: javascript
		console.log(String(myMIME));
		// Prints: text/javascript
		```
	**/
	var subtype : String;
	/**
		Gets the essence of the MIME. This property is read only.
		Use `mime.type` or `mime.subtype` to alter the MIME.
		
		```js
		import { MIMEType } from 'node:util';
		
		const myMIME = new MIMEType('text/javascript;key=value');
		console.log(myMIME.essence);
		// Prints: text/javascript
		myMIME.type = 'application';
		console.log(myMIME.essence);
		// Prints: application/javascript
		console.log(String(myMIME));
		// Prints: application/javascript;key=value
		```
	**/
	final essence : String;
	/**
		Gets the `MIMEParams` object representing the
		parameters of the MIME. This property is read-only. See `MIMEParams` documentation for details.
	**/
	final params : MIMEParams;
	/**
		The `toString()` method on the `MIMEType` object returns the serialized MIME.
		
		Because of the need for standard compliance, this method does not allow users
		to customize the serialization process of the MIME.
	**/
	function toString():String;
	static var prototype : MIMEType;
}