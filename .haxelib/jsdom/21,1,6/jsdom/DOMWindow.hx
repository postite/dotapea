package jsdom;

typedef DOMWindow = {
	var FinalizationRegistry : Dynamic;
	var WeakRef : Dynamic;
	var InputEvent : {
		var prototype : js.html.InputEvent;
	};
	var External : {
		var prototype : js.html.External;
	};
	var Window : {
		var prototype : js.html.Window;
	};
	final top : DOMWindow;
	final self : DOMWindow;
	final window : DOMWindow;
	var globalThis : DOMWindow;
	final Infinity : Float;
	final NaN : Float;
	final undefined : Null<Any>;
	function eval(script:String):Any;
	function parseInt(s:String, ?radix:Float):Float;
	function parseFloat(string:String):Float;
	function isNaN(number:Float):Bool;
	function isFinite(number:Float):Bool;
	function decodeURI(encodedURI:String):String;
	function decodeURIComponent(encodedURIComponent:String):String;
	function encodeURI(uri:String):String;
	function encodeURIComponent(uriComponent:ts.AnyOf3<String, Float, Bool>):String;
	function escape(string:String):String;
	function unescape(string:String):String;
	var Array : js.lib.ArrayConstructor;
	var ArrayBuffer : js.lib.ArrayBufferConstructor;
	var Atomics : js.lib.Atomics;
	var BigInt : js.lib.BigIntConstructor;
	var BigInt64Array : js.lib.BigInt64ArrayConstructor;
	var BigUint64Array : js.lib.BigUint64ArrayConstructor;
	var Boolean : js.lib.BooleanConstructor;
	var DataView : js.lib.DataViewConstructor;
	var Date : js.lib.DateConstructor;
	var Error : js.lib.ErrorConstructor;
	var EvalError : js.lib.EvalErrorConstructor;
	var Float32Array : js.lib.Float32ArrayConstructor;
	var Float64Array : js.lib.Float64ArrayConstructor;
	var Function : js.lib.FunctionConstructor;
	var Int16Array : js.lib.Int16ArrayConstructor;
	var Int32Array : js.lib.Int32ArrayConstructor;
	var Int8Array : js.lib.Int8ArrayConstructor;
	var Intl : {
		var Collator : {
			@:selfCall
			function call(?locales:ts.AnyOf2<String, Array<String>>, ?options:js.lib.intl.Collator.CollatorOptions):js.lib.intl.Collator;
			function supportedLocalesOf(locales:ts.AnyOf2<String, Array<String>>, ?options:js.lib.intl.Collator.CollatorOptions):Array<String>;
		};
		var NumberFormat : {
			@:selfCall
			function call(?locales:ts.AnyOf2<String, Array<String>>, ?options:js.lib.intl.NumberFormat.NumberFormatOptions):js.lib.intl.NumberFormat;
			function supportedLocalesOf(locales:ts.AnyOf2<String, Array<String>>, ?options:js.lib.intl.NumberFormat.NumberFormatOptions):Array<String>;
		};
		var DateTimeFormat : {
			@:selfCall
			function call(?locales:ts.AnyOf2<String, Array<String>>, ?options:js.lib.intl.DateTimeFormat.DateTimeFormatOptions):js.lib.intl.DateTimeFormat;
			function supportedLocalesOf(locales:ts.AnyOf2<String, Array<String>>, ?options:js.lib.intl.DateTimeFormat.DateTimeFormatOptions):Array<String>;
		};
		final PluralRules : {
			@:selfCall
			function call(?locales:ts.AnyOf2<String, Array<String>>, ?options:js.lib.intl.PluralRules.PluralRulesOptions):js.lib.intl.PluralRules;
			function supportedLocalesOf(locales:ts.AnyOf2<String, Array<String>>, ?options:js.lib.intl.PluralRules.PluralRulesOptions):Array<String>;
		};
	};
	var JSON : js.lib.JSON;
	var Map : js.lib.MapConstructor;
	var Math : js.lib.Math;
	var Number : js.lib.NumberConstructor;
	var Object : js.lib.ObjectConstructor;
	var Promise : js.lib.PromiseConstructor;
	var Proxy : js.lib.ProxyConstructor;
	var RangeError : js.lib.RangeErrorConstructor;
	var ReferenceError : js.lib.ReferenceErrorConstructor;
	var Reflect : {
		function enumerate(target:Dynamic):js.lib.IterableIterator<Dynamic>;
		function apply(target:haxe.Constraints.Function, thisArgument:Dynamic, argumentsList:js.lib.ArrayLike<Dynamic>):Dynamic;
		function construct(target:haxe.Constraints.Function, argumentsList:js.lib.ArrayLike<Dynamic>, ?newTarget:Dynamic):Dynamic;
		function defineProperty(target:Dynamic, propertyKey:ts.AnyOf3<String, Float, js.lib.Symbol>, attributes:js.lib.PropertyDescriptor):Bool;
		function deleteProperty(target:Dynamic, propertyKey:ts.AnyOf3<String, Float, js.lib.Symbol>):Bool;
		function get(target:Dynamic, propertyKey:ts.AnyOf3<String, Float, js.lib.Symbol>, ?receiver:Dynamic):Dynamic;
		function getOwnPropertyDescriptor(target:Dynamic, propertyKey:ts.AnyOf3<String, Float, js.lib.Symbol>):Null<js.lib.PropertyDescriptor>;
		function getPrototypeOf(target:Dynamic):Dynamic;
		function has(target:Dynamic, propertyKey:ts.AnyOf3<String, Float, js.lib.Symbol>):Bool;
		function isExtensible(target:Dynamic):Bool;
		function ownKeys(target:Dynamic):Array<ts.AnyOf3<String, Float, js.lib.Symbol>>;
		function preventExtensions(target:Dynamic):Bool;
		function set(target:Dynamic, propertyKey:ts.AnyOf3<String, Float, js.lib.Symbol>, value:Dynamic, ?receiver:Dynamic):Bool;
		function setPrototypeOf(target:Dynamic, proto:Dynamic):Bool;
	};
	var RegExp : js.lib.RegExpConstructor;
	var Set : js.lib.SetConstructor;
	var SharedArrayBuffer : js.lib.SharedArrayBufferConstructor;
	var String : js.lib.StringConstructor;
	var Symbol : js.lib.SymbolConstructor;
	var SyntaxError : js.lib.SyntaxErrorConstructor;
	var TypeError : js.lib.TypeErrorConstructor;
	var URIError : js.lib.URIErrorConstructor;
	var Uint16Array : js.lib.Uint16ArrayConstructor;
	var Uint32Array : js.lib.Uint32ArrayConstructor;
	var Uint8Array : js.lib.Uint8ArrayConstructor;
	var Uint8ClampedArray : js.lib.Uint8ClampedArrayConstructor;
	var WeakMap : js.lib.WeakMapConstructor;
	var WeakSet : js.lib.WeakSetConstructor;
	var WebAssembly : {
		function compile(bytes:js.lib.BufferSource):js.lib.Promise<js.lib.webassembly.Module>;
		function compileStreaming(source:ts.AnyOf2<js.html.Response, js.lib.Promise<js.html.Response>>):js.lib.Promise<js.lib.webassembly.Module>;
		@:overload(function(moduleObject:js.lib.webassembly.Module, ?importObject:haxe.DynamicAccess<haxe.DynamicAccess<js.html.webassembly.ImportValue>>):js.lib.Promise<js.lib.webassembly.Instance> { })
		function instantiate(bytes:js.lib.BufferSource, ?importObject:haxe.DynamicAccess<haxe.DynamicAccess<js.html.webassembly.ImportValue>>):js.lib.Promise<js.html.webassembly.WebAssemblyInstantiatedSource>;
		function instantiateStreaming(response:ts.AnyOf2<js.html.Response, js.lib.PromiseLike<js.html.Response>>, ?importObject:haxe.DynamicAccess<haxe.DynamicAccess<js.html.webassembly.ImportValue>>):js.lib.Promise<js.html.webassembly.WebAssemblyInstantiatedSource>;
		function validate(bytes:js.lib.BufferSource):Bool;
		var CompileError : {
			var prototype : js.lib.webassembly.CompileError;
		};
		var Global : {
			var prototype : js.lib.webassembly.Global;
		};
		var Instance : {
			var prototype : js.lib.webassembly.Instance;
		};
		var LinkError : {
			var prototype : js.lib.webassembly.LinkError;
		};
		var Memory : {
			var prototype : js.lib.webassembly.Memory;
		};
		var Module : {
			var prototype : js.lib.webassembly.Module;
			function customSections(moduleObject:js.lib.webassembly.Module, sectionName:String):Array<js.lib.ArrayBuffer>;
			function exports(moduleObject:js.lib.webassembly.Module):Array<js.lib.webassembly.Module.ModuleExportDescriptor>;
			function imports(moduleObject:js.lib.webassembly.Module):Array<js.lib.webassembly.Module.ModuleImportDescriptor>;
		};
		var RuntimeError : {
			var prototype : js.lib.webassembly.RuntimeError;
		};
		var Table : {
			var prototype : js.lib.webassembly.Table;
		};
	};
	var DOMException : {
		var prototype : js.html.DOMException;
		final ABORT_ERR : Float;
		final DATA_CLONE_ERR : Float;
		final DOMSTRING_SIZE_ERR : Float;
		final HIERARCHY_REQUEST_ERR : Float;
		final INDEX_SIZE_ERR : Float;
		final INUSE_ATTRIBUTE_ERR : Float;
		final INVALID_ACCESS_ERR : Float;
		final INVALID_CHARACTER_ERR : Float;
		final INVALID_MODIFICATION_ERR : Float;
		final INVALID_NODE_TYPE_ERR : Float;
		final INVALID_STATE_ERR : Float;
		final NAMESPACE_ERR : Float;
		final NETWORK_ERR : Float;
		final NOT_FOUND_ERR : Float;
		final NOT_SUPPORTED_ERR : Float;
		final NO_DATA_ALLOWED_ERR : Float;
		final NO_MODIFICATION_ALLOWED_ERR : Float;
		final QUOTA_EXCEEDED_ERR : Float;
		final SECURITY_ERR : Float;
		final SYNTAX_ERR : Float;
		final TIMEOUT_ERR : Float;
		final TYPE_MISMATCH_ERR : Float;
		final URL_MISMATCH_ERR : Float;
		final VALIDATION_ERR : Float;
		final WRONG_DOCUMENT_ERR : Float;
	};
	var URL : {
		var prototype : js.html.URL;
		function createObjectURL(object:Dynamic):String;
		function revokeObjectURL(url:String):Void;
	};
	var URLSearchParams : {
		var prototype : js.html.URLSearchParams;
	};
	var EventTarget : {
		var prototype : js.html.EventTarget;
	};
	var NamedNodeMap : {
		var prototype : js.html.NamedNodeMap;
	};
	var Node : {
		var prototype : js.html.Node;
		final ATTRIBUTE_NODE : Float;
		/**
			node is a CDATASection node.
		**/
		final CDATA_SECTION_NODE : Float;
		/**
			node is a Comment node.
		**/
		final COMMENT_NODE : Float;
		/**
			node is a DocumentFragment node.
		**/
		final DOCUMENT_FRAGMENT_NODE : Float;
		/**
			node is a document.
		**/
		final DOCUMENT_NODE : Float;
		/**
			Set when other is a descendant of node.
		**/
		final DOCUMENT_POSITION_CONTAINED_BY : Float;
		/**
			Set when other is an ancestor of node.
		**/
		final DOCUMENT_POSITION_CONTAINS : Float;
		/**
			Set when node and other are not in the same tree.
		**/
		final DOCUMENT_POSITION_DISCONNECTED : Float;
		/**
			Set when other is following node.
		**/
		final DOCUMENT_POSITION_FOLLOWING : Float;
		final DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : Float;
		/**
			Set when other is preceding node.
		**/
		final DOCUMENT_POSITION_PRECEDING : Float;
		/**
			node is a doctype.
		**/
		final DOCUMENT_TYPE_NODE : Float;
		/**
			node is an element.
		**/
		final ELEMENT_NODE : Float;
		final ENTITY_NODE : Float;
		final ENTITY_REFERENCE_NODE : Float;
		final NOTATION_NODE : Float;
		/**
			node is a ProcessingInstruction node.
		**/
		final PROCESSING_INSTRUCTION_NODE : Float;
		/**
			node is a Text node.
		**/
		final TEXT_NODE : Float;
	};
	var Attr : {
		var prototype : js.html.Attr;
	};
	var Element : {
		var prototype : js.html.DOMElement;
	};
	var DocumentFragment : {
		var prototype : js.html.DocumentFragment;
	};
	var DOMImplementation : {
		var prototype : js.html.DOMImplementation;
	};
	var Document : {
		var prototype : js.html.Document;
	};
	var HTMLDocument : {
		var prototype : js.html.HTMLDocument;
	};
	var XMLDocument : {
		var prototype : js.html.XMLDocument;
	};
	var CharacterData : {
		var prototype : js.html.CharacterData;
	};
	var Text : {
		var prototype : js.html.Text;
	};
	var CDATASection : {
		var prototype : js.html.CDATASection;
	};
	var ProcessingInstruction : {
		var prototype : js.html.ProcessingInstruction;
	};
	var Comment : {
		var prototype : js.html.Comment;
	};
	var DocumentType : {
		var prototype : js.html.DocumentType;
	};
	var NodeList : {
		var prototype : js.html.NodeList;
	};
	var HTMLCollection : {
		var prototype : js.html.HTMLCollection;
	};
	var HTMLOptionsCollection : {
		var prototype : js.html.HTMLOptionsCollection;
	};
	var DOMStringMap : {
		var prototype : js.html.DOMStringMap;
	};
	var DOMTokenList : {
		var prototype : js.html.DOMTokenList;
	};
	var StyleSheetList : {
		var prototype : js.html.StyleSheetList;
	};
	var HTMLElement : {
		var prototype : js.html.Element;
	};
	var HTMLHeadElement : {
		var prototype : js.html.HeadElement;
	};
	var HTMLTitleElement : {
		var prototype : js.html.TitleElement;
	};
	var HTMLBaseElement : {
		var prototype : js.html.BaseElement;
	};
	var HTMLLinkElement : {
		var prototype : js.html.LinkElement;
	};
	var HTMLMetaElement : {
		var prototype : js.html.MetaElement;
	};
	var HTMLStyleElement : {
		var prototype : js.html.StyleElement;
	};
	var HTMLBodyElement : {
		var prototype : js.html.BodyElement;
	};
	var HTMLHeadingElement : {
		var prototype : js.html.HeadingElement;
	};
	var HTMLParagraphElement : {
		var prototype : js.html.ParagraphElement;
	};
	var HTMLHRElement : {
		var prototype : js.html.HRElement;
	};
	var HTMLPreElement : {
		var prototype : js.html.PreElement;
	};
	var HTMLUListElement : {
		var prototype : js.html.UListElement;
	};
	var HTMLOListElement : {
		var prototype : js.html.OListElement;
	};
	var HTMLLIElement : {
		var prototype : js.html.LIElement;
	};
	var HTMLMenuElement : {
		var prototype : js.html.MenuElement;
	};
	var HTMLDListElement : {
		var prototype : js.html.DListElement;
	};
	var HTMLDivElement : {
		var prototype : js.html.DivElement;
	};
	var HTMLAnchorElement : {
		var prototype : js.html.AnchorElement;
	};
	var HTMLAreaElement : {
		var prototype : js.html.AreaElement;
	};
	var HTMLBRElement : {
		var prototype : js.html.BRElement;
	};
	var HTMLButtonElement : {
		var prototype : js.html.ButtonElement;
	};
	var HTMLCanvasElement : {
		var prototype : js.html.CanvasElement;
	};
	var HTMLDataElement : {
		var prototype : js.html.DataElement;
	};
	var HTMLDataListElement : {
		var prototype : js.html.DataListElement;
	};
	var HTMLDetailsElement : {
		var prototype : js.html.DetailsElement;
	};
	var HTMLDialogElement : {
		final prototype : js.html.HTMLDialogElement;
	};
	var HTMLDirectoryElement : {
		var prototype : js.html.DirectoryElement;
	};
	var HTMLFieldSetElement : {
		var prototype : js.html.FieldSetElement;
	};
	var HTMLFontElement : {
		var prototype : js.html.FontElement;
	};
	var HTMLFormElement : {
		var prototype : js.html.FormElement;
	};
	var HTMLHtmlElement : {
		var prototype : js.html.HtmlElement;
	};
	var HTMLImageElement : {
		var prototype : js.html.ImageElement;
	};
	var HTMLInputElement : {
		var prototype : js.html.InputElement;
	};
	var HTMLLabelElement : {
		var prototype : js.html.LabelElement;
	};
	var HTMLLegendElement : {
		var prototype : js.html.LegendElement;
	};
	var HTMLMapElement : {
		var prototype : js.html.MapElement;
	};
	var HTMLMarqueeElement : {
		var prototype : js.html.HTMLMarqueeElement;
	};
	var HTMLMediaElement : {
		var prototype : js.html.MediaElement;
		final HAVE_CURRENT_DATA : Float;
		final HAVE_ENOUGH_DATA : Float;
		final HAVE_FUTURE_DATA : Float;
		final HAVE_METADATA : Float;
		final HAVE_NOTHING : Float;
		final NETWORK_EMPTY : Float;
		final NETWORK_IDLE : Float;
		final NETWORK_LOADING : Float;
		final NETWORK_NO_SOURCE : Float;
	};
	var HTMLMeterElement : {
		var prototype : js.html.MeterElement;
	};
	var HTMLModElement : {
		var prototype : js.html.ModElement;
	};
	var HTMLOptGroupElement : {
		var prototype : js.html.OptGroupElement;
	};
	var HTMLOptionElement : {
		var prototype : js.html.OptionElement;
	};
	var HTMLOutputElement : {
		var prototype : js.html.OutputElement;
	};
	var HTMLPictureElement : {
		var prototype : js.html.PictureElement;
	};
	var HTMLProgressElement : {
		var prototype : js.html.ProgressElement;
	};
	var HTMLQuoteElement : {
		var prototype : js.html.QuoteElement;
	};
	var HTMLScriptElement : {
		var prototype : js.html.ScriptElement;
	};
	var HTMLSelectElement : {
		var prototype : js.html.SelectElement;
	};
	var HTMLSlotElement : {
		var prototype : js.html.SlotElement;
	};
	var HTMLSourceElement : {
		var prototype : js.html.SourceElement;
	};
	var HTMLSpanElement : {
		var prototype : js.html.SpanElement;
	};
	var HTMLTableCaptionElement : {
		var prototype : js.html.TableCaptionElement;
	};
	var HTMLTableCellElement : {
		var prototype : js.html.TableCellElement;
	};
	var HTMLTableColElement : {
		var prototype : js.html.TableColElement;
	};
	var HTMLTableElement : {
		var prototype : js.html.TableElement;
	};
	var HTMLTimeElement : {
		var prototype : js.html.TimeElement;
	};
	var HTMLTableRowElement : {
		var prototype : js.html.TableRowElement;
	};
	var HTMLTableSectionElement : {
		var prototype : js.html.TableSectionElement;
	};
	var HTMLTemplateElement : {
		var prototype : js.html.TemplateElement;
	};
	var HTMLTextAreaElement : {
		var prototype : js.html.TextAreaElement;
	};
	var HTMLUnknownElement : {
		var prototype : js.html.UnknownElement;
	};
	var HTMLFrameElement : {
		var prototype : js.html.FrameElement;
	};
	var HTMLFrameSetElement : {
		var prototype : js.html.FrameSetElement;
	};
	var HTMLIFrameElement : {
		var prototype : js.html.IFrameElement;
	};
	var HTMLEmbedElement : {
		var prototype : js.html.EmbedElement;
	};
	var HTMLObjectElement : {
		var prototype : js.html.ObjectElement;
	};
	var HTMLParamElement : {
		var prototype : js.html.ParamElement;
	};
	var HTMLVideoElement : {
		var prototype : js.html.VideoElement;
	};
	var HTMLAudioElement : {
		var prototype : js.html.AudioElement;
	};
	var HTMLTrackElement : {
		var prototype : js.html.TrackElement;
		final ERROR : Float;
		final LOADED : Float;
		final LOADING : Float;
		final NONE : Float;
	};
	var SVGElement : {
		var prototype : js.html.svg.Element;
	};
	var SVGGraphicsElement : {
		var prototype : js.html.svg.GraphicsElement;
	};
	var SVGSVGElement : {
		var prototype : js.html.svg.SVGElement;
		final SVG_ZOOMANDPAN_DISABLE : Float;
		final SVG_ZOOMANDPAN_MAGNIFY : Float;
		final SVG_ZOOMANDPAN_UNKNOWN : Float;
	};
	var SVGTitleElement : {
		var prototype : js.html.svg.TitleElement;
	};
	var SVGAnimatedString : {
		var prototype : js.html.svg.AnimatedString;
	};
	var SVGNumber : {
		var prototype : js.html.svg.Number;
	};
	var SVGStringList : {
		var prototype : js.html.svg.StringList;
	};
	var Event : {
		var prototype : js.html.Event;
		final AT_TARGET : Float;
		final BUBBLING_PHASE : Float;
		final CAPTURING_PHASE : Float;
		final NONE : Float;
	};
	var CloseEvent : {
		var prototype : js.html.CloseEvent;
	};
	var CustomEvent : {
		var prototype : js.html.CustomEvent_<Dynamic>;
	};
	var MessageEvent : {
		var prototype : js.html.MessageEvent;
	};
	var ErrorEvent : {
		var prototype : js.html.ErrorEvent;
	};
	var HashChangeEvent : {
		var prototype : js.html.HashChangeEvent;
	};
	var PopStateEvent : {
		var prototype : js.html.PopStateEvent;
	};
	var StorageEvent : {
		var prototype : js.html.StorageEvent;
	};
	var ProgressEvent : {
		var prototype : js.html.ProgressEvent_<js.html.EventTarget>;
	};
	var PageTransitionEvent : {
		var prototype : js.html.PageTransitionEvent;
	};
	var UIEvent : {
		var prototype : js.html.UIEvent;
	};
	var FocusEvent : {
		var prototype : js.html.FocusEvent;
	};
	var MouseEvent : {
		var prototype : js.html.MouseEvent;
	};
	var KeyboardEvent : {
		var prototype : js.html.KeyboardEvent;
		final DOM_KEY_LOCATION_LEFT : Float;
		final DOM_KEY_LOCATION_NUMPAD : Float;
		final DOM_KEY_LOCATION_RIGHT : Float;
		final DOM_KEY_LOCATION_STANDARD : Float;
	};
	var TouchEvent : {
		var prototype : js.html.TouchEvent;
	};
	var CompositionEvent : {
		var prototype : js.html.CompositionEvent;
	};
	var WheelEvent : {
		var prototype : js.html.WheelEvent;
		final DOM_DELTA_LINE : Float;
		final DOM_DELTA_PAGE : Float;
		final DOM_DELTA_PIXEL : Float;
	};
	var BarProp : {
		var prototype : js.html.BarProp;
	};
	var Location : {
		var prototype : js.html.Location;
	};
	var History : {
		var prototype : js.html.History;
	};
	var Screen : {
		var prototype : js.html.Screen;
	};
	var Performance : {
		var prototype : js.html.Performance;
	};
	var Navigator : {
		var prototype : js.html.Navigator;
	};
	var PluginArray : {
		var prototype : js.html.PluginArray;
	};
	var MimeTypeArray : {
		var prototype : js.html.MimeTypeArray;
	};
	var Plugin : {
		var prototype : js.html.Plugin;
	};
	var MimeType : {
		var prototype : js.html.MimeType;
	};
	var FileReader : {
		var prototype : js.html.FileReader;
		final DONE : Float;
		final EMPTY : Float;
		final LOADING : Float;
	};
	var Blob : {
		var prototype : js.html.Blob;
	};
	var File : {
		var prototype : js.html.File;
	};
	var FileList : {
		var prototype : js.html.FileList;
	};
	var ValidityState : {
		var prototype : js.html.ValidityState;
	};
	var DOMParser : {
		var prototype : js.html.DOMParser;
	};
	var XMLSerializer : {
		var prototype : js.html.XMLSerializer;
	};
	var FormData : {
		var prototype : js.html.FormData;
	};
	var XMLHttpRequestEventTarget : {
		var prototype : js.html.XMLHttpRequestEventTarget;
	};
	var XMLHttpRequestUpload : {
		var prototype : js.html.XMLHttpRequestUpload;
	};
	var XMLHttpRequest : {
		var prototype : js.html.XMLHttpRequest;
		final DONE : Float;
		final HEADERS_RECEIVED : Float;
		final LOADING : Float;
		final OPENED : Float;
		final UNSENT : Float;
	};
	var WebSocket : {
		var prototype : js.html.WebSocket;
		final CLOSED : Float;
		final CLOSING : Float;
		final CONNECTING : Float;
		final OPEN : Float;
	};
	var NodeFilter : {
		final FILTER_ACCEPT : Float;
		final FILTER_REJECT : Float;
		final FILTER_SKIP : Float;
		final SHOW_ALL : Float;
		final SHOW_ATTRIBUTE : Float;
		final SHOW_CDATA_SECTION : Float;
		final SHOW_COMMENT : Float;
		final SHOW_DOCUMENT : Float;
		final SHOW_DOCUMENT_FRAGMENT : Float;
		final SHOW_DOCUMENT_TYPE : Float;
		final SHOW_ELEMENT : Float;
		final SHOW_ENTITY : Float;
		final SHOW_ENTITY_REFERENCE : Float;
		final SHOW_NOTATION : Float;
		final SHOW_PROCESSING_INSTRUCTION : Float;
		final SHOW_TEXT : Float;
	};
	var NodeIterator : {
		var prototype : js.html.NodeIterator;
	};
	var TreeWalker : {
		var prototype : js.html.TreeWalker;
	};
	var AbstractRange : {
		var prototype : js.html.AbstractRange;
	};
	var Range : {
		var prototype : js.html.Range;
		final END_TO_END : Float;
		final END_TO_START : Float;
		final START_TO_END : Float;
		final START_TO_START : Float;
	};
	var StaticRange : {
		var prototype : js.html.StaticRange;
	};
	var Selection : {
		var prototype : js.html.Selection;
	};
	var Storage : {
		var prototype : js.html.Storage;
	};
	var CustomElementRegistry : {
		var prototype : js.html.CustomElementRegistry;
	};
	var ShadowRoot : {
		var prototype : js.html.ShadowRoot;
	};
	var MutationObserver : {
		var prototype : js.html.MutationObserver;
	};
	var MutationRecord : {
		var prototype : js.html.MutationRecord;
	};
	var Headers : {
		var prototype : js.html.Headers;
	};
	var AbortController : {
		var prototype : js.html.AbortController;
	};
	var AbortSignal : {
		var prototype : js.html.AbortSignal;
	};
	var StyleSheet : {
		var prototype : js.html.StyleSheet;
	};
	var MediaList : {
		var prototype : js.html.MediaList;
	};
	var CSSStyleSheet : {
		var prototype : js.html.CSSStyleSheet;
	};
	var CSSRule : {
		var prototype : js.html.CSSRule;
		final CHARSET_RULE : Float;
		final FONT_FACE_RULE : Float;
		final IMPORT_RULE : Float;
		final KEYFRAMES_RULE : Float;
		final KEYFRAME_RULE : Float;
		final MEDIA_RULE : Float;
		final NAMESPACE_RULE : Float;
		final PAGE_RULE : Float;
		final STYLE_RULE : Float;
		final SUPPORTS_RULE : Float;
		final UNKNOWN_RULE : Float;
		final VIEWPORT_RULE : Float;
	};
	var CSSStyleRule : {
		var prototype : js.html.CSSStyleRule;
	};
	var CSSMediaRule : {
		var prototype : js.html.CSSMediaRule;
	};
	var CSSImportRule : {
		var prototype : js.html.CSSImportRule;
	};
	var CSSStyleDeclaration : {
		var prototype : js.html.CSSStyleDeclaration;
	};
	var XPathExpression : {
		var prototype : js.html.XPathExpression;
	};
	var XPathResult : {
		var prototype : js.html.XPathResult;
		final ANY_TYPE : Float;
		final ANY_UNORDERED_NODE_TYPE : Float;
		final BOOLEAN_TYPE : Float;
		final FIRST_ORDERED_NODE_TYPE : Float;
		final NUMBER_TYPE : Float;
		final ORDERED_NODE_ITERATOR_TYPE : Float;
		final ORDERED_NODE_SNAPSHOT_TYPE : Float;
		final STRING_TYPE : Float;
		final UNORDERED_NODE_ITERATOR_TYPE : Float;
		final UNORDERED_NODE_SNAPSHOT_TYPE : Float;
	};
	var XPathEvaluator : {
		var prototype : js.html.XPathEvaluator;
	};
	var applicationCache : js.html.ApplicationCache;
	var caches : js.html.CacheStorage;
	var clientInformation : js.html.Navigator;
	var closed : Bool;
	var crypto : js.html.Crypto;
	var customElements : js.html.CustomElementRegistry;
	var defaultStatus : String;
	var devicePixelRatio : Float;
	var doNotTrack : String;
	var document : js.html.Document;
	var event : Null<js.html.Event>;
	var external : js.html.External;
	var frameElement : js.html.DOMElement;
	var frames : js.html.Window;
	var history : js.html.History;
	var innerHeight : Float;
	var innerWidth : Float;
	var isSecureContext : Bool;
	var length : Float;
	var location : js.html.Location;
	var locationbar : js.html.BarProp;
	var menubar : js.html.BarProp;
	var msContentScript : js.html.ExtensionScriptApis;
	var name : String;
	var navigator : js.html.Navigator;
	var offscreenBuffering : ts.AnyOf2<String, Bool>;
	@:optional
	dynamic function oncompassneedscalibration(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function ondevicelight(ev:js.html.DeviceLightEvent):Dynamic;
	@:optional
	dynamic function ondevicemotion(ev:js.html.DeviceMotionEvent):Dynamic;
	@:optional
	dynamic function ondeviceorientation(ev:js.html.DeviceOrientationEvent):Dynamic;
	@:optional
	dynamic function ondeviceorientationabsolute(ev:js.html.DeviceOrientationEvent):Dynamic;
	@:optional
	dynamic function onmousewheel(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmsgesturechange(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmsgesturedoubletap(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmsgestureend(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmsgesturehold(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmsgesturestart(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmsgesturetap(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmsinertiastart(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmspointercancel(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmspointerdown(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmspointerenter(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmspointerleave(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmspointermove(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmspointerout(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmspointerover(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmspointerup(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onorientationchange(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onreadystatechange(ev:js.html.ProgressEvent_<js.html.Window>):Dynamic;
	@:optional
	dynamic function onvrdisplayactivate(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onvrdisplayblur(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onvrdisplayconnect(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onvrdisplaydeactivate(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onvrdisplaydisconnect(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onvrdisplayfocus(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onvrdisplaypointerrestricted(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onvrdisplaypointerunrestricted(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onvrdisplaypresentchange(ev:js.html.Event):Dynamic;
	var opener : Dynamic;
	var orientation : ts.AnyOf2<String, Float>;
	var outerHeight : Float;
	var outerWidth : Float;
	var pageXOffset : Float;
	var pageYOffset : Float;
	var parent : js.html.Window;
	var performance : js.html.Performance;
	var personalbar : js.html.BarProp;
	var screen : js.html.Screen;
	var screenLeft : Float;
	var screenTop : Float;
	var screenX : Float;
	var screenY : Float;
	var scrollX : Float;
	var scrollY : Float;
	var scrollbars : js.html.BarProp;
	var speechSynthesis : js.html.SpeechSynthesis;
	var status : String;
	var statusbar : js.html.BarProp;
	var styleMedia : js.html.StyleMedia;
	var toolbar : js.html.BarProp;
	dynamic function alert(?message:Dynamic):Void;
	dynamic function blur():Void;
	dynamic function captureEvents():Void;
	dynamic function close():Void;
	dynamic function confirm(?message:String):Bool;
	dynamic function departFocus(navigationReason:js.html.NavigationReason, origin:js.html.FocusNavigationOrigin):Void;
	dynamic function focus():Void;
	dynamic function getComputedStyle(elt:js.html.DOMElement, ?pseudoElt:String):js.html.CSSStyleDeclaration;
	dynamic function getMatchedCSSRules(elt:js.html.DOMElement, ?pseudoElt:String):js.html.CSSRuleList;
	dynamic function getSelection():Null<js.html.Selection>;
	dynamic function matchMedia(query:String):js.html.MediaQueryList;
	dynamic function moveBy(x:Float, y:Float):Void;
	dynamic function moveTo(x:Float, y:Float):Void;
	dynamic function msWriteProfilerMark(profilerMarkName:String):Void;
	dynamic function open(?url:String, ?target:String, ?features:String, ?replace:Bool):Null<js.html.Window>;
	dynamic function postMessage(message:Dynamic, targetOrigin:String, ?transfer:Array<js.html.Transferable>):Void;
	dynamic function print():Void;
	dynamic function prompt(?message:String, ?_default:String):Null<String>;
	dynamic function releaseEvents():Void;
	dynamic function resizeBy(x:Float, y:Float):Void;
	dynamic function resizeTo(x:Float, y:Float):Void;
	@:overload(function(x:Float, y:Float):Void { })
	dynamic function scroll(?options:js.html.ScrollToOptions):Void;
	@:overload(function(x:Float, y:Float):Void { })
	dynamic function scrollBy(?options:js.html.ScrollToOptions):Void;
	@:overload(function(x:Float, y:Float):Void { })
	dynamic function scrollTo(?options:js.html.ScrollToOptions):Void;
	dynamic function stop():Void;
	dynamic function webkitCancelAnimationFrame(handle:Float):Void;
	dynamic function webkitConvertPointFromNodeToPage(node:js.html.Node, pt:js.html.WebKitPoint):js.html.WebKitPoint;
	dynamic function webkitConvertPointFromPageToNode(node:js.html.Node, pt:js.html.WebKitPoint):js.html.WebKitPoint;
	dynamic function webkitRequestAnimationFrame(callback:js.html.FrameRequestCallback):Float;
	/**
		Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
		
		The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
		
		When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
		
		When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in §2.8 Observing event listeners.
		
		When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
		
		The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
		
		Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
		
		The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
		
		When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
		
		When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in §2.8 Observing event listeners.
		
		When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
		
		The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
	**/
	@:overload(function(type:String, listener:js.html.EventListenerOrEventListenerObject, ?options:ts.AnyOf2<Bool, js.html.AddEventListenerOptions>):Void { })
	dynamic function addEventListener<K>(type:K, listener:(ev:Dynamic) -> Dynamic, ?options:ts.AnyOf2<Bool, js.html.AddEventListenerOptions>):Void;
	/**
		Removes the event listener in target's event listener list with the same type, callback, and options.
		
		Removes the event listener in target's event listener list with the same type, callback, and options.
	**/
	@:overload(function(type:String, listener:js.html.EventListenerOrEventListenerObject, ?options:ts.AnyOf2<Bool, js.html.EventListenerOptions>):Void { })
	dynamic function removeEventListener<K>(type:K, listener:(ev:Dynamic) -> Dynamic, ?options:ts.AnyOf2<Bool, js.html.EventListenerOptions>):Void;
	/**
		Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
	**/
	dynamic function dispatchEvent(event:js.html.Event):Bool;
	dynamic function cancelAnimationFrame(handle:Float):Void;
	dynamic function requestAnimationFrame(callback:js.html.FrameRequestCallback):Float;
	/**
		Fires when the user aborts the download.
	**/
	@:optional
	dynamic function onabort(ev:js.html.UIEvent):Dynamic;
	@:optional
	dynamic function onanimationcancel(ev:js.html.AnimationEvent):Dynamic;
	@:optional
	dynamic function onanimationend(ev:js.html.AnimationEvent):Dynamic;
	@:optional
	dynamic function onanimationiteration(ev:js.html.AnimationEvent):Dynamic;
	@:optional
	dynamic function onanimationstart(ev:js.html.AnimationEvent):Dynamic;
	@:optional
	dynamic function onauxclick(ev:js.html.MouseEvent):Dynamic;
	/**
		Fires when the object loses the input focus.
	**/
	@:optional
	dynamic function onblur(ev:js.html.FocusEvent):Dynamic;
	@:optional
	dynamic function oncancel(ev:js.html.Event):Dynamic;
	/**
		Occurs when playback is possible, but would require further buffering.
	**/
	@:optional
	dynamic function oncanplay(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function oncanplaythrough(ev:js.html.Event):Dynamic;
	/**
		Fires when the contents of the object or selection have changed.
	**/
	@:optional
	dynamic function onchange(ev:js.html.Event):Dynamic;
	/**
		Fires when the user clicks the left mouse button on the object
	**/
	@:optional
	dynamic function onclick(ev:js.html.MouseEvent):Dynamic;
	@:optional
	dynamic function onclose(ev:js.html.Event):Dynamic;
	/**
		Fires when the user clicks the right mouse button in the client area, opening the context menu.
	**/
	@:optional
	dynamic function oncontextmenu(ev:js.html.MouseEvent):Dynamic;
	@:optional
	dynamic function oncuechange(ev:js.html.Event):Dynamic;
	/**
		Fires when the user double-clicks the object.
	**/
	@:optional
	dynamic function ondblclick(ev:js.html.MouseEvent):Dynamic;
	/**
		Fires on the source object continuously during a drag operation.
	**/
	@:optional
	dynamic function ondrag(ev:js.html.DragEvent):Dynamic;
	/**
		Fires on the source object when the user releases the mouse at the close of a drag operation.
	**/
	@:optional
	dynamic function ondragend(ev:js.html.DragEvent):Dynamic;
	/**
		Fires on the target element when the user drags the object to a valid drop target.
	**/
	@:optional
	dynamic function ondragenter(ev:js.html.DragEvent):Dynamic;
	@:optional
	dynamic function ondragexit(ev:js.html.Event):Dynamic;
	/**
		Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
	**/
	@:optional
	dynamic function ondragleave(ev:js.html.DragEvent):Dynamic;
	/**
		Fires on the target element continuously while the user drags the object over a valid drop target.
	**/
	@:optional
	dynamic function ondragover(ev:js.html.DragEvent):Dynamic;
	/**
		Fires on the source object when the user starts to drag a text selection or selected object.
	**/
	@:optional
	dynamic function ondragstart(ev:js.html.DragEvent):Dynamic;
	@:optional
	dynamic function ondrop(ev:js.html.DragEvent):Dynamic;
	/**
		Occurs when the duration attribute is updated.
	**/
	@:optional
	dynamic function ondurationchange(ev:js.html.Event):Dynamic;
	/**
		Occurs when the media element is reset to its initial state.
	**/
	@:optional
	dynamic function onemptied(ev:js.html.Event):Dynamic;
	/**
		Occurs when the end of playback is reached.
	**/
	@:optional
	dynamic function onended(ev:js.html.Event):Dynamic;
	/**
		Fires when an error occurs during object loading.
	**/
	@:optional
	dynamic function onerror(event:ts.AnyOf2<String, js.html.Event>, ?source:String, ?lineno:Float, ?colno:Float, ?error:js.lib.Error):Dynamic;
	/**
		Fires when the object receives focus.
	**/
	@:optional
	dynamic function onfocus(ev:js.html.FocusEvent):Dynamic;
	@:optional
	dynamic function ongotpointercapture(ev:js.html.PointerEvent):Dynamic;
	@:optional
	dynamic function oninput(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function oninvalid(ev:js.html.Event):Dynamic;
	/**
		Fires when the user presses a key.
	**/
	@:optional
	dynamic function onkeydown(ev:js.html.KeyboardEvent):Dynamic;
	/**
		Fires when the user presses an alphanumeric key.
	**/
	@:optional
	dynamic function onkeypress(ev:js.html.KeyboardEvent):Dynamic;
	/**
		Fires when the user releases a key.
	**/
	@:optional
	dynamic function onkeyup(ev:js.html.KeyboardEvent):Dynamic;
	/**
		Fires immediately after the browser loads the object.
	**/
	@:optional
	dynamic function onload(ev:js.html.Event):Dynamic;
	/**
		Occurs when media data is loaded at the current playback position.
	**/
	@:optional
	dynamic function onloadeddata(ev:js.html.Event):Dynamic;
	/**
		Occurs when the duration and dimensions of the media have been determined.
	**/
	@:optional
	dynamic function onloadedmetadata(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onloadend(ev:js.html.ProgressEvent_<js.html.EventTarget>):Dynamic;
	/**
		Occurs when Internet Explorer begins looking for media data.
	**/
	@:optional
	dynamic function onloadstart(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onlostpointercapture(ev:js.html.PointerEvent):Dynamic;
	/**
		Fires when the user clicks the object with either mouse button.
	**/
	@:optional
	dynamic function onmousedown(ev:js.html.MouseEvent):Dynamic;
	@:optional
	dynamic function onmouseenter(ev:js.html.MouseEvent):Dynamic;
	@:optional
	dynamic function onmouseleave(ev:js.html.MouseEvent):Dynamic;
	/**
		Fires when the user moves the mouse over the object.
	**/
	@:optional
	dynamic function onmousemove(ev:js.html.MouseEvent):Dynamic;
	/**
		Fires when the user moves the mouse pointer outside the boundaries of the object.
	**/
	@:optional
	dynamic function onmouseout(ev:js.html.MouseEvent):Dynamic;
	/**
		Fires when the user moves the mouse pointer into the object.
	**/
	@:optional
	dynamic function onmouseover(ev:js.html.MouseEvent):Dynamic;
	/**
		Fires when the user releases a mouse button while the mouse is over the object.
	**/
	@:optional
	dynamic function onmouseup(ev:js.html.MouseEvent):Dynamic;
	/**
		Occurs when playback is paused.
	**/
	@:optional
	dynamic function onpause(ev:js.html.Event):Dynamic;
	/**
		Occurs when the play method is requested.
	**/
	@:optional
	dynamic function onplay(ev:js.html.Event):Dynamic;
	/**
		Occurs when the audio or video has started playing.
	**/
	@:optional
	dynamic function onplaying(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onpointercancel(ev:js.html.PointerEvent):Dynamic;
	@:optional
	dynamic function onpointerdown(ev:js.html.PointerEvent):Dynamic;
	@:optional
	dynamic function onpointerenter(ev:js.html.PointerEvent):Dynamic;
	@:optional
	dynamic function onpointerleave(ev:js.html.PointerEvent):Dynamic;
	@:optional
	dynamic function onpointermove(ev:js.html.PointerEvent):Dynamic;
	@:optional
	dynamic function onpointerout(ev:js.html.PointerEvent):Dynamic;
	@:optional
	dynamic function onpointerover(ev:js.html.PointerEvent):Dynamic;
	@:optional
	dynamic function onpointerup(ev:js.html.PointerEvent):Dynamic;
	/**
		Occurs to indicate progress while downloading media data.
	**/
	@:optional
	dynamic function onprogress(ev:js.html.ProgressEvent_<js.html.EventTarget>):Dynamic;
	/**
		Occurs when the playback rate is increased or decreased.
	**/
	@:optional
	dynamic function onratechange(ev:js.html.Event):Dynamic;
	/**
		Fires when the user resets a form.
	**/
	@:optional
	dynamic function onreset(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onresize(ev:js.html.UIEvent):Dynamic;
	/**
		Fires when the user repositions the scroll box in the scroll bar on the object.
	**/
	@:optional
	dynamic function onscroll(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onsecuritypolicyviolation(ev:js.html.SecurityPolicyViolationEvent):Dynamic;
	/**
		Occurs when the seek operation ends.
	**/
	@:optional
	dynamic function onseeked(ev:js.html.Event):Dynamic;
	/**
		Occurs when the current playback position is moved.
	**/
	@:optional
	dynamic function onseeking(ev:js.html.Event):Dynamic;
	/**
		Fires when the current selection changes.
	**/
	@:optional
	dynamic function onselect(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onselectionchange(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onselectstart(ev:js.html.Event):Dynamic;
	/**
		Occurs when the download has stopped.
	**/
	@:optional
	dynamic function onstalled(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onsubmit(ev:js.html.Event):Dynamic;
	/**
		Occurs if the load operation has been intentionally halted.
	**/
	@:optional
	dynamic function onsuspend(ev:js.html.Event):Dynamic;
	/**
		Occurs to indicate the current playback position.
	**/
	@:optional
	dynamic function ontimeupdate(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function ontoggle(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function ontouchcancel(ev:js.html.TouchEvent):Dynamic;
	@:optional
	dynamic function ontouchend(ev:js.html.TouchEvent):Dynamic;
	@:optional
	dynamic function ontouchmove(ev:js.html.TouchEvent):Dynamic;
	@:optional
	dynamic function ontouchstart(ev:js.html.TouchEvent):Dynamic;
	@:optional
	dynamic function ontransitioncancel(ev:js.html.TransitionEvent):Dynamic;
	@:optional
	dynamic function ontransitionend(ev:js.html.TransitionEvent):Dynamic;
	@:optional
	dynamic function ontransitionrun(ev:js.html.TransitionEvent):Dynamic;
	@:optional
	dynamic function ontransitionstart(ev:js.html.TransitionEvent):Dynamic;
	/**
		Occurs when the volume is changed, or playback is muted or unmuted.
	**/
	@:optional
	dynamic function onvolumechange(ev:js.html.Event):Dynamic;
	/**
		Occurs when playback stops because the next frame of a video resource is not available.
	**/
	@:optional
	dynamic function onwaiting(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onwheel(ev:js.html.WheelEvent):Dynamic;
	var indexedDB : js.html.idb.Factory;
	dynamic function atob(encodedString:String):String;
	dynamic function btoa(rawString:String):String;
	var console : js.html.Console;
	@:optional
	dynamic function onafterprint(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onbeforeprint(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onbeforeunload(ev:js.html.BeforeUnloadEvent):Dynamic;
	@:optional
	dynamic function onhashchange(ev:js.html.HashChangeEvent):Dynamic;
	@:optional
	dynamic function onlanguagechange(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onmessage(ev:js.html.MessageEvent):Dynamic;
	@:optional
	dynamic function onmessageerror(ev:js.html.MessageEvent):Dynamic;
	@:optional
	dynamic function onoffline(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function ononline(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onpagehide(ev:js.html.PageTransitionEvent):Dynamic;
	@:optional
	dynamic function onpageshow(ev:js.html.PageTransitionEvent):Dynamic;
	@:optional
	dynamic function onpopstate(ev:js.html.PopStateEvent):Dynamic;
	@:optional
	dynamic function onrejectionhandled(ev:js.html.Event):Dynamic;
	@:optional
	dynamic function onstorage(ev:js.html.StorageEvent):Dynamic;
	@:optional
	dynamic function onunhandledrejection(ev:js.html.PromiseRejectionEvent):Dynamic;
	@:optional
	dynamic function onunload(ev:js.html.Event):Dynamic;
	var localStorage : js.html.Storage;
	var origin : String;
	dynamic function clearInterval(?handle:Float):Void;
	dynamic function clearTimeout(?handle:Float):Void;
	@:overload(function(image:js.html.ImageBitmapSource, sx:Float, sy:Float, sw:Float, sh:Float):js.lib.Promise<js.html.ImageBitmap> { })
	dynamic function createImageBitmap(image:js.html.ImageBitmapSource):js.lib.Promise<js.html.ImageBitmap>;
	dynamic function fetch(input:js.html.RequestInfo, ?init:js.html.RequestInit):js.lib.Promise<js.html.Response>;
	dynamic function queueMicrotask(callback:haxe.Constraints.Function):Void;
	dynamic function setInterval(handler:js.html.TimerHandler, ?timeout:Float, arguments:haxe.extern.Rest<Dynamic>):Float;
	dynamic function setTimeout(handler:js.html.TimerHandler, ?timeout:Float, arguments:haxe.extern.Rest<Dynamic>):Float;
	var sessionStorage : js.html.Storage;
};