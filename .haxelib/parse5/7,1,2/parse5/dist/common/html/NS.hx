package parse5.dist.common.html;

/**
	All valid namespaces in HTML.
**/
@:jsRequire("parse5/dist/common/html", "NS") @:enum extern abstract NS(String) from String to String {
	var HTML;
	var MATHML;
	var SVG;
	var XLINK;
	var XML;
	var XMLNS;
}