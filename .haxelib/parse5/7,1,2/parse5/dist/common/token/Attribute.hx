package parse5.dist.common.token;

typedef Attribute = {
	/**
		The name of the attribute.
	**/
	var name : String;
	/**
		The namespace of the attribute.
	**/
	@:optional
	var namespace : String;
	/**
		The namespace-related prefix of the attribute.
	**/
	@:optional
	var prefix : String;
	/**
		The value of the attribute.
	**/
	var value : String;
};