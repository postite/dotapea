package parse5.dist.parser.open_element_stack;

typedef StackHandler<T> = {
	dynamic function onItemPush(node:Dynamic, tid:Float, isTop:Bool):Void;
	dynamic function onItemPop(node:Dynamic, isTop:Bool):Void;
};