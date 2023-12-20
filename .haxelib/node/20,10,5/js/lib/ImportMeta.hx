package js.lib;

/**
	The type of `import.meta`.
	
	If you need to declare that a given property exists on `import.meta`,
	this type may be augmented via interface merging.
**/
typedef ImportMeta = {
	var url : String;
	/**
		Provides a module-relative resolution function scoped to each module, returning
		the URL string.
		
		Second `parent` parameter is only used when the `--experimental-import-meta-resolve`
		command flag enabled.
	**/
	function resolve(specifier:String, ?parent:ts.AnyOf2<String, node.url.URL>):String;
};