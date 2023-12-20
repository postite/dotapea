package parse5.dist.common.token;

typedef DoctypeToken = {
	final type : Int;
	var name : Null<String>;
	var forceQuirks : Bool;
	var publicId : Null<String>;
	var systemId : Null<String>;
	var location : Null<Location>;
};