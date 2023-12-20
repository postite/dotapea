package parse5.dist.common.token;

typedef TagToken = {
	final type : Int;
	var tagName : String;
	/**
		Used to cache the ID of the tag name.
	**/
	var tagID : Dynamic;
	var selfClosing : Bool;
	var ackSelfClosing : Bool;
	var attrs : Array<Attribute>;
	var location : Null<LocationWithAttributes>;
};