(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var App = function() { };
App.__name__ = true;
App.main = function() {
	haxe_Log.trace("Hella, world!",{ fileName : "src/App.hx", lineNumber : 8, className : "App", methodName : "main"});
	var f = function(r) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(Debug.Log(r,"err",{ fileName : "src/App.hx", lineNumber : 36, className : "App", methodName : "main"}))));
	};
	var this1 = tink_core_Future.flatMap(tink_core_Promise.next(tink_core_Promise.next(tink_core_Promise.next(asys_io_File.getContent("./www.dotapea.com/a.html"),function(s) {
		var doc = new jsdom_JSDOM(s).window.document;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(new mozilla_readability_Readability(doc).parse())));
	}),function(parsed) {
		var content = "";
		if(parsed.content == "html") {
			content = parsed.content;
		} else {
			content = new Turndown().turndown(parsed.content);
		}
		Debug.Log(content,"content",{ fileName : "src/App.hx", lineNumber : 31, className : "App", methodName : "main"});
		var this1 = new tink_core_MPair(Mots.underclean(parsed.title),content);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(this1)));
	}),function(pair) {
		return asys_io_File.saveContent(process.cwd() + ("/www/md/" + pair.a + ".md"),pair.b);
	}),function(o) {
		switch(o._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
		case 1:
			return f(o.failure);
		}
	});
	this1.eager();
};
var DateTools = function() { };
DateTools.__name__ = true;
DateTools.__format_get = function(d,e) {
	switch(e) {
	case "%":
		return "%";
	case "A":
		return DateTools.DAY_NAMES[d.getDay()];
	case "B":
		return DateTools.MONTH_NAMES[d.getMonth()];
	case "C":
		return StringTools.lpad(Std.string(d.getFullYear() / 100 | 0),"0",2);
	case "D":
		return DateTools.__format(d,"%m/%d/%y");
	case "F":
		return DateTools.__format(d,"%Y-%m-%d");
	case "I":case "l":
		var hour = d.getHours() % 12;
		return StringTools.lpad(Std.string(hour == 0 ? 12 : hour),e == "I" ? "0" : " ",2);
	case "M":
		return StringTools.lpad(Std.string(d.getMinutes()),"0",2);
	case "R":
		return DateTools.__format(d,"%H:%M");
	case "S":
		return StringTools.lpad(Std.string(d.getSeconds()),"0",2);
	case "T":
		return DateTools.__format(d,"%H:%M:%S");
	case "Y":
		return Std.string(d.getFullYear());
	case "a":
		return DateTools.DAY_SHORT_NAMES[d.getDay()];
	case "b":case "h":
		return DateTools.MONTH_SHORT_NAMES[d.getMonth()];
	case "d":
		return StringTools.lpad(Std.string(d.getDate()),"0",2);
	case "e":
		return Std.string(d.getDate());
	case "H":case "k":
		return StringTools.lpad(Std.string(d.getHours()),e == "H" ? "0" : " ",2);
	case "m":
		return StringTools.lpad(Std.string(d.getMonth() + 1),"0",2);
	case "n":
		return "\n";
	case "p":
		if(d.getHours() > 11) {
			return "PM";
		} else {
			return "AM";
		}
		break;
	case "r":
		return DateTools.__format(d,"%I:%M:%S %p");
	case "s":
		return Std.string(d.getTime() / 1000 | 0);
	case "t":
		return "\t";
	case "u":
		var t = d.getDay();
		if(t == 0) {
			return "7";
		} else if(t == null) {
			return "null";
		} else {
			return "" + t;
		}
		break;
	case "w":
		return Std.string(d.getDay());
	case "y":
		return StringTools.lpad(Std.string(d.getFullYear() % 100),"0",2);
	default:
		throw new haxe_exceptions_NotImplementedException("Date.format %" + e + "- not implemented yet.",null,{ fileName : "DateTools.hx", lineNumber : 101, className : "DateTools", methodName : "__format_get"});
	}
};
DateTools.__format = function(d,f) {
	var r_b = "";
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) {
			break;
		}
		var len = np - p;
		r_b += len == null ? HxOverrides.substr(f,p,null) : HxOverrides.substr(f,p,len);
		r_b += Std.string(DateTools.__format_get(d,HxOverrides.substr(f,np + 1,1)));
		p = np + 2;
	}
	var len = f.length - p;
	r_b += len == null ? HxOverrides.substr(f,p,null) : HxOverrides.substr(f,p,len);
	return r_b;
};
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
};
var Debug = function() { };
Debug.__name__ = true;
Debug.Log = function(val,msg,pos) {
	if(msg == null) {
		msg = "";
	}
	haxe_Log.trace("" + pos.className + " " + pos.lineNumber + " " + msg,{ fileName : "Debug.hx", lineNumber : 5, className : "Debug", methodName : "Log", customParams : [val]});
	return val;
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	exists: function(key) {
		return Object.prototype.hasOwnProperty.call(this.h,key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,keys: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.h);
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapValueIterator(this.h);
	}
	,__class__: haxe_ds_StringMap
};
var Diactrics = function() { };
Diactrics.__name__ = true;
Diactrics.clean = function(input) {
	var chars = input.split("");
	var char;
	var _g = 0;
	var _g1 = chars.length;
	while(_g < _g1) {
		var i = _g++;
		char = Diactrics.map.h[chars[i]];
		if(null != char) {
			chars[i] = char;
		}
	}
	return chars.join("");
};
Diactrics.toArray = function(s) {
	return s.split("");
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	,matchedPos: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) {
			len = -1;
		}
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0 ? s : HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) {
				this.r.s = s;
			}
			return b;
		} else {
			var b = this.match(len < 0 ? HxOverrides.substr(s,pos,null) : HxOverrides.substr(s,pos,len));
			if(b) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b;
		}
	}
	,map: function(s,f) {
		var offset = 0;
		var buf_b = "";
		while(true) {
			if(offset >= s.length) {
				break;
			} else if(!this.matchSub(s,offset)) {
				buf_b += Std.string(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf_b += Std.string(HxOverrides.substr(s,offset,p.pos - offset));
			buf_b += Std.string(f(this));
			if(p.len == 0) {
				buf_b += Std.string(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else {
				offset = p.pos + p.len;
			}
			if(!this.r.global) {
				break;
			}
		}
		if(!this.r.global && offset > 0 && offset < s.length) {
			buf_b += Std.string(HxOverrides.substr(s,offset,null));
		}
		return buf_b;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
Math.__name__ = true;
var Mots = function() { };
Mots.__name__ = true;
Mots.underclean = function(str,separator) {
	if(separator == null) {
		separator = "_";
	}
	var nonWordChar_r = new RegExp("[\\xC0-\\xFF\\s\\W]","g".split("u").join(""));
	str = Mots.cleanAccents(str);
	str = str.replace(nonWordChar_r,separator);
	return str;
};
Mots.cleanFile = function(str) {
	var extension = haxe_io_Path.extension(str);
	str = haxe_io_Path.withoutExtension(str);
	str = Mots.stripEmoj(str);
	str = Mots.underclean(str," ") + ("." + Mots.cleanFile(extension));
	return Mots.camelize(str);
};
Mots.cleanAccents = function(str) {
	return Diactrics.clean(str);
};
Mots.stripExtension = function(n) {
	return haxe_io_Path.withoutExtension(n);
};
Mots.getExtension = function(n) {
	return haxe_io_Path.extension(n);
};
Mots.capitalize = function(str) {
	return str.charAt(0).toUpperCase() + HxOverrides.substr(str,1,null);
};
Mots.cleanPath = function(str) {
	return haxe_io_Path.normalize(str);
};
Mots.camelize = function(str) {
	str = new EReg("\\s(.)","g").map(str,function(reg) {
		return reg.matched(0).toUpperCase();
	});
	var _this_r = new RegExp("\\s","g".split("u").join(""));
	str = str.replace(_this_r,"");
	return str;
};
Mots.endsWith = function(str,ends) {
	var reg = new EReg("(" + ends + "$)","m");
	return reg.match(str);
};
Mots.contains = function(s,test) {
	return s.indexOf(test) >= 0;
};
Mots.firstWord = function(str) {
	var r = new EReg("\\S\\w*","g");
	r.match(str);
	return r.matched(0);
};
Mots.betweenChars = function(str,char) {
	var r = new EReg("(?<=" + char + ")(.*?)(?=" + char + ")","g");
	r.match(str);
	return r.matched(1);
};
Mots.betweenDiffChars = function(str,deb,end) {
	var r = new EReg("([^" + deb + "])+?(?=" + end + ")","g");
	r.match(str);
	return r.matched(0);
};
Mots.stripEmoj = function(str) {
	return str.replace(Mots.jsReg.r,"");
};
Mots.matchEmoj = function(str) {
	return Mots.jsReg.match(str);
};
Mots.unCamel = function(s) {
	var r1 = new EReg("([A-Z])","g");
	s = r1.map(s,function(reg) {
		return " " + reg.matched(0).toLowerCase();
	});
	return s;
};
Mots.uuid = function() {
	var uid_b = "";
	var a = 8;
	uid_b = "" + Std.string(StringTools.hex(new Date().getTime() | 0,8));
	while(a++ < 36) uid_b += Std.string((a * 51 & 52) != 0 ? StringTools.hex((a ^ 15) != 0 ? 8 ^ (Math.random() * ((a ^ 20) != 0 ? 16 : 4) | 0) : 4) : "-");
	return uid_b.toLowerCase();
};
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
Reflect.compare = function(a,b) {
	if(a == b) {
		return 0;
	} else if(a > b) {
		return 1;
	} else {
		return -1;
	}
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) {
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		return false;
	}
	if(f1.scope == f2.scope && f1.method == f2.method) {
		return f1.method != null;
	} else {
		return false;
	}
};
Reflect.isEnumValue = function(v) {
	if(v != null) {
		return v.__enum__ != null;
	} else {
		return false;
	}
};
Reflect.copy = function(o) {
	if(o == null) {
		return null;
	}
	var o2 = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
Std.random = function(x) {
	if(x <= 0) {
		return 0;
	} else {
		return Math.floor(Math.random() * x);
	}
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return s.indexOf(end,slen - elen) == slen - elen;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	l -= s.length;
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	buf_b += s == null ? "null" : "" + s;
	return buf_b;
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	buf_b = "" + (s == null ? "null" : "" + s);
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	return buf_b;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	while(true) {
		s = "0123456789ABCDEF".charAt(n & 15) + s;
		n >>>= 4;
		if(!(n > 0)) {
			break;
		}
	}
	if(digits != null) {
		while(s.length < digits) s = "0" + s;
	}
	return s;
};
var haxe_io_Output = function() { };
haxe_io_Output.__name__ = true;
haxe_io_Output.prototype = {
	writeByte: function(c) {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Output.hx", lineNumber : 47, className : "haxe.io.Output", methodName : "writeByte"});
	}
	,writeBytes: function(s,pos,len) {
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		var b = s.b;
		var k = len;
		while(k > 0) {
			this.writeByte(b[pos]);
			++pos;
			--k;
		}
		return len;
	}
	,close: function() {
	}
	,__class__: haxe_io_Output
};
var _$Sys_FileOutput = function(fd) {
	this.fd = fd;
};
_$Sys_FileOutput.__name__ = true;
_$Sys_FileOutput.__super__ = haxe_io_Output;
_$Sys_FileOutput.prototype = $extend(haxe_io_Output.prototype,{
	writeByte: function(c) {
		js_node_Fs.writeSync(this.fd,String.fromCodePoint(c));
	}
	,writeBytes: function(s,pos,len) {
		var data = s.b;
		return js_node_Fs.writeSync(this.fd,js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length),pos,len);
	}
	,writeString: function(s,encoding) {
		js_node_Fs.writeSync(this.fd,s);
	}
	,flush: function() {
		js_node_Fs.fsyncSync(this.fd);
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,__class__: _$Sys_FileOutput
});
var haxe_io_Input = function() { };
haxe_io_Input.__name__ = true;
haxe_io_Input.prototype = {
	readByte: function() {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Input.hx", lineNumber : 53, className : "haxe.io.Input", methodName : "readByte"});
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( _g ) {
			if(!((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
				throw _g;
			}
		}
		return len - k;
	}
	,close: function() {
	}
	,readUntil: function(end) {
		var buf = new haxe_io_BytesBuffer();
		var last;
		while(true) {
			last = this.readByte();
			if(!(last != end)) {
				break;
			}
			buf.addByte(last);
		}
		return buf.getBytes().toString();
	}
	,__class__: haxe_io_Input
};
var _$Sys_FileInput = function(fd) {
	this.fd = fd;
};
_$Sys_FileInput.__name__ = true;
_$Sys_FileInput.__super__ = haxe_io_Input;
_$Sys_FileInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		var buf = js_node_buffer_Buffer.alloc(1);
		try {
			js_node_Fs.readSync(this.fd,buf,0,1,null);
		} catch( _g ) {
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(_g1.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(_g1));
			}
		}
		return buf[0];
	}
	,readBytes: function(s,pos,len) {
		var data = s.b;
		var buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		try {
			return js_node_Fs.readSync(this.fd,buf,pos,len,null);
		} catch( _g ) {
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(_g1.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(_g1));
			}
		}
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,__class__: _$Sys_FileInput
});
var Turndown = require("turndown");
var Type = function() { };
Type.__name__ = true;
Type.enumParameters = function(e) {
	var enm = $hxEnums[e.__enum__];
	var params = enm.__constructs__[e._hx_index].__params__;
	if(params != null) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < params.length) {
			var p = params[_g1];
			++_g1;
			_g.push(e[p]);
		}
		return _g;
	} else {
		return [];
	}
};
var asys_io_File = function() { };
asys_io_File.__name__ = true;
asys_io_File.readStream = function(path,binary) {
	if(binary == null) {
		binary = true;
	}
	var r = js_node_Fs.createReadStream(path);
	var options = null;
	options = { };
	return tink_io_nodejs_NodejsSource.wrap("asys read stream",r,options.chunkSize,options.onEnd);
};
asys_io_File.writeStream = function(path,binary) {
	if(binary == null) {
		binary = true;
	}
	return tink_io_nodejs_NodejsSink.wrap("asys write stream",js_node_Fs.createWriteStream(path));
};
asys_io_File.getContent = function(path) {
	var trigger = new tink_core_FutureTrigger();
	js_node_Fs.readFile(path,"utf8",function(err,data) {
		trigger.trigger(err == null ? tink_core_Outcome.Success(data) : tink_core_Outcome.Failure(tink_core_TypedError.withData(null,err.message,err,{ fileName : "asys/io/File.hx", lineNumber : 42, className : "asys.io.File", methodName : "getContent"})));
	});
	return trigger;
};
asys_io_File.saveContent = function(path,content) {
	var trigger = new tink_core_FutureTrigger();
	js_node_Fs.writeFile(path,content,"utf8",function(err) {
		trigger.trigger(err == null ? tink_core_Outcome.Success(null) : tink_core_Outcome.Failure(tink_core_TypedError.withData(null,err.message,err,{ fileName : "asys/io/File.hx", lineNumber : 53, className : "asys.io.File", methodName : "saveContent"})));
	});
	return trigger;
};
asys_io_File.getBytes = function(path) {
	var trigger = new tink_core_FutureTrigger();
	js_node_Fs.readFile(path,function(err,buffer) {
		trigger.trigger(err == null ? tink_core_Outcome.Success(js_node_buffer__$Buffer_Helper.bytesOfBuffer(buffer)) : tink_core_Outcome.Failure(tink_core_TypedError.withData(null,err.message,err,{ fileName : "asys/io/File.hx", lineNumber : 64, className : "asys.io.File", methodName : "getBytes"})));
	});
	return trigger;
};
asys_io_File.saveBytes = function(path,bytes) {
	var trigger = new tink_core_FutureTrigger();
	var data = bytes.b;
	js_node_Fs.writeFile(path,js_node_buffer_Buffer.from(data.buffer,data.byteOffset,bytes.length),function(err) {
		trigger.trigger(err == null ? tink_core_Outcome.Success(null) : tink_core_Outcome.Failure(tink_core_TypedError.withData(null,err.message,err,{ fileName : "asys/io/File.hx", lineNumber : 75, className : "asys.io.File", methodName : "saveBytes"})));
	});
	return trigger;
};
asys_io_File.read = function(path,binary) {
	if(binary == null) {
		binary = true;
	}
	var trigger = new tink_core_FutureTrigger();
	js_node_Fs.open(path,"r",function(err,fd) {
		trigger.trigger(err == null ? tink_core_Outcome.Success(new sys_io_FileInput(fd)) : tink_core_Outcome.Failure(tink_core_TypedError.withData(null,err.message,err,{ fileName : "asys/io/File.hx", lineNumber : 86, className : "asys.io.File", methodName : "read"})));
	});
	return trigger;
};
asys_io_File.write = function(path,binary) {
	if(binary == null) {
		binary = true;
	}
	var trigger = new tink_core_FutureTrigger();
	js_node_Fs.open(path,"w",function(err,fd) {
		trigger.trigger(err == null ? tink_core_Outcome.Success(new sys_io_FileOutput(fd)) : tink_core_Outcome.Failure(tink_core_TypedError.withData(null,err.message,err,{ fileName : "asys/io/File.hx", lineNumber : 97, className : "asys.io.File", methodName : "write"})));
	});
	return trigger;
};
asys_io_File.append = function(path,binary) {
	if(binary == null) {
		binary = true;
	}
	var trigger = new tink_core_FutureTrigger();
	js_node_Fs.open(path,"a",function(err,fd) {
		trigger.trigger(err == null ? tink_core_Outcome.Success(new sys_io_FileOutput(fd)) : tink_core_Outcome.Failure(tink_core_TypedError.withData(null,err.message,err,{ fileName : "asys/io/File.hx", lineNumber : 108, className : "asys.io.File", methodName : "append"})));
	});
	return trigger;
};
asys_io_File.copy = function(srcPath,dstPath) {
	var trigger = new tink_core_FutureTrigger();
	var called = false;
	var done = function(err) {
		if(called) {
			return;
		}
		trigger.trigger(err == null ? tink_core_Outcome.Success(null) : tink_core_Outcome.Failure(tink_core_TypedError.withData(null,err.message,err,{ fileName : "asys/io/File.hx", lineNumber : 121, className : "asys.io.File", methodName : "copy"})));
		called = true;
	};
	var rd = js_node_Fs.createReadStream(srcPath);
	rd.on("error",done);
	var wr = js_node_Fs.createWriteStream(dstPath);
	wr.on("error",done);
	wr.on("close",function(ex) {
		done();
	});
	rd.pipe(wr);
	return trigger;
};
var haxe_StackItem = $hxEnums["haxe.StackItem"] = { __ename__:true,__constructs__:null
	,CFunction: {_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
	,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Module",$_.__params__ = ["m"],$_)
	,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="FilePos",$_.__params__ = ["s","file","line","column"],$_)
	,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Method",$_.__params__ = ["classname","method"],$_)
	,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="LocalFunction",$_.__params__ = ["v"],$_)
};
haxe_StackItem.__constructs__ = [haxe_StackItem.CFunction,haxe_StackItem.Module,haxe_StackItem.FilePos,haxe_StackItem.Method,haxe_StackItem.LocalFunction];
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = true;
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.ofString = function(s,encoding) {
	if(encoding == haxe_io_Encoding.RawNative) {
		var buf = new Uint8Array(s.length << 1);
		var _g = 0;
		var _g1 = s.length;
		while(_g < _g1) {
			var i = _g++;
			var c = s.charCodeAt(i);
			buf[i << 1] = c & 255;
			buf[i << 1 | 1] = c >> 8;
		}
		return new haxe_io_Bytes(buf.buffer);
	}
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = s.charCodeAt(i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(srcpos == 0 && len == src.b.byteLength) {
			this.b.set(src.b,pos);
		} else {
			this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
		}
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		return new haxe_io_Bytes(this.b.buffer.slice(pos + this.b.byteOffset,pos + this.b.byteOffset + len));
	}
	,getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(encoding == null) {
			encoding = haxe_io_Encoding.UTF8;
		}
		var s = "";
		var b = this.b;
		var i = pos;
		var max = pos + len;
		switch(encoding._hx_index) {
		case 0:
			while(i < max) {
				var c = b[i++];
				if(c < 128) {
					if(c == 0) {
						break;
					}
					s += String.fromCodePoint(c);
				} else if(c < 224) {
					var code = (c & 63) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code);
				} else if(c < 240) {
					var c2 = b[i++];
					var code1 = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code1);
				} else {
					var c21 = b[i++];
					var c3 = b[i++];
					var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(u);
				}
			}
			break;
		case 1:
			while(i < max) {
				var c = b[i++] | b[i++] << 8;
				s += String.fromCodePoint(c);
			}
			break;
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,toHex: function() {
		var s_b = "";
		var chars = [];
		var str = "0123456789abcdef";
		var _g = 0;
		var _g1 = str.length;
		while(_g < _g1) {
			var i = _g++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g = 0;
		var _g1 = this.length;
		while(_g < _g1) {
			var i = _g++;
			var c = this.b[i];
			s_b += String.fromCodePoint(chars[c >> 4]);
			s_b += String.fromCodePoint(chars[c & 15]);
		}
		return s_b;
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_crypto_Base64 = function() { };
haxe_crypto_Base64.__name__ = true;
haxe_crypto_Base64.encode = function(bytes,complement) {
	if(complement == null) {
		complement = true;
	}
	var str = new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).encodeBytes(bytes).toString();
	if(complement) {
		switch(bytes.length % 3) {
		case 1:
			str += "==";
			break;
		case 2:
			str += "=";
			break;
		default:
		}
	}
	return str;
};
haxe_crypto_Base64.decode = function(str,complement) {
	if(complement == null) {
		complement = true;
	}
	if(complement) {
		while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	}
	return new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).decodeBytes(haxe_io_Bytes.ofString(str));
};
var haxe_crypto_BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) ++nbits;
	if(nbits > 8 || len != 1 << nbits) {
		throw haxe_Exception.thrown("BaseCode : base length must be a power of two.");
	}
	this.base = base;
	this.nbits = nbits;
};
haxe_crypto_BaseCode.__name__ = true;
haxe_crypto_BaseCode.prototype = {
	encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = new haxe_io_Bytes(new ArrayBuffer(size + (b.length * 8 % nbits == 0 ? 0 : 1)));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.b[pin++];
			}
			curbits -= nbits;
			out.b[pout++] = base.b[buf >> curbits & mask];
		}
		if(curbits > 0) {
			out.b[pout++] = base.b[buf << nbits - curbits & mask];
		}
		return out;
	}
	,initTable: function() {
		var tbl = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g = 0;
		var _g1 = this.base.length;
		while(_g < _g1) {
			var i = _g++;
			tbl[this.base.b[i]] = i;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		if(this.tbl == null) {
			this.initTable();
		}
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = new haxe_io_Bytes(new ArrayBuffer(size));
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.b[pin++]];
				if(i == -1) {
					throw haxe_Exception.thrown("BaseCode : invalid encoded char");
				}
				buf |= i;
			}
			curbits -= 8;
			out.b[pout++] = buf >> curbits & 255;
		}
		return out;
	}
	,__class__: haxe_crypto_BaseCode
};
var haxe_ds_BalancedTree = function() {
};
haxe_ds_BalancedTree.__name__ = true;
haxe_ds_BalancedTree.__interfaces__ = [haxe_IMap];
haxe_ds_BalancedTree.iteratorLoop = function(node,acc) {
	while(true) {
		if(node != null) {
			haxe_ds_BalancedTree.iteratorLoop(node.left,acc);
			acc.push(node.value);
			node = node.right;
			continue;
		}
		return;
	}
};
haxe_ds_BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) {
				return node.value;
			}
			if(c < 0) {
				node = node.left;
			} else {
				node = node.right;
			}
		}
		return null;
	}
	,exists: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) {
				return true;
			} else if(c < 0) {
				node = node.left;
			} else {
				node = node.right;
			}
		}
		return false;
	}
	,iterator: function() {
		var ret = [];
		haxe_ds_BalancedTree.iteratorLoop(this.root,ret);
		return new haxe_iterators_ArrayIterator(ret);
	}
	,keys: function() {
		var ret = [];
		this.keysLoop(this.root,ret);
		return new haxe_iterators_ArrayIterator(ret);
	}
	,setLoop: function(k,v,node) {
		if(node == null) {
			return new haxe_ds_TreeNode(null,k,v,null);
		}
		var c = this.compare(k,node.key);
		if(c == 0) {
			return new haxe_ds_TreeNode(node.left,k,v,node.right,node == null ? 0 : node._height);
		} else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,keysLoop: function(node,acc) {
		if(node != null) {
			this.keysLoop(node.left,acc);
			acc.push(node.key);
			this.keysLoop(node.right,acc);
		}
	}
	,balance: function(l,k,v,r) {
		var hl = l == null ? 0 : l._height;
		var hr = r == null ? 0 : r._height;
		if(hl > hr + 2) {
			var _this = l.left;
			var _this1 = l.right;
			if((_this == null ? 0 : _this._height) >= (_this1 == null ? 0 : _this1._height)) {
				return new haxe_ds_TreeNode(l.left,l.key,l.value,new haxe_ds_TreeNode(l.right,k,v,r));
			} else {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe_ds_TreeNode(l.right.right,k,v,r));
			}
		} else if(hr > hl + 2) {
			var _this = r.right;
			var _this1 = r.left;
			if((_this == null ? 0 : _this._height) > (_this1 == null ? 0 : _this1._height)) {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left),r.key,r.value,r.right);
			} else {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe_ds_TreeNode(r.left.right,r.key,r.value,r.right));
			}
		} else {
			return new haxe_ds_TreeNode(l,k,v,r,(hl > hr ? hl : hr) + 1);
		}
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,__class__: haxe_ds_BalancedTree
};
var haxe_ds_TreeNode = function(l,k,v,r,h) {
	if(h == null) {
		h = -1;
	}
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) {
		var tmp;
		var _this = this.left;
		var _this1 = this.right;
		if((_this == null ? 0 : _this._height) > (_this1 == null ? 0 : _this1._height)) {
			var _this = this.left;
			tmp = _this == null ? 0 : _this._height;
		} else {
			var _this = this.right;
			tmp = _this == null ? 0 : _this._height;
		}
		this._height = tmp + 1;
	} else {
		this._height = h;
	}
};
haxe_ds_TreeNode.__name__ = true;
haxe_ds_TreeNode.prototype = {
	__class__: haxe_ds_TreeNode
};
var haxe_ds_Either = $hxEnums["haxe.ds.Either"] = { __ename__:true,__constructs__:null
	,Left: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Left",$_.__params__ = ["v"],$_)
	,Right: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Right",$_.__params__ = ["v"],$_)
};
haxe_ds_Either.__constructs__ = [haxe_ds_Either.Left,haxe_ds_Either.Right];
var haxe_ds_EnumValueMap = function() {
	haxe_ds_BalancedTree.call(this);
};
haxe_ds_EnumValueMap.__name__ = true;
haxe_ds_EnumValueMap.__interfaces__ = [haxe_IMap];
haxe_ds_EnumValueMap.__super__ = haxe_ds_BalancedTree;
haxe_ds_EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1._hx_index - k2._hx_index;
		if(d != 0) {
			return d;
		}
		var p1 = Type.enumParameters(k1);
		var p2 = Type.enumParameters(k2);
		if(p1.length == 0 && p2.length == 0) {
			return 0;
		}
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) {
			return ld;
		}
		var _g = 0;
		var _g1 = a1.length;
		while(_g < _g1) {
			var i = _g++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) {
				return d;
			}
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) {
			return this.compare(v1,v2);
		} else if(((v1) instanceof Array) && ((v2) instanceof Array)) {
			return this.compareArgs(v1,v2);
		} else {
			return Reflect.compare(v1,v2);
		}
	}
	,__class__: haxe_ds_EnumValueMap
});
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:true,__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
var haxe_ds__$StringMap_StringMapKeyIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapKeyIterator.__name__ = true;
haxe_ds__$StringMap_StringMapKeyIterator.prototype = {
	hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.keys[this.current++];
	}
	,__class__: haxe_ds__$StringMap_StringMapKeyIterator
};
var haxe_ds__$StringMap_StringMapValueIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapValueIterator.__name__ = true;
haxe_ds__$StringMap_StringMapValueIterator.prototype = {
	hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.h[this.keys[this.current++]];
	}
	,__class__: haxe_ds__$StringMap_StringMapValueIterator
};
var haxe_exceptions_PosException = function(message,previous,pos) {
	haxe_Exception.call(this,message,previous);
	if(pos == null) {
		this.posInfos = { fileName : "(unknown)", lineNumber : 0, className : "(unknown)", methodName : "(unknown)"};
	} else {
		this.posInfos = pos;
	}
};
haxe_exceptions_PosException.__name__ = true;
haxe_exceptions_PosException.__super__ = haxe_Exception;
haxe_exceptions_PosException.prototype = $extend(haxe_Exception.prototype,{
	toString: function() {
		return "" + haxe_Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
	}
	,__class__: haxe_exceptions_PosException
});
var haxe_exceptions_NotImplementedException = function(message,previous,pos) {
	if(message == null) {
		message = "Not implemented";
	}
	haxe_exceptions_PosException.call(this,message,previous,pos);
};
haxe_exceptions_NotImplementedException.__name__ = true;
haxe_exceptions_NotImplementedException.__super__ = haxe_exceptions_PosException;
haxe_exceptions_NotImplementedException.prototype = $extend(haxe_exceptions_PosException.prototype,{
	__class__: haxe_exceptions_NotImplementedException
});
var haxe_http_HttpBase = function(url) {
	this.url = url;
	this.headers = [];
	this.params = [];
	this.emptyOnData = $bind(this,this.onData);
};
haxe_http_HttpBase.__name__ = true;
haxe_http_HttpBase.prototype = {
	setHeader: function(name,value) {
		var _g = 0;
		var _g1 = this.headers.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.headers[i].name == name) {
				this.headers[i] = { name : name, value : value};
				return;
			}
		}
		this.headers.push({ name : name, value : value});
	}
	,setPostData: function(data) {
		this.postData = data;
		this.postBytes = null;
	}
	,onData: function(data) {
	}
	,onBytes: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
	,hasOnData: function() {
		return !Reflect.compareMethods($bind(this,this.onData),this.emptyOnData);
	}
	,success: function(data) {
		this.responseBytes = data;
		this.responseAsString = null;
		if(this.hasOnData()) {
			this.onData(this.get_responseData());
		}
		this.onBytes(this.responseBytes);
	}
	,get_responseData: function() {
		if(this.responseAsString == null && this.responseBytes != null) {
			this.responseAsString = this.responseBytes.getString(0,this.responseBytes.length,haxe_io_Encoding.UTF8);
		}
		return this.responseAsString;
	}
	,__class__: haxe_http_HttpBase
};
var haxe_http_HttpNodeJs = function(url) {
	haxe_http_HttpBase.call(this,url);
};
haxe_http_HttpNodeJs.__name__ = true;
haxe_http_HttpNodeJs.__super__ = haxe_http_HttpBase;
haxe_http_HttpNodeJs.prototype = $extend(haxe_http_HttpBase.prototype,{
	request: function(post) {
		var _gthis = this;
		this.responseAsString = null;
		this.responseBytes = null;
		var parsedUrl = new js_node_url_URL(this.url);
		var secure = parsedUrl.protocol == "https:";
		var host = parsedUrl.hostname;
		var path = parsedUrl.pathname;
		var port = parsedUrl.port != null ? Std.parseInt(parsedUrl.port) : secure ? 443 : 80;
		var h = { };
		var _g = 0;
		var _g1 = this.headers;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var arr = Reflect.field(h,i.name);
			if(arr == null) {
				arr = [];
				h[i.name] = arr;
			}
			arr.push(i.value);
		}
		if(this.postData != null || this.postBytes != null) {
			post = true;
		}
		var uri = null;
		var _g = 0;
		var _g1 = this.params;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(uri == null) {
				uri = "";
			} else {
				uri += "&";
			}
			var s = p.name;
			var uri1 = encodeURIComponent(s) + "=";
			var s1 = p.value;
			uri += uri1 + encodeURIComponent(s1);
		}
		var question = path.split("?").length <= 1;
		if(uri != null) {
			path += (question ? "?" : "&") + uri;
		}
		var opts = { protocol : parsedUrl.protocol, hostname : host, port : port, method : post ? "POST" : "GET", path : path, headers : h};
		var httpResponse = function(res) {
			res.setEncoding("binary");
			var s = res.statusCode;
			if(s != null) {
				_gthis.onStatus(s);
			}
			var data = [];
			res.on("data",function(chunk) {
				data.push(js_node_buffer_Buffer.from(chunk,"binary"));
			});
			res.on("end",function(_) {
				var buf = data.length == 1 ? data[0] : js_node_buffer_Buffer.concat(data);
				var httpResponse = buf.buffer.slice(buf.byteOffset,buf.byteOffset + buf.byteLength);
				_gthis.responseBytes = haxe_io_Bytes.ofData(httpResponse);
				_gthis.req = null;
				if(s != null && s >= 200 && s < 400) {
					_gthis.success(_gthis.responseBytes);
				} else {
					_gthis.onError("Http Error #" + s);
				}
			});
		};
		this.req = secure ? js_node_Https.request(opts,httpResponse) : js_node_Http.request(opts,httpResponse);
		if(post) {
			if(this.postData != null) {
				this.req.write(this.postData);
			} else if(this.postBytes != null) {
				this.req.setHeader("Content-Length","" + this.postBytes.length);
				this.req.write(js_node_buffer_Buffer.from(this.postBytes.b.bufferValue));
			}
		}
		this.req.end();
	}
	,__class__: haxe_http_HttpNodeJs
});
var haxe_io_BytesBuffer = function() {
	this.pos = 0;
	this.size = 0;
};
haxe_io_BytesBuffer.__name__ = true;
haxe_io_BytesBuffer.prototype = {
	addByte: function(byte) {
		if(this.pos == this.size) {
			this.grow(1);
		}
		this.view.setUint8(this.pos++,byte);
	}
	,grow: function(delta) {
		var req = this.pos + delta;
		var nsize = this.size == 0 ? 16 : this.size;
		while(nsize < req) nsize = nsize * 3 >> 1;
		var nbuf = new ArrayBuffer(nsize);
		var nu8 = new Uint8Array(nbuf);
		if(this.size > 0) {
			nu8.set(this.u8);
		}
		this.size = nsize;
		this.buffer = nbuf;
		this.u8 = nu8;
		this.view = new DataView(this.buffer);
	}
	,getBytes: function() {
		if(this.size == 0) {
			return new haxe_io_Bytes(new ArrayBuffer(0));
		}
		var b = new haxe_io_Bytes(this.buffer);
		b.length = this.pos;
		return b;
	}
	,__class__: haxe_io_BytesBuffer
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) {
		pos = 0;
	}
	if(len == null) {
		len = b.length - pos;
	}
	if(pos < 0 || len < 0 || pos + len > b.length) {
		throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
	}
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
haxe_io_BytesInput.__name__ = true;
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		if(this.len == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.len == 0 && len > 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		if(this.len < len) {
			len = this.len;
		}
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
});
var haxe_io_Eof = function() {
};
haxe_io_Eof.__name__ = true;
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	haxe_io_FPHelper.helper.setInt32(0,low,true);
	haxe_io_FPHelper.helper.setInt32(4,high,true);
	return haxe_io_FPHelper.helper.getFloat64(0,true);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	haxe_io_FPHelper.helper.setFloat64(0,v,true);
	i64.low = haxe_io_FPHelper.helper.getInt32(0,true);
	i64.high = haxe_io_FPHelper.helper.getInt32(4,true);
	return i64;
};
var haxe_io_Path = function(path) {
	switch(path) {
	case ".":case "..":
		this.dir = path;
		this.file = "";
		return;
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else {
		this.dir = null;
	}
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
haxe_io_Path.__name__ = true;
haxe_io_Path.withoutExtension = function(path) {
	var s = new haxe_io_Path(path);
	s.ext = null;
	return s.toString();
};
haxe_io_Path.extension = function(path) {
	var s = new haxe_io_Path(path);
	if(s.ext == null) {
		return "";
	}
	return s.ext;
};
haxe_io_Path.normalize = function(path) {
	var slash = "/";
	path = path.split("\\").join(slash);
	if(path == slash) {
		return slash;
	}
	var target = [];
	var _g = 0;
	var _g1 = path.split(slash);
	while(_g < _g1.length) {
		var token = _g1[_g];
		++_g;
		if(token == ".." && target.length > 0 && target[target.length - 1] != "..") {
			target.pop();
		} else if(token == "") {
			if(target.length > 0 || HxOverrides.cca(path,0) == 47) {
				target.push(token);
			}
		} else if(token != ".") {
			target.push(token);
		}
	}
	var tmp = target.join(slash);
	var acc_b = "";
	var colon = false;
	var slashes = false;
	var _g2_offset = 0;
	var _g2_s = tmp;
	while(_g2_offset < _g2_s.length) {
		var s = _g2_s;
		var index = _g2_offset++;
		var c = s.charCodeAt(index);
		if(c >= 55296 && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(index + 1) & 1023;
		}
		var c1 = c;
		if(c1 >= 65536) {
			++_g2_offset;
		}
		var c2 = c1;
		switch(c2) {
		case 47:
			if(!colon) {
				slashes = true;
			} else {
				var i = c2;
				colon = false;
				if(slashes) {
					acc_b += "/";
					slashes = false;
				}
				acc_b += String.fromCodePoint(i);
			}
			break;
		case 58:
			acc_b += ":";
			colon = true;
			break;
		default:
			var i1 = c2;
			colon = false;
			if(slashes) {
				acc_b += "/";
				slashes = false;
			}
			acc_b += String.fromCodePoint(i1);
		}
	}
	return acc_b;
};
haxe_io_Path.prototype = {
	toString: function() {
		return (this.dir == null ? "" : this.dir + (this.backslash ? "\\" : "/")) + this.file + (this.ext == null ? "" : "." + this.ext);
	}
	,__class__: haxe_io_Path
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var httpstatus_HttpStatusCode = {};
httpstatus_HttpStatusCode.toMessage = function(this1) {
	var this2 = httpstatus_HttpStatusMessage.fromCode(this1);
	return this2;
};
httpstatus_HttpStatusCode.toInt = function(this1) {
	return this1;
};
httpstatus_HttpStatusCode.fromErrorCode = function(code) {
	return code;
};
httpstatus_HttpStatusCode.toWebResponse = function(this1) {
	return httpstatus_HttpStatusCode.toOutgoingResponse(this1);
};
httpstatus_HttpStatusCode.toOutgoingResponse = function(this1) {
	var this2 = httpstatus_HttpStatusMessage.fromCode(this1);
	var this3 = new tink_http_ResponseHeaderBase(this1,this2,[new tink_http_HeaderField("content-length".toLowerCase(),"0")],"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this3,tink_io_Source.EMPTY);
	return this1;
};
httpstatus_HttpStatusCode.fromIncomingResponse = function(res) {
	return res.header.statusCode;
};
var httpstatus_HttpStatusMessage = {};
httpstatus_HttpStatusMessage._new = function(statusCode) {
	var this1 = httpstatus_HttpStatusMessage.fromCode(statusCode);
	return this1;
};
httpstatus_HttpStatusMessage.fromCode = function(statusCode) {
	switch(statusCode) {
	case 100:
		return "Continue";
	case 101:
		return "Switching Protocols";
	case 102:
		return "Processing";
	case 200:
		return "OK";
	case 201:
		return "Created";
	case 202:
		return "Accepted";
	case 203:
		return "Non-Authoritative Information";
	case 204:
		return "No Content";
	case 205:
		return "Reset Content";
	case 206:
		return "Partial Content";
	case 207:
		return "Multi-Status";
	case 208:
		return "Already Reported";
	case 226:
		return "IM Used";
	case 300:
		return "Multiple Choices";
	case 301:
		return "Moved Permanently";
	case 302:
		return "Found";
	case 303:
		return "See Other";
	case 304:
		return "Not Modified";
	case 305:
		return "Use Proxy";
	case 306:
		return "Switch Proxy";
	case 307:
		return "Temporary Redirect";
	case 308:
		return "Permanent Redirect";
	case 400:
		return "Bad Request";
	case 401:
		return "Unauthorized";
	case 402:
		return "Payment Required";
	case 403:
		return "Forbidden";
	case 404:
		return "Not Found";
	case 405:
		return "Method Not Allowed";
	case 406:
		return "Not Acceptable";
	case 407:
		return "Proxy Authentication Required";
	case 408:
		return "Request Timeout";
	case 409:
		return "Conflict";
	case 410:
		return "Gone";
	case 411:
		return "Length Required";
	case 412:
		return "Precondition Failed";
	case 413:
		return "Payload Too Large";
	case 414:
		return "URI Too Long";
	case 415:
		return "Unsupported Media Type";
	case 416:
		return "Range Not Satisfiable";
	case 417:
		return "Expectation Failed";
	case 418:
		return "I'm a teapot";
	case 421:
		return "Misdirected Request";
	case 422:
		return "Unprocessable Entity";
	case 423:
		return "Locked";
	case 424:
		return "Failed Dependency";
	case 426:
		return "Upgrade Required";
	case 428:
		return "Precondition Required";
	case 429:
		return "Too Many Requests";
	case 431:
		return "Request Header Fields Too Large";
	case 451:
		return "Unavailable For Legal Reasons";
	case 500:
		return "Internal Server Error";
	case 501:
		return "Not Implemented";
	case 502:
		return "Bad Gateway";
	case 503:
		return "Service Unavailable";
	case 504:
		return "Gateway Timeout";
	case 505:
		return "HTTP Version Not Supported";
	case 506:
		return "Variant Also Negotiates";
	case 507:
		return "Insufficient Storage";
	case 508:
		return "Loop Detected";
	case 510:
		return "Not Extended";
	case 511:
		return "Network Authentication Required";
	default:
		return "Unknown Status";
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	while(true) {
		if(cc == null) {
			return false;
		}
		if(cc == cl) {
			return true;
		}
		var intf = cc.__interfaces__;
		if(intf != null) {
			var _g = 0;
			var _g1 = intf.length;
			while(_g < _g1) {
				var i = _g++;
				var i1 = intf[i];
				if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
					return true;
				}
			}
		}
		cc = cc.__super__;
	}
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_lib__$ArrayBuffer_ArrayBufferCompat = function() { };
js_lib__$ArrayBuffer_ArrayBufferCompat.__name__ = true;
js_lib__$ArrayBuffer_ArrayBufferCompat.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null ? null : end - begin);
	var resultArray = new Uint8Array(u.byteLength);
	resultArray.set(u);
	return resultArray.buffer;
};
var js_node_ChildProcess = require("child_process");
var js_node_Fs = require("fs");
var js_node_Http = require("http");
var js_node_Https = require("https");
var js_node_KeyValue = {};
js_node_KeyValue.get_key = function(this1) {
	return this1[0];
};
js_node_KeyValue.get_value = function(this1) {
	return this1[1];
};
var js_node_buffer_Buffer = require("buffer").Buffer;
var js_node_buffer__$Buffer_Helper = function() { };
js_node_buffer__$Buffer_Helper.__name__ = true;
js_node_buffer__$Buffer_Helper.bytesOfBuffer = function(b) {
	var o = Object.create(haxe_io_Bytes.prototype);
	o.length = b.byteLength;
	o.b = b;
	b.bufferValue = b;
	b.hxBytes = o;
	b.bytes = b;
	return o;
};
var js_node_stream_PassThrough = require("stream").PassThrough;
var js_node_stream_WritableNewOptionsAdapter = {};
js_node_stream_WritableNewOptionsAdapter.from = function(options) {
	if(!Object.prototype.hasOwnProperty.call(options,"final")) {
		Object.defineProperty(options,"final",{ get : function() {
			return options.final_;
		}});
	}
	return options;
};
var js_node_url_URL = require("url").URL;
var js_node_url_URLSearchParamsEntry = {};
js_node_url_URLSearchParamsEntry._new = function(name,value) {
	var this1 = [name,value];
	return this1;
};
js_node_url_URLSearchParamsEntry.get_name = function(this1) {
	return this1[0];
};
js_node_url_URLSearchParamsEntry.get_value = function(this1) {
	return this1[1];
};
var jsdom_JSDOM = require("jsdom").JSDOM;
var mozilla_readability_Readability = require("@mozilla/readability").Readability;
var sys_io_FileInput = function(fd) {
	this.fd = fd;
	this.pos = 0;
};
sys_io_FileInput.__name__ = true;
sys_io_FileInput.__super__ = haxe_io_Input;
sys_io_FileInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		var buf = js_node_buffer_Buffer.alloc(1);
		var bytesRead;
		try {
			bytesRead = js_node_Fs.readSync(this.fd,buf,0,1,this.pos);
		} catch( _g ) {
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(_g1.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(_g1));
			}
		}
		if(bytesRead == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.pos++;
		return buf[0];
	}
	,readBytes: function(s,pos,len) {
		var data = s.b;
		var buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		var bytesRead;
		try {
			bytesRead = js_node_Fs.readSync(this.fd,buf,pos,len,this.pos);
		} catch( _g ) {
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(_g1.code == "EOF") {
				throw haxe_Exception.thrown(new haxe_io_Eof());
			} else {
				throw haxe_Exception.thrown(haxe_io_Error.Custom(_g1));
			}
		}
		if(bytesRead == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.pos += bytesRead;
		return bytesRead;
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,seek: function(p,pos) {
		switch(pos._hx_index) {
		case 0:
			this.pos = p;
			break;
		case 1:
			this.pos += p;
			break;
		case 2:
			this.pos = js_node_Fs.fstatSync(this.fd).size + p;
			break;
		}
	}
	,tell: function() {
		return this.pos;
	}
	,eof: function() {
		return this.pos >= js_node_Fs.fstatSync(this.fd).size;
	}
	,__class__: sys_io_FileInput
});
var sys_io_FileOutput = function(fd) {
	this.fd = fd;
	this.pos = 0;
};
sys_io_FileOutput.__name__ = true;
sys_io_FileOutput.__super__ = haxe_io_Output;
sys_io_FileOutput.prototype = $extend(haxe_io_Output.prototype,{
	writeByte: function(b) {
		var buf = js_node_buffer_Buffer.alloc(1);
		buf[0] = b;
		js_node_Fs.writeSync(this.fd,buf,0,1,this.pos);
		this.pos++;
	}
	,writeBytes: function(s,pos,len) {
		var data = s.b;
		var buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,s.length);
		var wrote = js_node_Fs.writeSync(this.fd,buf,pos,len,this.pos);
		this.pos += wrote;
		return wrote;
	}
	,close: function() {
		js_node_Fs.closeSync(this.fd);
	}
	,seek: function(p,pos) {
		switch(pos._hx_index) {
		case 0:
			this.pos = p;
			break;
		case 1:
			this.pos += p;
			break;
		case 2:
			this.pos = js_node_Fs.fstatSync(this.fd).size + p;
			break;
		}
	}
	,tell: function() {
		return this.pos;
	}
	,__class__: sys_io_FileOutput
});
var sys_io_FileSeek = $hxEnums["sys.io.FileSeek"] = { __ename__:true,__constructs__:null
	,SeekBegin: {_hx_name:"SeekBegin",_hx_index:0,__enum__:"sys.io.FileSeek",toString:$estr}
	,SeekCur: {_hx_name:"SeekCur",_hx_index:1,__enum__:"sys.io.FileSeek",toString:$estr}
	,SeekEnd: {_hx_name:"SeekEnd",_hx_index:2,__enum__:"sys.io.FileSeek",toString:$estr}
};
sys_io_FileSeek.__constructs__ = [sys_io_FileSeek.SeekBegin,sys_io_FileSeek.SeekCur,sys_io_FileSeek.SeekEnd];
var tink_chunk_ChunkBase = function() { };
tink_chunk_ChunkBase.__name__ = true;
tink_chunk_ChunkBase.prototype = {
	getCursor: function() {
		if(this.flattened == null) {
			this.flatten(this.flattened = []);
		}
		return tink_chunk_ChunkCursor.create(this.flattened.slice());
	}
	,flatten: function(into) {
	}
	,__class__: tink_chunk_ChunkBase
};
var tink_chunk_ChunkObject = function() { };
tink_chunk_ChunkObject.__name__ = true;
tink_chunk_ChunkObject.__isInterface__ = true;
tink_chunk_ChunkObject.prototype = {
	__class__: tink_chunk_ChunkObject
};
var tink__$Chunk_EmptyChunk = function() {
};
tink__$Chunk_EmptyChunk.__name__ = true;
tink__$Chunk_EmptyChunk.__interfaces__ = [tink_chunk_ChunkObject];
tink__$Chunk_EmptyChunk.__super__ = tink_chunk_ChunkBase;
tink__$Chunk_EmptyChunk.prototype = $extend(tink_chunk_ChunkBase.prototype,{
	getByte: function(i) {
		return 0;
	}
	,getLength: function() {
		return 0;
	}
	,slice: function(from,to) {
		return this;
	}
	,blitTo: function(target,offset) {
	}
	,toString: function() {
		return "";
	}
	,toBytes: function() {
		return tink__$Chunk_EmptyChunk.EMPTY;
	}
	,__class__: tink__$Chunk_EmptyChunk
});
var tink_Chunk = {};
tink_Chunk.get_length = function(this1) {
	return this1.getLength();
};
tink_Chunk.getByte = function(this1,i) {
	return this1.getByte(i);
};
tink_Chunk.concat = function(this1,that) {
	return tink_chunk_CompoundChunk.cons(this1,that);
};
tink_Chunk.cursor = function(this1) {
	return this1.getCursor();
};
tink_Chunk.iterator = function(this1) {
	return new tink_chunk_ChunkIterator(this1.getCursor());
};
tink_Chunk.sub = function(this1,pos,len) {
	return this1.slice(pos,pos + len);
};
tink_Chunk.slice = function(this1,from,to) {
	return this1.slice(from,to);
};
tink_Chunk.blitTo = function(this1,target,offset) {
	this1.blitTo(target,offset);
};
tink_Chunk.toHex = function(this1) {
	return this1.toBytes().toHex();
};
tink_Chunk.toString = function(this1) {
	return this1.toString();
};
tink_Chunk.toBytes = function(this1) {
	return this1.toBytes();
};
tink_Chunk.toBuffer = function(this1) {
	var b = this1.toBytes();
	var data = b.b;
	return js_node_buffer_Buffer.from(data.buffer,data.byteOffset,b.length);
};
tink_Chunk.join = function(chunks) {
	if(chunks == null) {
		return tink_Chunk.EMPTY;
	} else {
		switch(chunks.length) {
		case 0:
			return tink_Chunk.EMPTY;
		case 1:
			return chunks[0];
		default:
			var ret = tink_Chunk.concat(chunks[0],chunks[1]);
			var _g = 2;
			var _g1 = chunks.length;
			while(_g < _g1) {
				var i = _g++;
				ret = tink_Chunk.concat(ret,chunks[i]);
			}
			return ret;
		}
	}
};
tink_Chunk.ofBytes = function(b) {
	return tink_chunk_ByteChunk.of(b);
};
tink_Chunk.ofString = function(s) {
	return tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(s));
};
tink_Chunk.ofBuffer = function(b) {
	return new tink_chunk_nodejs_BufferChunk(b);
};
tink_Chunk.ofByte = function(byte) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(1));
	bytes.b[0] = byte;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_Chunk.ofHex = function(s) {
	var length = s.length >> 1;
	var bytes = new haxe_io_Bytes(new ArrayBuffer(length));
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		bytes.b[i] = Std.parseInt("0x" + HxOverrides.substr(s,i * 2,2));
	}
	return tink_chunk_ByteChunk.of(bytes);
};
tink_Chunk.parseHex = function(v) {
	return Std.parseInt("0x" + v);
};
tink_Chunk.catChunk = function(a,b) {
	return tink_Chunk.concat(a,b);
};
tink_Chunk.rcatString = function(a,b) {
	return tink_Chunk.concat(a,tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(b)));
};
tink_Chunk.lcatString = function(a,b) {
	return tink_Chunk.concat(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(a)),b);
};
tink_Chunk.lcatBytes = function(a,b) {
	return tink_Chunk.concat(tink_chunk_ByteChunk.of(a),b);
};
tink_Chunk.rcatBytes = function(a,b) {
	return tink_Chunk.concat(a,tink_chunk_ByteChunk.of(b));
};
tink_Chunk.eqChunk = function(a,b) {
	return a.toString() == b.toString();
};
tink_Chunk.reqString = function(a,b) {
	return a.toString() == b.toString();
};
tink_Chunk.leqString = function(a,b) {
	return a.toString() == b.toString();
};
tink_Chunk.leqBytes = function(a,b) {
	return a.toString() == b.toString();
};
tink_Chunk.reqBytes = function(a,b) {
	return a.toString() == b.toString();
};
var tink_Stringly = {};
tink_Stringly.isNumber = function(s,allowFloat) {
	if(s.length == 0) {
		return false;
	}
	var pos = 0;
	var max = s.length;
	if(0 < max && s.charCodeAt(0) == 45) {
		pos = 1;
	}
	if(!allowFloat) {
		if(pos < max && s.charCodeAt(pos) == 48 && pos++ > -1) {
			if(pos < max && s.charCodeAt(pos) == 120) {
				++pos;
			}
		}
	}
	while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
	if(allowFloat && pos < max) {
		if(pos < max && s.charCodeAt(pos) == 46 && pos++ > -1) {
			while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
		}
		if(pos < max && s.charCodeAt(pos) == 101 && pos++ > -1 || pos < max && s.charCodeAt(pos) == 69 && pos++ > -1) {
			if(!(pos < max && s.charCodeAt(pos) == 43 && pos++ > -1)) {
				if(pos < max && s.charCodeAt(pos) == 45) {
					++pos;
				}
			}
			while(pos < max && (s.charCodeAt(pos) ^ 48) < 10) ++pos;
		}
	}
	return pos == max;
};
tink_Stringly.toBool = function(this1) {
	if(this1 != null) {
		switch(StringTools.trim(this1).toLowerCase()) {
		case "0":case "false":case "no":
			return false;
		default:
			return true;
		}
	} else {
		return false;
	}
};
tink_Stringly.isFloat = function(this1) {
	return tink_Stringly.isNumber(StringTools.trim(this1),true);
};
tink_Stringly.parseFloat = function(this1) {
	var _g = StringTools.trim(this1);
	if(tink_Stringly.isNumber(_g,true)) {
		return tink_core_Outcome.Success(parseFloat(_g));
	} else {
		return tink_core_Outcome.Failure(new tink_core_TypedError(422,"" + _g + " (encoded as " + this1 + ") is not a valid float",{ fileName : "tink/Stringly.hx", lineNumber : 65, className : "tink._Stringly.Stringly_Impl_", methodName : "parseFloat"}));
	}
};
tink_Stringly.toFloat = function(this1) {
	return tink_core_OutcomeTools.sure(tink_Stringly.parseFloat(this1));
};
tink_Stringly.isInt = function(this1) {
	return tink_Stringly.isNumber(StringTools.trim(this1),false);
};
tink_Stringly.parseInt = function(this1) {
	var _g = StringTools.trim(this1);
	if(tink_Stringly.isNumber(_g,false)) {
		return tink_core_Outcome.Success(Std.parseInt(_g));
	} else {
		return tink_core_Outcome.Failure(new tink_core_TypedError(422,"" + _g + " (encoded as " + this1 + ") is not a valid integer",{ fileName : "tink/Stringly.hx", lineNumber : 80, className : "tink._Stringly.Stringly_Impl_", methodName : "parseInt"}));
	}
};
tink_Stringly.toInt = function(this1) {
	return tink_core_OutcomeTools.sure(tink_Stringly.parseInt(this1));
};
tink_Stringly.parseDate = function(this1) {
	var _g = tink_Stringly.parseFloat(this1);
	switch(_g._hx_index) {
	case 0:
		return tink_core_Outcome.Success(new Date(_g.data));
	case 1:
		if(!tink_Stringly.SUPPORTED_DATE_REGEX.match(this1)) {
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"" + this1 + " is not a valid date",{ fileName : "tink/Stringly.hx", lineNumber : 101, className : "tink._Stringly.Stringly_Impl_", methodName : "parseDate"}));
		}
		var date = new Date(this1);
		var f = date.getTime();
		if(isNaN(f)) {
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"" + this1 + " is not a valid date",{ fileName : "tink/Stringly.hx", lineNumber : 104, className : "tink._Stringly.Stringly_Impl_", methodName : "parseDate"}));
		} else {
			return tink_core_Outcome.Success(date);
		}
		break;
	}
};
tink_Stringly.toDate = function(this1) {
	return tink_core_OutcomeTools.sure(tink_Stringly.parseDate(this1));
};
tink_Stringly.parse = function(this1,f) {
	var _g = f;
	var a1 = this1;
	return tink_core_TypedError.catchExceptions(function() {
		return _g(a1);
	},null,{ fileName : "tink/Stringly.hx", lineNumber : 164, className : "tink._Stringly.Stringly_Impl_", methodName : "parse"});
};
tink_Stringly.ofBool = function(b) {
	if(b) {
		return "true";
	} else {
		return "false";
	}
};
tink_Stringly.ofInt = function(i) {
	if(i == null) {
		return "null";
	} else {
		return "" + i;
	}
};
tink_Stringly.ofFloat = function(f) {
	if(f == null) {
		return "null";
	} else {
		return "" + f;
	}
};
tink_Stringly.ofDate = function(d) {
	var f = d.getTime();
	if(f == null) {
		return "null";
	} else {
		return "" + f;
	}
};
var tink_Url = {};
tink_Url.get_host = function(this1) {
	return this1.hosts[0];
};
tink_Url.get_hosts = function(this1) {
	return this1.hosts;
};
tink_Url.get_pathWithQuery = function(this1) {
	if(this1.query == null) {
		return this1.path;
	} else {
		return (this1.path == null ? "null" : this1.path) + "?" + (this1.query == null ? "null" : this1.query);
	}
};
tink_Url._new = function(parts) {
	return parts;
};
tink_Url.resolve = function(this1,that) {
	if(that.scheme != null) {
		return that;
	} else if(that.hosts[0] != null) {
		if(that.scheme != null) {
			return that;
		} else {
			var copy = Reflect.copy(that);
			copy.scheme = this1.scheme;
			return copy;
		}
	} else {
		var parts = { path : tink_url_Path.join(this1.path,that.path), payload : "", scheme : this1.scheme, query : that.query, auth : this1.auth, hosts : this1.hosts, hash : that.hash};
		tink_Url.makePayload(parts);
		return parts;
	}
};
tink_Url.makePayload = function(parts) {
	var payload = "";
	var _g = parts.auth;
	var _g1 = parts.hosts;
	if(_g == null) {
		if(_g1.length != 0) {
			payload = "" + ("//" + _g1.join(","));
		}
	} else if(_g1.length == 0) {
		payload = "" + ("//" + (_g == null ? "null" : _g == null ? "" : "" + _g + "@"));
	} else {
		payload = "" + ("//" + (_g == null ? "null" : _g == null ? "" : "" + _g + "@") + _g1.join(","));
	}
	payload += parts.path == null ? "null" : parts.path;
	var _g = parts.query;
	if(_g != null) {
		payload += "?" + (_g == null ? "null" : _g);
	}
	var _g = parts.hash;
	if(_g != null) {
		payload += "#" + _g;
	}
	parts.payload = payload.toString();
};
tink_Url.toString = function(this1) {
	if(this1.scheme == null) {
		return this1.payload;
	} else {
		return "" + this1.scheme + ":" + this1.payload;
	}
};
tink_Url.fromString = function(s) {
	return tink_Url.parse(s);
};
tink_Url.noop = function(_) {
};
tink_Url.parse = function(s,onError) {
	while(true) {
		if(s == null) {
			s = "";
			onError = null;
			continue;
		}
		if(onError == null) {
			onError = tink_Url.noop;
		}
		s = StringTools.trim(s);
		if(StringTools.startsWith(s,"data:")) {
			return { scheme : "data", payload : HxOverrides.substr(s,5,null), hosts : []};
		}
		var FORMAT = new EReg("^(([a-zA-Z][a-zA-Z0-9\\-+.]*):)?((//(([^@/]+)@)?([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?)$","");
		var HOST = new EReg("^(\\[(.*)\\]|([^:]*))(:(.*))?$","");
		FORMAT.match(s);
		var hosts;
		var _g = FORMAT.matched(7);
		if(_g == null) {
			hosts = [];
		} else {
			var _g1 = [];
			var _g2 = 0;
			var _g3 = _g.split(",");
			while(_g2 < _g3.length) {
				var host = _g3[_g2];
				++_g2;
				HOST.match(host);
				var host1;
				var _g4 = HOST.matched(3);
				var _g5 = HOST.matched(2);
				if(_g5 == null) {
					host1 = _g4;
				} else if(_g4 == null) {
					host1 = "[" + _g5 + "]";
				} else {
					onError("invalid host " + host);
					host1 = null;
				}
				var port;
				var _g6 = HOST.matched(5);
				if(_g6 == null) {
					port = null;
				} else {
					var _g7 = Std.parseInt(_g6);
					if(_g7 == null) {
						onError("invalid port " + _g6);
						port = null;
					} else {
						port = _g7;
					}
				}
				_g1.push(tink_url_Host._new(host1,port));
			}
			hosts = _g1;
		}
		var path = FORMAT.matched(8);
		if(hosts.length > 0 && path.charAt(0) != "/") {
			path = "/" + path;
		}
		return { scheme : FORMAT.matched(2), payload : FORMAT.matched(3), hosts : hosts, auth : FORMAT.matched(6), path : tink_url_Path.ofString(path), query : FORMAT.matched(10), hash : FORMAT.matched(12)};
	}
};
tink_Url.make = function(parts) {
	var parts1 = { payload : "", path : parts.path, query : parts.query, hosts : parts.hosts, auth : parts.auth, scheme : parts.scheme, hash : parts.hash};
	tink_Url.makePayload(parts1);
	return parts1;
};
var tink_SingleHostUrl = {};
tink_SingleHostUrl._new = function(v) {
	return v;
};
tink_SingleHostUrl.ofUrl = function(u) {
	var v;
	switch(u.hosts.length) {
	case 0:
		v = u;
		break;
	case 1:
		v = u;
		break;
	default:
		v = tink_Url.make({ path : u.path, query : u.query, hosts : [u.hosts[0]], auth : u.auth, scheme : u.scheme, hash : u.hash});
	}
	var this1 = v;
	return this1;
};
tink_SingleHostUrl.ofString = function(s) {
	return tink_SingleHostUrl.ofUrl(tink_Url.fromString(s));
};
var tink_chunk_ByteChunk = function(data,from,to) {
	this.data = data;
	this.from = from;
	this.to = to;
};
tink_chunk_ByteChunk.__name__ = true;
tink_chunk_ByteChunk.__interfaces__ = [tink_chunk_ChunkObject];
tink_chunk_ByteChunk.of = function(b) {
	if(b.length == 0) {
		return tink_Chunk.EMPTY;
	}
	var ret = new tink_chunk_ByteChunk(b.b.bufferValue,0,b.length);
	ret.wrapped = b;
	return ret;
};
tink_chunk_ByteChunk.__super__ = tink_chunk_ChunkBase;
tink_chunk_ByteChunk.prototype = $extend(tink_chunk_ChunkBase.prototype,{
	get_wrapped: function() {
		if(this.wrapped == null) {
			this.wrapped = haxe_io_Bytes.ofData(this.data);
		}
		return this.wrapped;
	}
	,getByte: function(index) {
		return this.data.bytes[this.from + index];
	}
	,flatten: function(into) {
		into.push(this);
	}
	,getLength: function() {
		return this.to - this.from;
	}
	,getSlice: function(from,to) {
		if(to > this.to - this.from) {
			to = this.to - this.from;
		}
		if(from < 0) {
			from = 0;
		}
		if(to <= from) {
			return null;
		} else if(to == this.to - this.from && from == 0) {
			return this;
		} else {
			return new tink_chunk_ByteChunk(this.data,this.from + from,to + this.from);
		}
	}
	,slice: function(from,to) {
		var _g = this.getSlice(from,to);
		if(_g == null) {
			return tink_Chunk.EMPTY;
		} else {
			return _g;
		}
	}
	,blitTo: function(target,offset) {
		if(this.wrapped == null) {
			this.wrapped = haxe_io_Bytes.ofData(this.data);
		}
		target.blit(offset,this.wrapped,this.from,this.to - this.from);
	}
	,toBytes: function() {
		if(this.wrapped == null) {
			this.wrapped = haxe_io_Bytes.ofData(this.data);
		}
		return this.wrapped.sub(this.from,this.to - this.from);
	}
	,toString: function() {
		if(this.wrapped == null) {
			this.wrapped = haxe_io_Bytes.ofData(this.data);
		}
		return this.wrapped.getString(this.from,this.to - this.from);
	}
	,__class__: tink_chunk_ByteChunk
});
var tink_chunk_ChunkCursor = function() {
	this.currentByte = -1;
	this.currentPos = 0;
	this.length = 0;
	this.curLength = 0;
	this.curOffset = 0;
	this.curPartIndex = 0;
};
tink_chunk_ChunkCursor.__name__ = true;
tink_chunk_ChunkCursor.create = function(parts) {
	var ret = new tink_chunk_ChunkCursor();
	ret.parts = parts;
	ret.reset();
	return ret;
};
tink_chunk_ChunkCursor.prototype = {
	clone: function() {
		var ret = new tink_chunk_ChunkCursor();
		ret.parts = this.parts.slice();
		ret.curPart = this.curPart;
		ret.curPartIndex = this.curPartIndex;
		ret.curOffset = this.curOffset;
		ret.curLength = this.curLength;
		ret.length = this.length;
		ret.currentPos = this.currentPos;
		ret.currentByte = this.currentByte;
		return ret;
	}
	,reset: function() {
		this.length = 0;
		this.currentPos = 0;
		this.currentByte = -1;
		this.curOffset = 0;
		var _g = 0;
		var _g1 = this.parts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			this.length += p.to - p.from;
		}
		this.curPartIndex = 0;
		this.curPart = this.parts[0];
		if(this.curPart != null) {
			var _this = this.curPart;
			this.curLength = _this.to - _this.from;
			var _this = this.curPart;
			this.currentByte = _this.data.bytes[_this.from];
		}
	}
	,flush: function() {
		var ret = this.left();
		this.shift();
		return ret;
	}
	,prune: function() {
		this.shift();
	}
	,add: function(chunk) {
		chunk.flatten(this.parts);
		this.reset();
	}
	,shift: function(chunk) {
		this.parts.splice(0,this.curPartIndex);
		var _g = this.parts[0];
		if(_g != null) {
			var _g1 = _g.getSlice(this.curOffset,this.curLength);
			if(_g1 == null) {
				this.parts.shift();
			} else {
				this.parts[0] = _g1;
			}
		}
		if(chunk != null) {
			this.add(chunk);
		} else {
			this.reset();
		}
	}
	,clear: function() {
		this.parts = [];
		this.reset();
	}
	,left: function() {
		if(this.curPart == null) {
			return tink_Chunk.EMPTY;
		}
		var _g = [];
		var _g1 = 0;
		var _g2 = this.curPartIndex;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push(this.parts[i]);
		}
		_g.push(this.curPart.slice(0,this.curOffset));
		return tink_Chunk.join(_g);
	}
	,right: function() {
		if(this.curPart == null) {
			return tink_Chunk.EMPTY;
		}
		var _g = [];
		var _g1 = this.curPartIndex;
		var _g2 = this.parts.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push(this.parts[i]);
		}
		if(_g.length > 0) {
			_g[0] = this.curPart.slice(this.curOffset,this.curLength);
		}
		return tink_Chunk.join(_g);
	}
	,seek: function(seekable,options) {
		var _gthis = this;
		if(this.curPart == null || seekable == null || seekable.length == 0) {
			return haxe_ds_Option.None;
		}
		var max = seekable.length - 1;
		var first = seekable[0];
		var candidates = [];
		var count = 0;
		var copy = this.clone();
		copy.shift();
		var part = function(b,offset) {
			var data = b.data;
			var _g = b.from + offset;
			var _g1 = b.to;
			while(_g < _g1) {
				var i = _g++;
				var byte = data.bytes[i];
				if(candidates.length > 0) {
					var c = 0;
					while(c < count) {
						var pos = candidates[c];
						if(seekable[pos] == byte) {
							if(pos == max) {
								copy.moveTo(copy.currentPos + (i - (b.from + offset) - seekable.length + 1));
								var before = copy.left();
								var delta = before.getLength() + seekable.length;
								_gthis.moveTo(_gthis.currentPos + delta);
								if(options == null) {
									_gthis.shift();
								} else {
									var _g2 = options.withoutPruning;
									if(_g2 == null) {
										_gthis.shift();
									} else if(_g2 == false) {
										_gthis.shift();
									}
								}
								return haxe_ds_Option.Some(before);
							} else {
								candidates[c++] = pos + 1;
							}
						} else {
							count -= 1;
							var last = candidates.pop();
							if(count > c) {
								candidates[c] = last;
							}
						}
					}
				}
				if(byte == first) {
					count = candidates.push(1);
				}
			}
			copy.moveTo(copy.currentPos + (b.to - (b.from + offset)));
			return haxe_ds_Option.None;
		};
		var _g = part(this.curPart,this.curOffset);
		if(_g._hx_index == 1) {
			var _g1 = this.curPartIndex + 1;
			var _g2 = this.parts.length;
			while(_g1 < _g2) {
				var i = _g1++;
				var _g3 = part(this.parts[i],0);
				switch(_g3._hx_index) {
				case 0:
					return haxe_ds_Option.Some(_g3.v);
				case 1:
					break;
				}
			}
			return haxe_ds_Option.None;
		} else {
			return _g;
		}
	}
	,sweep: function(len) {
		var data = this.right().slice(0,len);
		this.moveTo(this.currentPos + len);
		return data;
	}
	,sweepTo: function(pos) {
		return this.sweep(pos - this.currentPos);
	}
	,moveBy: function(delta) {
		return this.moveTo(this.currentPos + delta);
	}
	,moveTo: function(position) {
		if(this.length == 0) {
			return 0;
		}
		if(position > this.length) {
			position = this.length - 1;
		}
		if(position < 0) {
			position = 0;
		}
		this.currentPos = position;
		if(position == this.length) {
			this.ffwd();
		} else {
			var _g = 0;
			var _g1 = this.parts.length;
			while(_g < _g1) {
				var i = _g++;
				var c = this.parts[i];
				var _g2 = c.to - c.from;
				if(_g2 > position) {
					this.curPart = c;
					this.curPartIndex = i;
					this.curOffset = position;
					this.curLength = c.to - c.from;
					this.currentByte = c.data.bytes[c.from + position];
					break;
				} else {
					position -= _g2;
				}
			}
		}
		return this.currentPos;
	}
	,ffwd: function() {
		this.currentByte = -1;
		this.curLength = 0;
		this.curOffset = 0;
		this.curPart = null;
		this.curPartIndex = this.parts.length;
	}
	,next: function() {
		if(this.currentPos == this.length) {
			return false;
		}
		this.currentPos++;
		if(this.currentPos == this.length) {
			this.ffwd();
			return false;
		}
		if(this.curOffset == this.curLength - 1) {
			this.curOffset = 0;
			this.curPart = this.parts[++this.curPartIndex];
			var _this = this.curPart;
			this.curLength = _this.to - _this.from;
			var _this = this.curPart;
			this.currentByte = _this.data.bytes[_this.from];
		} else {
			var _this = this.curPart;
			this.currentByte = _this.data.bytes[_this.from + ++this.curOffset];
		}
		return true;
	}
	,__class__: tink_chunk_ChunkCursor
};
var tink_chunk_ChunkIterator = function(target) {
	this.target = target;
	this._hasNext = target.length > target.currentPos;
};
tink_chunk_ChunkIterator.__name__ = true;
tink_chunk_ChunkIterator.prototype = {
	hasNext: function() {
		return this._hasNext;
	}
	,next: function() {
		var ret = this.target.currentByte;
		this._hasNext = this.target.next();
		return ret;
	}
	,__class__: tink_chunk_ChunkIterator
};
var tink_chunk_ChunkTools = function() { };
tink_chunk_ChunkTools.__name__ = true;
tink_chunk_ChunkTools.readUInt8 = function(chunk,offset) {
	if(chunk.getLength() < offset + 1) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + 1 + ")");
	}
	var val = chunk.getByte(offset);
	return val;
};
tink_chunk_ChunkTools.readInt8 = function(chunk,offset) {
	var val = tink_chunk_ChunkTools.readUInt8(chunk,offset);
	if(val > 127) {
		return val - 256;
	} else {
		return val;
	}
};
tink_chunk_ChunkTools.readUInt16LE = function(chunk,offset) {
	if(chunk.getLength() < offset + 2) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + 2 + ")");
	}
	var first = chunk.getByte(offset);
	var last = chunk.getByte(offset + 1);
	return first + (last << 8);
};
tink_chunk_ChunkTools.readInt16LE = function(chunk,offset) {
	var val = tink_chunk_ChunkTools.readUInt16LE(chunk,offset);
	if(val > 32767) {
		return val - 65536;
	} else {
		return val;
	}
};
tink_chunk_ChunkTools.readUInt24LE = function(chunk,offset) {
	if(chunk.getLength() < offset + 3) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + 3 + ")");
	}
	var first = chunk.getByte(offset);
	var mid = chunk.getByte(offset + 1);
	var last = chunk.getByte(offset + 2);
	return first + (mid << 8) + (last << 16);
};
tink_chunk_ChunkTools.readInt24LE = function(chunk,offset) {
	var val = tink_chunk_ChunkTools.readUInt24LE(chunk,offset);
	if(val > 8388607) {
		return val - 16777216;
	} else {
		return val;
	}
};
tink_chunk_ChunkTools.readInt32LE = function(chunk,offset) {
	if(chunk.getLength() < offset + 4) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + 4 + ")");
	}
	var val = chunk.getByte(offset) + (chunk.getByte(offset + 1) << 8) + (chunk.getByte(offset + 2) << 16) + (chunk.getByte(offset + 3) << 24);
	return val;
};
tink_chunk_ChunkTools.readDoubleLE = function(chunk,offset) {
	var l = tink_chunk_ChunkTools.readInt32LE(chunk,0);
	var h = tink_chunk_ChunkTools.readInt32LE(chunk,4);
	return haxe_io_FPHelper.i64ToDouble(l,h);
};
tink_chunk_ChunkTools.readNullTerminatedString = function(chunk,offset) {
	try {
		return new haxe_io_BytesInput(chunk.toBytes(),offset).readUntil(0);
	} catch( _g ) {
		return chunk.toString();
	}
};
tink_chunk_ChunkTools.writeUInt8 = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(1));
	bytes.b[0] = v & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeInt8 = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(1));
	v &= 255;
	if(v < 0) {
		v += 256;
	}
	bytes.b[0] = v;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeUInt16LE = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(2));
	bytes.b[0] = v & 255;
	bytes.b[1] = v >>> 8 & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeInt16LE = function(v) {
	return tink_chunk_ChunkTools.writeUInt16LE(v);
};
tink_chunk_ChunkTools.writeUInt24LE = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(3));
	bytes.b[0] = v & 255;
	bytes.b[1] = v >>> 8 & 255;
	bytes.b[2] = v >>> 16 & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeInt24LE = function(v) {
	return tink_chunk_ChunkTools.writeUInt24LE(v);
};
tink_chunk_ChunkTools.writeInt32LE = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(4));
	bytes.b[0] = v & 255;
	bytes.b[1] = v >>> 8 & 255;
	bytes.b[2] = v >>> 16 & 255;
	bytes.b[3] = v >>> 24 & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.writeDoubleLE = function(v) {
	var bytes = new haxe_io_Bytes(new ArrayBuffer(8));
	var i64 = haxe_io_FPHelper.doubleToI64(v);
	var l = i64.low;
	var h = i64.high;
	bytes.b[0] = l & 255;
	bytes.b[1] = l >>> 8 & 255;
	bytes.b[2] = l >>> 16 & 255;
	bytes.b[3] = l >>> 24 & 255;
	bytes.b[4] = h & 255;
	bytes.b[5] = h >>> 8 & 255;
	bytes.b[6] = h >>> 16 & 255;
	bytes.b[7] = h >>> 24 & 255;
	return tink_chunk_ByteChunk.of(bytes);
};
tink_chunk_ChunkTools.lpad = function(chunk,pad,length) {
	if(pad.getLength() != 0) {
		while(chunk.getLength() < length) chunk = tink_Chunk.concat(pad,chunk);
	}
	return chunk;
};
tink_chunk_ChunkTools.rpad = function(chunk,pad,length) {
	if(pad.getLength() != 0) {
		while(chunk.getLength() < length) chunk = tink_Chunk.concat(chunk,pad);
	}
	return chunk;
};
tink_chunk_ChunkTools.check = function(chunk,offset,length) {
	if(chunk.getLength() < offset + length) {
		throw haxe_Exception.thrown("Out of range (chunk length = " + chunk.getLength() + ", read offset = " + offset + ", read length = " + length + ")");
	}
};
var tink_chunk_CompoundChunk = function() {
};
tink_chunk_CompoundChunk.__name__ = true;
tink_chunk_CompoundChunk.__interfaces__ = [tink_chunk_ChunkObject];
tink_chunk_CompoundChunk.asCompound = function(c) {
	if(((c) instanceof tink_chunk_CompoundChunk)) {
		return c;
	} else {
		return null;
	}
};
tink_chunk_CompoundChunk.cons = function(a,b) {
	var _g = a.getLength();
	var _g1 = b.getLength();
	if(_g == 0) {
		if(_g1 == 0) {
			return tink_Chunk.EMPTY;
		} else {
			return b;
		}
	} else if(_g1 == 0) {
		return a;
	} else {
		var _g = tink_chunk_CompoundChunk.asCompound(a);
		var _g1 = tink_chunk_CompoundChunk.asCompound(b);
		if(_g == null) {
			if(_g1 == null) {
				return tink_chunk_CompoundChunk.create([a,b],2);
			} else if(_g1.depth < 100) {
				return tink_chunk_CompoundChunk.create([a,b],_g1.depth + 1);
			} else {
				var flat = [];
				_g1.flatten(flat);
				b.flatten(flat);
				return tink_chunk_CompoundChunk.create(flat,2);
			}
		} else if(_g1 == null) {
			if(_g.depth < 100) {
				return tink_chunk_CompoundChunk.create([a,b],_g.depth + 1);
			} else {
				var flat = [];
				_g.flatten(flat);
				b.flatten(flat);
				return tink_chunk_CompoundChunk.create(flat,2);
			}
		} else {
			var depth = _g.depth > _g1.depth ? _g.depth : _g1.depth;
			return tink_chunk_CompoundChunk.create(_g.chunks.concat(_g1.chunks),depth);
		}
	}
};
tink_chunk_CompoundChunk.create = function(chunks,depth) {
	var ret = new tink_chunk_CompoundChunk();
	var offsets = [0];
	var length = 0;
	var _g = 0;
	while(_g < chunks.length) {
		var c = chunks[_g];
		++_g;
		offsets.push(length += c.getLength());
	}
	ret.chunks = chunks;
	ret.offsets = offsets;
	ret.length = length;
	ret.depth = depth;
	return ret;
};
tink_chunk_CompoundChunk.__super__ = tink_chunk_ChunkBase;
tink_chunk_CompoundChunk.prototype = $extend(tink_chunk_ChunkBase.prototype,{
	getByte: function(i) {
		var index = this.findChunk(i);
		return this.chunks[index].getByte(i - this.offsets[index]);
	}
	,getLength: function() {
		return this.length;
	}
	,findChunk: function(target) {
		var min = 0;
		var max = this.offsets.length - 1;
		while(min + 1 < max) {
			var guess = min + max >> 1;
			if(this.offsets[guess] > target) {
				max = guess;
			} else {
				min = guess;
			}
		}
		return min;
	}
	,flatten: function(into) {
		var _g = 0;
		var _g1 = this.chunks;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.flatten(into);
		}
	}
	,slice: function(from,to) {
		var idxFrom = this.findChunk(from);
		var idxTo = this.findChunk(to);
		if(idxFrom == idxTo) {
			var offset = this.offsets[idxFrom];
			return this.chunks[idxFrom].slice(from - offset,to - offset);
		}
		var ret = this.chunks.slice(idxFrom,idxTo + 1);
		var c = ret[0];
		ret[0] = c.slice(from - this.offsets[idxFrom],this.offsets[idxFrom + 1]);
		var c = ret[ret.length - 1];
		ret[ret.length - 1] = c.slice(0,to - this.offsets[idxTo]);
		return tink_chunk_CompoundChunk.create(ret,this.depth);
	}
	,blitTo: function(target,offset) {
		var _g = 0;
		var _g1 = this.chunks.length;
		while(_g < _g1) {
			var i = _g++;
			this.chunks[i].blitTo(target,offset + this.offsets[i]);
		}
	}
	,toString: function() {
		return this.toBytes().toString();
	}
	,toBytes: function() {
		var ret = new haxe_io_Bytes(new ArrayBuffer(this.length));
		this.blitTo(ret,0);
		return ret;
	}
	,__class__: tink_chunk_CompoundChunk
});
var tink_chunk_Seekable = {};
tink_chunk_Seekable._new = function(a) {
	return a;
};
tink_chunk_Seekable.get_length = function(this1) {
	return this1.length;
};
tink_chunk_Seekable.get = function(this1,index) {
	return this1[index];
};
tink_chunk_Seekable.ofChunk = function(c) {
	return tink_chunk_Seekable.ofBytes(c.toBytes());
};
tink_chunk_Seekable.ofBytes = function(b) {
	var _g = [];
	var _g1 = 0;
	var _g2 = b.length;
	while(_g1 < _g2) {
		var i = _g1++;
		_g.push(b.b[i]);
	}
	return _g;
};
tink_chunk_Seekable.ofString = function(s) {
	return tink_chunk_Seekable.ofBytes(haxe_io_Bytes.ofString(s));
};
var tink_chunk_nodejs_BufferChunk = function(buffer) {
	this.buffer = buffer;
};
tink_chunk_nodejs_BufferChunk.__name__ = true;
tink_chunk_nodejs_BufferChunk.__interfaces__ = [tink_chunk_ChunkObject];
tink_chunk_nodejs_BufferChunk.prototype = {
	getByte: function(i) {
		return this.buffer[i];
	}
	,getCursor: function() {
		return tink_chunk_ByteChunk.of(this.toBytes()).getCursor();
	}
	,flatten: function(into) {
		tink_chunk_ByteChunk.of(this.toBytes()).flatten(into);
	}
	,getLength: function() {
		return this.buffer.length;
	}
	,slice: function(from,to) {
		if(to > this.getLength()) {
			to = this.getLength();
		}
		if(from < 0) {
			from = 0;
		}
		if(to <= from) {
			return tink_Chunk.EMPTY;
		} else if(to == this.getLength() && from == 0) {
			return this;
		} else {
			return new tink_chunk_nodejs_BufferChunk(this.buffer.slice(from,to));
		}
	}
	,toString: function() {
		return this.buffer.toString();
	}
	,toBytes: function() {
		var copy = js_node_buffer_Buffer.allocUnsafe(this.buffer.length);
		this.buffer.copy(copy);
		return js_node_buffer__$Buffer_Helper.bytesOfBuffer(copy);
	}
	,blitTo: function(target,offset) {
		var data = target.b;
		this.buffer.copy(js_node_buffer_Buffer.from(data.buffer,data.byteOffset,target.length),offset);
	}
	,__class__: tink_chunk_nodejs_BufferChunk
};
var tink_core_Annex = function(target) {
	this.target = target;
	this.registry = new haxe_ds_ObjectMap();
};
tink_core_Annex.__name__ = true;
tink_core_Annex.prototype = {
	__class__: tink_core_Annex
};
var tink_core_Callback = {};
tink_core_Callback._new = function(f) {
	return f;
};
tink_core_Callback.toFunction = function(this1) {
	return this1;
};
tink_core_Callback.invoke = function(this1,data) {
	if(tink_core_Callback.depth < 500) {
		tink_core_Callback.depth++;
		this1(data);
		tink_core_Callback.depth--;
	} else {
		tink_core_Callback.defer(function() {
			this1(data);
		});
	}
};
tink_core_Callback.fromNiladic = function(f) {
	return f;
};
tink_core_Callback.fromMany = function(callbacks) {
	return function(v) {
		var _g = 0;
		while(_g < callbacks.length) {
			var callback = callbacks[_g];
			++_g;
			tink_core_Callback.invoke(callback,v);
		}
	};
};
tink_core_Callback.defer = function(f) {
	global.setImmediate(f);
};
var tink_core_LinkObject = function() { };
tink_core_LinkObject.__name__ = true;
tink_core_LinkObject.__isInterface__ = true;
tink_core_LinkObject.prototype = {
	__class__: tink_core_LinkObject
};
var tink_core_CallbackLinkRef = function() {
};
tink_core_CallbackLinkRef.__name__ = true;
tink_core_CallbackLinkRef.__interfaces__ = [tink_core_LinkObject];
tink_core_CallbackLinkRef.prototype = {
	set_link: function(param) {
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
		return this.link = param;
	}
	,cancel: function() {
		var this1 = this.link;
		if(this1 != null) {
			this1.cancel();
		}
	}
	,__class__: tink_core_CallbackLinkRef
};
var tink_core_CallbackLink = {};
tink_core_CallbackLink._new = function(link) {
	var this1 = new tink_core_SimpleLink(link);
	return this1;
};
tink_core_CallbackLink.cancel = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
};
tink_core_CallbackLink.dissolve = function(this1) {
	if(this1 != null) {
		this1.cancel();
	}
};
tink_core_CallbackLink.noop = function() {
};
tink_core_CallbackLink.toFunction = function(this1) {
	if(this1 == null) {
		return tink_core_CallbackLink.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
};
tink_core_CallbackLink.toCallback = function(this1) {
	if(this1 == null) {
		return tink_core_CallbackLink.noop;
	} else {
		return $bind(this1,this1.cancel);
	}
};
tink_core_CallbackLink.fromFunction = function(f) {
	var this1 = new tink_core_SimpleLink(f);
	return this1;
};
tink_core_CallbackLink.join = function(this1,b) {
	return new tink_core__$Callback_LinkPair(this1,b);
};
tink_core_CallbackLink.fromMany = function(callbacks) {
	var this1 = new tink_core_SimpleLink(function() {
		if(callbacks != null) {
			var _g = 0;
			while(_g < callbacks.length) {
				var cb = callbacks[_g];
				++_g;
				if(cb != null) {
					cb.cancel();
				}
			}
		} else {
			callbacks = null;
		}
	});
	return this1;
};
var tink_core_SimpleLink = function(f) {
	this.f = f;
};
tink_core_SimpleLink.__name__ = true;
tink_core_SimpleLink.__interfaces__ = [tink_core_LinkObject];
tink_core_SimpleLink.prototype = {
	cancel: function() {
		if(this.f != null) {
			this.f();
			this.f = null;
		}
	}
	,__class__: tink_core_SimpleLink
};
var tink_core__$Callback_LinkPair = function(a,b) {
	this.dissolved = false;
	this.a = a;
	this.b = b;
};
tink_core__$Callback_LinkPair.__name__ = true;
tink_core__$Callback_LinkPair.__interfaces__ = [tink_core_LinkObject];
tink_core__$Callback_LinkPair.prototype = {
	cancel: function() {
		if(!this.dissolved) {
			this.dissolved = true;
			var this1 = this.a;
			if(this1 != null) {
				this1.cancel();
			}
			var this1 = this.b;
			if(this1 != null) {
				this1.cancel();
			}
			this.a = null;
			this.b = null;
		}
	}
	,__class__: tink_core__$Callback_LinkPair
};
var tink_core__$Callback_ListCell = function(cb,list) {
	if(cb == null) {
		throw haxe_Exception.thrown("callback expected but null received");
	}
	this.cb = cb;
	this.list = list;
};
tink_core__$Callback_ListCell.__name__ = true;
tink_core__$Callback_ListCell.__interfaces__ = [tink_core_LinkObject];
tink_core__$Callback_ListCell.prototype = {
	invoke: function(data) {
		if(this.list != null) {
			this.cb(data);
		}
	}
	,clear: function() {
		this.cb = null;
		this.list = null;
	}
	,cancel: function() {
		if(this.list != null) {
			var list = this.list;
			this.cb = null;
			this.list = null;
			if(--list.used <= list.cells.length >> 1) {
				list.compact();
			}
		}
	}
	,__class__: tink_core__$Callback_ListCell
};
var tink_core_Disposable = function() { };
tink_core_Disposable.__name__ = true;
tink_core_Disposable.__isInterface__ = true;
tink_core_Disposable.prototype = {
	__class__: tink_core_Disposable
};
var tink_core_OwnedDisposable = function() { };
tink_core_OwnedDisposable.__name__ = true;
tink_core_OwnedDisposable.__isInterface__ = true;
tink_core_OwnedDisposable.__interfaces__ = [tink_core_Disposable];
tink_core_OwnedDisposable.prototype = {
	__class__: tink_core_OwnedDisposable
};
var tink_core_SimpleDisposable = function(dispose) {
	this.disposeHandlers = [];
	this.f = dispose;
};
tink_core_SimpleDisposable.__name__ = true;
tink_core_SimpleDisposable.__interfaces__ = [tink_core_OwnedDisposable];
tink_core_SimpleDisposable.noop = function() {
};
tink_core_SimpleDisposable.prototype = {
	get_disposed: function() {
		return this.disposeHandlers == null;
	}
	,ondispose: function(d) {
		var _g = this.disposeHandlers;
		if(_g == null) {
			d();
		} else {
			_g.push(d);
		}
	}
	,dispose: function() {
		var _g = this.disposeHandlers;
		if(_g != null) {
			this.disposeHandlers = null;
			var f = this.f;
			this.f = tink_core_SimpleDisposable.noop;
			f();
			var _g1 = 0;
			while(_g1 < _g.length) {
				var h = _g[_g1];
				++_g1;
				h();
			}
		}
	}
	,__class__: tink_core_SimpleDisposable
};
var tink_core_CallbackList = function(destructive) {
	if(destructive == null) {
		destructive = false;
	}
	this.onfill = function() {
	};
	this.ondrain = function() {
	};
	this.busy = false;
	this.queue = [];
	this.used = 0;
	var _gthis = this;
	tink_core_SimpleDisposable.call(this,function() {
		if(!_gthis.busy) {
			_gthis.destroy();
		}
	});
	this.destructive = destructive;
	this.cells = [];
};
tink_core_CallbackList.__name__ = true;
tink_core_CallbackList.__super__ = tink_core_SimpleDisposable;
tink_core_CallbackList.prototype = $extend(tink_core_SimpleDisposable.prototype,{
	get_length: function() {
		return this.used;
	}
	,release: function() {
		if(--this.used <= this.cells.length >> 1) {
			this.compact();
		}
	}
	,destroy: function() {
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.cb = null;
			c.list = null;
		}
		this.queue = null;
		this.cells = null;
		if(this.used > 0) {
			this.used = 0;
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
	}
	,drain: function() {
		var fn = this.ondrain;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			fn();
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(fn);
		}
	}
	,add: function(cb) {
		if(this.disposeHandlers == null) {
			return null;
		}
		var node = new tink_core__$Callback_ListCell(cb,this);
		this.cells.push(node);
		if(this.used++ == 0) {
			var fn = this.onfill;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		}
		return node;
	}
	,invoke: function(data) {
		var _gthis = this;
		if(tink_core_Callback.depth < 500) {
			tink_core_Callback.depth++;
			if(_gthis.disposeHandlers != null) {
				if(_gthis.busy) {
					if(_gthis.destructive != true) {
						var _g = $bind(_gthis,_gthis.invoke);
						var data1 = data;
						var tmp = function() {
							_g(data1);
						};
						_gthis.queue.push(tmp);
					}
				} else {
					_gthis.busy = true;
					if(_gthis.destructive) {
						_gthis.dispose();
					}
					var length = _gthis.cells.length;
					var _g1 = 0;
					while(_g1 < length) {
						var i = _g1++;
						var _this = _gthis.cells[i];
						if(_this.list != null) {
							_this.cb(data);
						}
					}
					_gthis.busy = false;
					if(_gthis.disposeHandlers == null) {
						_gthis.destroy();
					} else {
						if(_gthis.used < _gthis.cells.length) {
							_gthis.compact();
						}
						if(_gthis.queue.length > 0) {
							(_gthis.queue.shift())();
						}
					}
				}
			}
			tink_core_Callback.depth--;
		} else {
			tink_core_Callback.defer(function() {
				if(_gthis.disposeHandlers != null) {
					if(_gthis.busy) {
						if(_gthis.destructive != true) {
							var _g = $bind(_gthis,_gthis.invoke);
							var data1 = data;
							var tmp = function() {
								_g(data1);
							};
							_gthis.queue.push(tmp);
						}
					} else {
						_gthis.busy = true;
						if(_gthis.destructive) {
							_gthis.dispose();
						}
						var length = _gthis.cells.length;
						var _g1 = 0;
						while(_g1 < length) {
							var i = _g1++;
							var _this = _gthis.cells[i];
							if(_this.list != null) {
								_this.cb(data);
							}
						}
						_gthis.busy = false;
						if(_gthis.disposeHandlers == null) {
							_gthis.destroy();
						} else {
							if(_gthis.used < _gthis.cells.length) {
								_gthis.compact();
							}
							if(_gthis.queue.length > 0) {
								(_gthis.queue.shift())();
							}
						}
					}
				}
			});
		}
	}
	,compact: function() {
		if(this.busy) {
			return;
		} else if(this.used == 0) {
			this.resize(0);
			var fn = this.ondrain;
			if(tink_core_Callback.depth < 500) {
				tink_core_Callback.depth++;
				fn();
				tink_core_Callback.depth--;
			} else {
				tink_core_Callback.defer(fn);
			}
		} else {
			var compacted = 0;
			var _g = 0;
			var _g1 = this.cells.length;
			while(_g < _g1) {
				var i = _g++;
				var _g2 = this.cells[i];
				if(_g2.cb != null) {
					if(compacted != i) {
						this.cells[compacted] = _g2;
					}
					if(++compacted == this.used) {
						break;
					}
				}
			}
			this.resize(this.used);
		}
	}
	,resize: function(length) {
		this.cells.length = length;
	}
	,clear: function() {
		if(this.busy) {
			this.queue.push($bind(this,this.clear));
		}
		var _g = 0;
		var _g1 = this.cells;
		while(_g < _g1.length) {
			var cell = _g1[_g];
			++_g;
			cell.cb = null;
			cell.list = null;
		}
		this.resize(0);
	}
	,__class__: tink_core_CallbackList
});
var tink_core_AlreadyDisposed = function() {
};
tink_core_AlreadyDisposed.__name__ = true;
tink_core_AlreadyDisposed.__interfaces__ = [tink_core_OwnedDisposable];
tink_core_AlreadyDisposed.prototype = {
	get_disposed: function() {
		return true;
	}
	,ondispose: function(d) {
		d();
	}
	,dispose: function() {
	}
	,__class__: tink_core_AlreadyDisposed
};
var tink_core_TypedError = function(code,message,pos) {
	if(code == null) {
		code = 500;
	}
	this.isTinkError = true;
	this.code = code;
	this.message = message;
	this.pos = pos;
	this.exceptionStack = [];
	this.callStack = [];
};
tink_core_TypedError.__name__ = true;
tink_core_TypedError.withData = function(code,message,data,pos) {
	return tink_core_TypedError.typed(code,message,data,pos);
};
tink_core_TypedError.typed = function(code,message,data,pos) {
	var ret = new tink_core_TypedError(code,message,pos);
	ret.data = data;
	return ret;
};
tink_core_TypedError.ofJsError = function(e,pos) {
	return tink_core_TypedError.withData(500,e.message,e,pos);
};
tink_core_TypedError.asError = function(v) {
	if(v != null && v.isTinkError) {
		return v;
	} else {
		return null;
	}
};
tink_core_TypedError.catchExceptions = function(f,report,pos) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( _g ) {
		var _g1 = haxe_Exception.caught(_g).unwrap();
		var e = tink_core_TypedError.asError(_g1);
		return tink_core_Outcome.Failure(e == null ? report == null ? tink_core_TypedError.withData(null,"Unexpected Error",_g1,pos) : report(_g1) : e);
	}
};
tink_core_TypedError.reporter = function(code,message,pos) {
	return function(e) {
		return tink_core_TypedError.withData(code,message,e,pos);
	};
};
tink_core_TypedError.rethrow = function(any) {
	throw haxe_Exception.thrown(any);
};
tink_core_TypedError.tryFinally = function(f,cleanup) {
	try { return f(); } finally { cleanup(); }
	return null;
};
tink_core_TypedError.prototype = {
	printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error#" + this.code + ": " + this.message;
		if(this.pos != null) {
			ret += " @ " + this.printPos();
		}
		return ret;
	}
	,toPromise: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(this)));
	}
	,throwSelf: function() {
		var any = this;
		throw haxe_Exception.thrown(any);
	}
	,toJsError: function() {
		if(((this.data) instanceof Error)) {
			return this.data;
		} else {
			return new tink_core__$Error_TinkError(this);
		}
	}
	,__class__: tink_core_TypedError
};
var tink_core_Stack = {};
tink_core_Stack.toString = function(this1) {
	return "Error stack not available. Compile with -D error_stack.";
};
var tink_core__$Error_TinkError = function(e) {
	Error.call(this);
	this.message = e.message;
	this.data = e;
};
tink_core__$Error_TinkError.__name__ = true;
tink_core__$Error_TinkError.__super__ = Error;
tink_core__$Error_TinkError.prototype = $extend(Error.prototype,{
	__class__: tink_core__$Error_TinkError
});
var tink_core__$Future_FutureObject = function() {
};
tink_core__$Future_FutureObject.__name__ = true;
tink_core__$Future_FutureObject.prototype = {
	getStatus: function() {
		return tink_core_FutureStatus.NeverEver;
	}
	,handle: function(callback) {
		return null;
	}
	,eager: function() {
	}
	,__class__: tink_core__$Future_FutureObject
};
var tink_core__$Lazy_Computable = function() { };
tink_core__$Lazy_Computable.__name__ = true;
tink_core__$Lazy_Computable.__isInterface__ = true;
tink_core__$Lazy_Computable.prototype = {
	__class__: tink_core__$Lazy_Computable
};
var tink_core__$Lazy_LazyObject = function() { };
tink_core__$Lazy_LazyObject.__name__ = true;
tink_core__$Lazy_LazyObject.__isInterface__ = true;
tink_core__$Lazy_LazyObject.__interfaces__ = [tink_core__$Lazy_Computable];
tink_core__$Lazy_LazyObject.prototype = {
	__class__: tink_core__$Lazy_LazyObject
};
var tink_core__$Lazy_LazyConst = function(value) {
	this.value = value;
};
tink_core__$Lazy_LazyConst.__name__ = true;
tink_core__$Lazy_LazyConst.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyConst.prototype = {
	isComputed: function() {
		return true;
	}
	,get: function() {
		return this.value;
	}
	,compute: function() {
	}
	,underlying: function() {
		return null;
	}
	,__class__: tink_core__$Lazy_LazyConst
};
var tink_core__$Future_SyncFuture = function(value) {
	tink_core__$Future_FutureObject.call(this);
	this.value = value;
};
tink_core__$Future_SyncFuture.__name__ = true;
tink_core__$Future_SyncFuture.__super__ = tink_core__$Future_FutureObject;
tink_core__$Future_SyncFuture.prototype = $extend(tink_core__$Future_FutureObject.prototype,{
	getStatus: function() {
		return tink_core_FutureStatus.Ready(this.value);
	}
	,handle: function(cb) {
		tink_core_Callback.invoke(cb,tink_core_Lazy.get(this.value));
		return null;
	}
	,eager: function() {
		if(!this.value.isComputed()) {
			tink_core_Lazy.get(this.value);
		}
	}
	,__class__: tink_core__$Future_SyncFuture
});
var tink_core_Future = {};
tink_core_Future.never = function() {
	return tink_core_Future.NEVER_INST;
};
tink_core_Future.get_status = function(this1) {
	return this1.getStatus();
};
tink_core_Future._new = function(wakeup) {
	var this1 = new tink_core__$Future_SuspendableFuture(wakeup);
	return this1;
};
tink_core_Future.handle = function(this1,callback) {
	return this1.handle(callback);
};
tink_core_Future.eager = function(this1) {
	this1.eager();
	return this1;
};
tink_core_Future.noise = function(this1) {
	if(this1.getStatus()._hx_index == 4) {
		return tink_core_Future.never();
	} else {
		return tink_core_Future.map(this1,function(_) {
			return null;
		});
	}
};
tink_core_Future.first = function(this1,that) {
	var _g = this1;
	switch(_g.getStatus()._hx_index) {
	case 3:
		switch(that.getStatus()._hx_index) {
		case 3:
			return _g;
		case 4:
			return _g;
		default:
			return _g;
		}
		break;
	case 4:
		var v = that;
		return v;
	default:
		switch(that.getStatus()._hx_index) {
		case 3:
			var v = that;
			return v;
		case 4:
			return _g;
		default:
			return new tink_core__$Future_SuspendableFuture(function(fire) {
				return new tink_core__$Callback_LinkPair(this1.handle(fire),that.handle(fire));
			});
		}
	}
};
tink_core_Future.map = function(this1,f,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var this2 = _g.result;
		var f1 = f;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyFunc(function() {
			return f1(this2.get());
		},this2));
	case 4:
		return tink_core_Future.never();
	default:
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return this1.handle(function(v) {
				fire(f(v));
			});
		});
	}
};
tink_core_Future.flatMap = function(this1,next,gather) {
	var _g = this1.getStatus();
	switch(_g._hx_index) {
	case 3:
		var l = _g.result;
		return new tink_core__$Future_SuspendableFuture(function(fire) {
			return next(tink_core_Lazy.get(l)).handle(function(v) {
				fire(v);
			});
		});
	case 4:
		return tink_core_Future.never();
	default:
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var inner = new tink_core_CallbackLinkRef();
			var outer = this1.handle(function(v) {
				var param = next(v).handle($yield);
				var this1 = inner.link;
				if(this1 != null) {
					this1.cancel();
				}
				inner.link = param;
			});
			return new tink_core__$Callback_LinkPair(outer,inner);
		});
	}
};
tink_core_Future.swap = function(this1,v) {
	return tink_core_Future.map(this1,function(_) {
		return v;
	});
};
tink_core_Future.next = function(this1,n) {
	return tink_core_Future.flatMap(this1,n);
};
tink_core_Future.withSideEffect = function(this1,c) {
	return tink_core_Future.map(this1,function(v) {
		tink_core_Callback.invoke(c,v);
		return v;
	});
};
tink_core_Future.gather = function(this1) {
	return this1;
};
tink_core_Future.merge = function(this1,that,combine) {
	var _g = this1.getStatus();
	var _g1 = that.getStatus();
	if(_g._hx_index == 4) {
		return tink_core_Future.never();
	} else if(_g1._hx_index == 4) {
		return tink_core_Future.never();
	} else {
		return new tink_core__$Future_SuspendableFuture(function($yield) {
			var check = function(v) {
				var _g = this1.getStatus();
				var _g1 = that.getStatus();
				if(_g._hx_index == 3) {
					if(_g1._hx_index == 3) {
						$yield(combine(tink_core_Lazy.get(_g.result),tink_core_Lazy.get(_g1.result)));
					}
				}
			};
			return new tink_core__$Callback_LinkPair(this1.handle(check),that.handle(check));
		});
	}
};
tink_core_Future.flatten = function(f) {
	return tink_core_Future.flatMap(f,function(v) {
		return v;
	});
};
tink_core_Future.ofJsPromise = function(promise,transformError) {
	return tink_core_Future.irreversible(function(cb) {
		promise.then(function(a) {
			var _g = cb;
			var a1 = tink_core_Outcome.Success(a);
			tink_core_Callback.defer(function() {
				_g(a1);
			});
		},function(e) {
			var cb1 = cb;
			var tmp;
			if(transformError == null) {
				var e1 = e;
				tmp = tink_core_TypedError.withData(500,e1.message,e1,{ fileName : "tink/core/Future.hx", lineNumber : 176, className : "tink.core._Future.Future_Impl_", methodName : "ofJsPromise"});
			} else {
				var f = transformError;
				tmp = f(e);
			}
			cb1(tink_core_Outcome.Failure(tmp));
		});
	});
};
tink_core_Future.fromJsPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_Future.neverToAny = function(l) {
	return l;
};
tink_core_Future.ofAny = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
};
tink_core_Future.asPromise = function(s) {
	return s;
};
tink_core_Future.ofMany = function(futures,gather) {
	return tink_core_Future.inSequence(futures);
};
tink_core_Future.inParallel = function(futures,concurrency) {
	return tink_core_Future.many(futures,concurrency);
};
tink_core_Future.inSequence = function(futures) {
	return tink_core_Future.many(futures,1);
};
tink_core_Future.many = function(a,concurrency) {
	return tink_core_Future.processMany(a,concurrency,tink_core_Outcome.Success,function(o) {
		return tink_core_OutcomeTools.orNull(o);
	});
};
tink_core_Future.processMany = function(a,concurrency,fn,lift) {
	if(a.length == 0) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(lift(tink_core_Outcome.Success([]))));
	} else {
		var this1 = new tink_core__$Future_SuspendableFuture(function($yield) {
			var links = [];
			var _g = [];
			var _g1 = 0;
			while(_g1 < a.length) {
				++_g1;
				_g.push(null);
			}
			var ret = _g;
			var index = 0;
			var pending = 0;
			var done = false;
			var concurrency1;
			if(concurrency == null) {
				concurrency1 = a.length;
			} else {
				var v = concurrency;
				concurrency1 = v < 1 ? 1 : v > a.length ? a.length : v;
			}
			var fireWhenReady = function() {
				if(index == ret.length) {
					if(pending == 0) {
						var v = lift(tink_core_Outcome.Success(ret));
						done = true;
						$yield(v);
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			};
			var step = null;
			step = function() {
				if(!done && !fireWhenReady()) {
					while(index < ret.length) {
						index += 1;
						var index1 = [index - 1];
						var p = a[index1[0]];
						var check = [(function(index) {
							return function(o) {
								var _g = fn(o);
								switch(_g._hx_index) {
								case 0:
									ret[index[0]] = _g.data;
									fireWhenReady();
									break;
								case 1:
									var _g1 = _g.failure;
									var _g = 0;
									while(_g < links.length) {
										var l = links[_g];
										++_g;
										if(l != null) {
											l.cancel();
										}
									}
									var v = lift(tink_core_Outcome.Failure(_g1));
									done = true;
									$yield(v);
									break;
								}
							};
						})(index1)];
						var _g = p.getStatus();
						if(_g._hx_index == 3) {
							var _hx_tmp;
							_hx_tmp = tink_core_Lazy.get(_g.result);
							check[0](_hx_tmp);
							if(!done) {
								continue;
							}
						} else {
							pending += 1;
							links.push(p.handle((function(check) {
								return function(o) {
									pending -= 1;
									check[0](o);
									if(!done) {
										step();
									}
								};
							})(check)));
						}
						break;
					}
				}
			};
			var _g = 0;
			var _g1 = concurrency1;
			while(_g < _g1) {
				++_g;
				step();
			}
			return tink_core_CallbackLink.fromMany(links);
		});
		return this1;
	}
};
tink_core_Future.lazy = function(l) {
	return new tink_core__$Future_SyncFuture(l);
};
tink_core_Future.sync = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
};
tink_core_Future.isFuture = function(maybeFuture) {
	return ((maybeFuture) instanceof tink_core__$Future_FutureObject);
};
tink_core_Future.async = function(init,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	var ret = tink_core_Future.irreversible(init);
	if(lazy) {
		return ret;
	} else {
		ret.eager();
		return ret;
	}
};
tink_core_Future.irreversible = function(init) {
	return new tink_core__$Future_SuspendableFuture(function($yield) {
		init($yield);
		return null;
	});
};
tink_core_Future.or = function(a,b) {
	return tink_core_Future.first(a,b);
};
tink_core_Future.either = function(a,b) {
	return tink_core_Future.first(tink_core_Future.map(a,haxe_ds_Either.Left),tink_core_Future.map(b,haxe_ds_Either.Right));
};
tink_core_Future.and = function(a,b) {
	return tink_core_Future.merge(a,b,function(a,b) {
		var this1 = new tink_core_MPair(a,b);
		return this1;
	});
};
tink_core_Future._tryFailingFlatMap = function(f,map) {
	return tink_core_Future.flatMap(f,function(o) {
		switch(o._hx_index) {
		case 0:
			return map(o.data);
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(o.failure)));
		}
	});
};
tink_core_Future._tryFlatMap = function(f,map) {
	return tink_core_Future.flatMap(f,function(o) {
		switch(o._hx_index) {
		case 0:
			return tink_core_Future.map(map(o.data),tink_core_Outcome.Success);
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(o.failure)));
		}
	});
};
tink_core_Future._tryFailingMap = function(f,map) {
	return tink_core_Future.map(f,function(o) {
		return tink_core_OutcomeTools.flatMap(o,tink_core__$Outcome_OutcomeMapper.withSameError(map));
	});
};
tink_core_Future._tryMap = function(f,map) {
	return tink_core_Future.map(f,function(o) {
		return tink_core_OutcomeTools.map(o,map);
	});
};
tink_core_Future._flatMap = function(f,map) {
	return tink_core_Future.flatMap(f,map);
};
tink_core_Future._map = function(f,map) {
	return tink_core_Future.map(f,map);
};
tink_core_Future.trigger = function() {
	return new tink_core_FutureTrigger();
};
tink_core_Future.delay = function(ms,value) {
	var this1 = tink_core_Future.irreversible(function(cb) {
		haxe_Timer.delay(function() {
			cb(tink_core_Lazy.get(value));
		},ms);
	});
	this1.eager();
	return this1;
};
var tink_core_FutureStatus = $hxEnums["tink.core.FutureStatus"] = { __ename__:true,__constructs__:null
	,Suspended: {_hx_name:"Suspended",_hx_index:0,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Awaited: {_hx_name:"Awaited",_hx_index:1,__enum__:"tink.core.FutureStatus",toString:$estr}
	,EagerlyAwaited: {_hx_name:"EagerlyAwaited",_hx_index:2,__enum__:"tink.core.FutureStatus",toString:$estr}
	,Ready: ($_=function(result) { return {_hx_index:3,result:result,__enum__:"tink.core.FutureStatus",toString:$estr}; },$_._hx_name="Ready",$_.__params__ = ["result"],$_)
	,NeverEver: {_hx_name:"NeverEver",_hx_index:4,__enum__:"tink.core.FutureStatus",toString:$estr}
};
tink_core_FutureStatus.__constructs__ = [tink_core_FutureStatus.Suspended,tink_core_FutureStatus.Awaited,tink_core_FutureStatus.EagerlyAwaited,tink_core_FutureStatus.Ready,tink_core_FutureStatus.NeverEver];
var tink_core_FutureTrigger = function() {
	this.status = tink_core_FutureStatus.Awaited;
	tink_core__$Future_FutureObject.call(this);
	this.list = new tink_core_CallbackList(true);
};
tink_core_FutureTrigger.__name__ = true;
tink_core_FutureTrigger.__super__ = tink_core__$Future_FutureObject;
tink_core_FutureTrigger.prototype = $extend(tink_core__$Future_FutureObject.prototype,{
	getStatus: function() {
		return this.status;
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(_g.result));
			return null;
		} else {
			var _this = this.list;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	,asFuture: function() {
		return this;
	}
	,trigger: function(result) {
		if(this.status._hx_index == 3) {
			return false;
		} else {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(result));
			this.list.invoke(result);
			return true;
		}
	}
	,__class__: tink_core_FutureTrigger
});
var tink_core_JsPromiseTools = function() { };
tink_core_JsPromiseTools.__name__ = true;
tink_core_JsPromiseTools.toSurprise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_JsPromiseTools.toPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
var tink_core__$Future_SuspendableFuture = function(wakeup) {
	this.status = tink_core_FutureStatus.Suspended;
	var _gthis = this;
	tink_core__$Future_FutureObject.call(this);
	this.wakeup = wakeup;
	this.callbacks = new tink_core_CallbackList(true);
	this.callbacks.ondrain = function() {
		if(_gthis.status == tink_core_FutureStatus.Awaited) {
			_gthis.status = tink_core_FutureStatus.Suspended;
			var this1 = _gthis.link;
			if(this1 != null) {
				this1.cancel();
			}
			_gthis.link = null;
		}
	};
	this.callbacks.onfill = function() {
		if(_gthis.status == tink_core_FutureStatus.Suspended) {
			_gthis.status = tink_core_FutureStatus.Awaited;
			_gthis.arm();
		}
	};
};
tink_core__$Future_SuspendableFuture.__name__ = true;
tink_core__$Future_SuspendableFuture.__super__ = tink_core__$Future_FutureObject;
tink_core__$Future_SuspendableFuture.prototype = $extend(tink_core__$Future_FutureObject.prototype,{
	getStatus: function() {
		return this.status;
	}
	,trigger: function(value) {
		if(this.status._hx_index != 3) {
			this.status = tink_core_FutureStatus.Ready(new tink_core__$Lazy_LazyConst(value));
			var link = this.link;
			this.link = null;
			this.wakeup = null;
			this.callbacks.invoke(value);
			if(link != null) {
				link.cancel();
			}
		}
	}
	,handle: function(callback) {
		var _g = this.status;
		if(_g._hx_index == 3) {
			tink_core_Callback.invoke(callback,tink_core_Lazy.get(_g.result));
			return null;
		} else {
			var _this = this.callbacks;
			if(_this.disposeHandlers == null) {
				return null;
			} else {
				var node = new tink_core__$Callback_ListCell(callback,_this);
				_this.cells.push(node);
				if(_this.used++ == 0) {
					var fn = _this.onfill;
					if(tink_core_Callback.depth < 500) {
						tink_core_Callback.depth++;
						fn();
						tink_core_Callback.depth--;
					} else {
						tink_core_Callback.defer(fn);
					}
				}
				return node;
			}
		}
	}
	,arm: function() {
		var _gthis = this;
		this.link = this.wakeup(function(x) {
			_gthis.trigger(x);
		});
	}
	,eager: function() {
		switch(this.status._hx_index) {
		case 0:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			this.arm();
			break;
		case 1:
			this.status = tink_core_FutureStatus.EagerlyAwaited;
			break;
		default:
		}
	}
	,__class__: tink_core__$Future_SuspendableFuture
});
var tink_core_Lazy = {};
tink_core_Lazy.get_computed = function(this1) {
	return this1.isComputed();
};
tink_core_Lazy.get = function(this1) {
	this1.compute();
	return this1.get();
};
tink_core_Lazy.fromNoise = function(l) {
	return l;
};
tink_core_Lazy.ofFunc = function(f) {
	return new tink_core__$Lazy_LazyFunc(f);
};
tink_core_Lazy.map = function(this1,f) {
	return new tink_core__$Lazy_LazyFunc(function() {
		return f(this1.get());
	},this1);
};
tink_core_Lazy.flatMap = function(this1,f) {
	return new tink_core__$Lazy_LazyFunc(function() {
		return tink_core_Lazy.get(f(this1.get()));
	},this1);
};
tink_core_Lazy.ofConst = function(c) {
	return new tink_core__$Lazy_LazyConst(c);
};
var tink_core__$Lazy_LazyFunc = function(f,from) {
	this.busy = false;
	this.f = f;
	this.from = from;
};
tink_core__$Lazy_LazyFunc.__name__ = true;
tink_core__$Lazy_LazyFunc.__interfaces__ = [tink_core__$Lazy_LazyObject];
tink_core__$Lazy_LazyFunc.prototype = {
	underlying: function() {
		return this.from;
	}
	,isComputed: function() {
		return this.f == null;
	}
	,get: function() {
		return this.result;
	}
	,compute: function() {
		if(this.busy) {
			throw haxe_Exception.thrown(new tink_core_TypedError(null,"circular lazyness",{ fileName : "tink/core/Lazy.hx", lineNumber : 85, className : "tink.core._Lazy.LazyFunc", methodName : "compute"}));
		}
		var _g = this.f;
		if(_g != null) {
			this.busy = true;
			this.f = null;
			var _g1 = this.from;
			if(_g1 != null) {
				var cur = _g1;
				this.from = null;
				var stack = [];
				while(cur != null && !cur.isComputed()) {
					stack.push(cur);
					cur = cur.underlying();
				}
				stack.reverse();
				var _g1 = 0;
				while(_g1 < stack.length) {
					var c = stack[_g1];
					++_g1;
					c.compute();
				}
			}
			this.result = _g();
			this.busy = false;
		}
	}
	,__class__: tink_core__$Lazy_LazyFunc
};
var tink_core_NamedWith = function(name,value) {
	this.name = name;
	this.value = value;
};
tink_core_NamedWith.__name__ = true;
tink_core_NamedWith.prototype = {
	__class__: tink_core_NamedWith
};
var tink_core_Noise = {};
tink_core_Noise.ofAny = function(t) {
	return null;
};
var tink_core_OptionTools = function() { };
tink_core_OptionTools.__name__ = true;
tink_core_OptionTools.force = function(o,pos) {
	if(o._hx_index == 0) {
		return o.v;
	} else {
		throw haxe_Exception.thrown(new tink_core_TypedError(404,"Some value expected but none found",pos));
	}
};
tink_core_OptionTools.sure = function(o,pos) {
	if(o._hx_index == 0) {
		return o.v;
	} else {
		throw haxe_Exception.thrown(new tink_core_TypedError(404,"Some value expected but none found",pos));
	}
};
tink_core_OptionTools.toOutcome = function(o,pos) {
	switch(o._hx_index) {
	case 0:
		return tink_core_Outcome.Success(o.v);
	case 1:
		return tink_core_Outcome.Failure(new tink_core_TypedError(404,"Some value expected but none found in " + pos.fileName + "@line " + pos.lineNumber,{ fileName : "tink/core/Option.hx", lineNumber : 31, className : "tink.core.OptionTools", methodName : "toOutcome"}));
	}
};
tink_core_OptionTools.or = function(o,l) {
	if(o._hx_index == 0) {
		return o.v;
	} else {
		return tink_core_Lazy.get(l);
	}
};
tink_core_OptionTools.orTry = function(o,fallback) {
	if(o._hx_index == 0) {
		return o;
	} else {
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OptionTools.orNull = function(o) {
	if(o._hx_index == 0) {
		return o.v;
	} else {
		return null;
	}
};
tink_core_OptionTools.filter = function(o,f) {
	if(o._hx_index == 0) {
		if(f(o.v) == false) {
			return haxe_ds_Option.None;
		} else {
			return o;
		}
	} else {
		return o;
	}
};
tink_core_OptionTools.satisfies = function(o,f) {
	if(o._hx_index == 0) {
		return f(o.v);
	} else {
		return false;
	}
};
tink_core_OptionTools.equals = function(o,v) {
	if(o._hx_index == 0) {
		return o.v == v;
	} else {
		return false;
	}
};
tink_core_OptionTools.map = function(o,f) {
	if(o._hx_index == 0) {
		return haxe_ds_Option.Some(f(o.v));
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_OptionTools.flatMap = function(o,f) {
	if(o._hx_index == 0) {
		return f(o.v);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_OptionTools.iterator = function(o) {
	return new tink_core_OptionIter(o);
};
tink_core_OptionTools.toArray = function(o) {
	if(o._hx_index == 0) {
		return [o.v];
	} else {
		return [];
	}
};
var tink_core_OptionIter = function(o) {
	this.alive = true;
	if(o._hx_index == 0) {
		this.value = o.v;
	} else {
		this.alive = false;
	}
};
tink_core_OptionIter.__name__ = true;
tink_core_OptionIter.prototype = {
	hasNext: function() {
		return this.alive;
	}
	,next: function() {
		this.alive = false;
		return this.value;
	}
	,__class__: tink_core_OptionIter
};
var tink_core_Outcome = $hxEnums["tink.core.Outcome"] = { __ename__:true,__constructs__:null
	,Success: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Success",$_.__params__ = ["data"],$_)
	,Failure: ($_=function(failure) { return {_hx_index:1,failure:failure,__enum__:"tink.core.Outcome",toString:$estr}; },$_._hx_name="Failure",$_.__params__ = ["failure"],$_)
};
tink_core_Outcome.__constructs__ = [tink_core_Outcome.Success,tink_core_Outcome.Failure];
var tink_core_OutcomeTools = function() { };
tink_core_OutcomeTools.__name__ = true;
tink_core_OutcomeTools.sure = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		return outcome.data;
	case 1:
		var _g = outcome.failure;
		var _g1 = tink_core_TypedError.asError(_g);
		if(_g1 == null) {
			throw haxe_Exception.thrown(_g);
		} else {
			return _g1.throwSelf();
		}
		break;
	}
};
tink_core_OutcomeTools.toOption = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		return haxe_ds_Option.Some(outcome.data);
	case 1:
		return haxe_ds_Option.None;
	}
};
tink_core_OutcomeTools.orNull = function(outcome) {
	switch(outcome._hx_index) {
	case 0:
		return outcome.data;
	case 1:
		return null;
	}
};
tink_core_OutcomeTools.orUse = function(outcome,fallback) {
	return tink_core_OutcomeTools.or(outcome,fallback);
};
tink_core_OutcomeTools.or = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		return outcome.data;
	case 1:
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OutcomeTools.orTry = function(outcome,fallback) {
	switch(outcome._hx_index) {
	case 0:
		return outcome;
	case 1:
		return tink_core_Lazy.get(fallback);
	}
};
tink_core_OutcomeTools.equals = function(outcome,to) {
	switch(outcome._hx_index) {
	case 0:
		return outcome.data == to;
	case 1:
		return false;
	}
};
tink_core_OutcomeTools.map = function(outcome,transform) {
	switch(outcome._hx_index) {
	case 0:
		return tink_core_Outcome.Success(transform(outcome.data));
	case 1:
		return tink_core_Outcome.Failure(outcome.failure);
	}
};
tink_core_OutcomeTools.isSuccess = function(outcome) {
	if(outcome._hx_index == 0) {
		return true;
	} else {
		return false;
	}
};
tink_core_OutcomeTools.flatMap = function(o,mapper) {
	return tink_core__$Outcome_OutcomeMapper.apply(mapper,o);
};
tink_core_OutcomeTools.swap = function(outcome,v) {
	switch(outcome._hx_index) {
	case 0:
		return tink_core_Outcome.Success(v);
	case 1:
		return tink_core_Outcome.Failure(outcome.failure);
	}
};
tink_core_OutcomeTools.next = function(outcome,f) {
	switch(outcome._hx_index) {
	case 0:
		return f(outcome.data);
	case 1:
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(outcome.failure)));
	}
};
tink_core_OutcomeTools.attempt = function(f,report) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( _g ) {
		return tink_core_Outcome.Failure(report(haxe_Exception.caught(_g).unwrap()));
	}
};
tink_core_OutcomeTools.satisfies = function(o,f) {
	if(o._hx_index == 0) {
		return f(o.data);
	} else {
		return false;
	}
};
tink_core_OutcomeTools.flatten = function(o) {
	switch(o._hx_index) {
	case 0:
		var _g = o.data;
		switch(_g._hx_index) {
		case 0:
			return tink_core_Outcome.Success(_g.data);
		case 1:
			return tink_core_Outcome.Failure(_g.failure);
		}
		break;
	case 1:
		return tink_core_Outcome.Failure(o.failure);
	}
};
var tink_core__$Outcome_OutcomeMapper = {};
tink_core__$Outcome_OutcomeMapper._new = function(f) {
	var this1 = { f : f};
	return this1;
};
tink_core__$Outcome_OutcomeMapper.apply = function(this1,o) {
	return this1.f(o);
};
tink_core__$Outcome_OutcomeMapper.withSameError = function(f) {
	return tink_core__$Outcome_OutcomeMapper._new(function(o) {
		switch(o._hx_index) {
		case 0:
			return f(o.data);
		case 1:
			return tink_core_Outcome.Failure(o.failure);
		}
	});
};
tink_core__$Outcome_OutcomeMapper.withEitherError = function(f) {
	return tink_core__$Outcome_OutcomeMapper._new(function(o) {
		switch(o._hx_index) {
		case 0:
			var _g = f(o.data);
			switch(_g._hx_index) {
			case 0:
				return tink_core_Outcome.Success(_g.data);
			case 1:
				return tink_core_Outcome.Failure(haxe_ds_Either.Right(_g.failure));
			}
			break;
		case 1:
			return tink_core_Outcome.Failure(haxe_ds_Either.Left(o.failure));
		}
	});
};
var tink_core_Pair = {};
tink_core_Pair._new = function(a,b) {
	var this1 = new tink_core_MPair(a,b);
	return this1;
};
tink_core_Pair.get_a = function(this1) {
	return this1.a;
};
tink_core_Pair.get_b = function(this1) {
	return this1.b;
};
tink_core_Pair.toBool = function(this1) {
	return this1 != null;
};
tink_core_Pair.isNil = function(this1) {
	return this1 == null;
};
tink_core_Pair.nil = function() {
	return null;
};
var tink_core_MPair = function(a,b) {
	this.a = a;
	this.b = b;
};
tink_core_MPair.__name__ = true;
tink_core_MPair.prototype = {
	__class__: tink_core_MPair
};
var tink_core_ProgressValue = {};
tink_core_ProgressValue._new = function(value,total) {
	var this1 = new tink_core_MPair(value,total);
	var this2 = this1;
	return this2;
};
tink_core_ProgressValue.normalize = function(this1) {
	var o = this1.b;
	if(o._hx_index == 0) {
		return haxe_ds_Option.Some(this1.a / o.v);
	} else {
		return haxe_ds_Option.None;
	}
};
tink_core_ProgressValue.get_value = function(this1) {
	return this1.a;
};
tink_core_ProgressValue.get_total = function(this1) {
	return this1.b;
};
var tink_core_Progress = {};
tink_core_Progress.listen = function(this1,cb) {
	return this1.progressed.listen(cb);
};
tink_core_Progress.handle = function(this1,cb) {
	return this1.result.handle(cb);
};
tink_core_Progress.trigger = function() {
	return new tink_core_ProgressTrigger();
};
tink_core_Progress.make = function(f) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		return f(function(value,total) {
			var this1 = new tink_core_MPair(value,total);
			var this2 = this1;
			fire(tink_core_ProgressStatus.InProgress(this2));
		},function(result) {
			fire(tink_core_ProgressStatus.Finished(result));
		});
	});
};
tink_core_Progress.map = function(this1,f) {
	return new tink_core__$Progress_ProgressObject(tink_core_Signal.map(this1.changed,function(s) {
		return tink_core_ProgressStatusTools.map(s,f);
	}),function() {
		return tink_core_ProgressStatusTools.map(this1.getStatus(),f);
	});
};
tink_core_Progress.asFuture = function(this1) {
	return this1.result;
};
tink_core_Progress.promise = function(v) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		var inner = new tink_core_CallbackLinkRef();
		return new tink_core__$Callback_LinkPair(v.handle(function(o) {
			switch(o._hx_index) {
			case 0:
				var param = o.data.changed.listen(function(s) {
					fire(tink_core_ProgressStatusTools.map(s,tink_core_Outcome.Success));
				});
				var this1 = inner.link;
				if(this1 != null) {
					this1.cancel();
				}
				inner.link = param;
				break;
			case 1:
				fire(tink_core_ProgressStatus.Finished(tink_core_Outcome.Failure(o.failure)));
				break;
			}
		}),inner);
	});
};
tink_core_Progress.flatten = function(v) {
	return tink_core_Progress.map(tink_core_Progress.promise(v),function(o) {
		switch(o._hx_index) {
		case 0:
			var _g = o.data;
			switch(_g._hx_index) {
			case 0:
				return tink_core_Outcome.Success(_g.data);
			case 1:
				return tink_core_Outcome.Failure(_g.failure);
			}
			break;
		case 1:
			return tink_core_Outcome.Failure(o.failure);
		}
	});
};
tink_core_Progress.future = function(v) {
	return new tink_core__$Progress_SuspendableProgress(function(fire) {
		var inner = new tink_core_CallbackLinkRef();
		return new tink_core__$Callback_LinkPair(v.handle(function(p) {
			var param = p.changed.listen(fire);
			var this1 = inner.link;
			if(this1 != null) {
				this1.cancel();
			}
			inner.link = param;
		}),inner);
	});
};
tink_core_Progress.next = function(this1,f) {
	return tink_core_Future.flatMap(this1.result,f);
};
var tink_core__$Progress_ProgressObject = function(changed,getStatus) {
	this.changed = changed;
	var this1 = new tink_core__$Signal_Suspendable(function(fire) {
		return changed.listen(function(s) {
			if(s._hx_index == 0) {
				fire(s.v);
			}
		});
	},null);
	this.progressed = this1;
	this.getStatus = getStatus;
	var this1 = new tink_core__$Future_SuspendableFuture(function(fire) {
		var _g = getStatus();
		if(_g._hx_index == 1) {
			fire(_g.v);
			return null;
		} else {
			return changed.listen(function(s) {
				if(s._hx_index == 1) {
					fire(s.v);
				}
			});
		}
	});
	this.result = this1;
};
tink_core__$Progress_ProgressObject.__name__ = true;
tink_core__$Progress_ProgressObject.prototype = {
	get_status: function() {
		return this.getStatus();
	}
	,__class__: tink_core__$Progress_ProgressObject
};
var tink_core__$Progress_SuspendableProgress = function(wakeup,status) {
	if(status == null) {
		status = tink_core_ProgressStatus.InProgress(tink_core_ProgressValue.ZERO);
	}
	var disposable = tink_core_AlreadyDisposed.INST;
	var changed;
	switch(status._hx_index) {
	case 0:
		var this1 = new tink_core__$Signal_Suspendable(function(fire) {
			return wakeup(function(s) {
				status = s;
				fire(status);
			});
		},function(d) {
			disposable = d;
		});
		changed = this1;
		break;
	case 1:
		changed = tink_core_Signal.dead();
		break;
	}
	tink_core__$Progress_ProgressObject.call(this,changed,function() {
		return status;
	});
};
tink_core__$Progress_SuspendableProgress.__name__ = true;
tink_core__$Progress_SuspendableProgress.__super__ = tink_core__$Progress_ProgressObject;
tink_core__$Progress_SuspendableProgress.prototype = $extend(tink_core__$Progress_ProgressObject.prototype,{
	noop: function(_,_1) {
		return null;
	}
	,__class__: tink_core__$Progress_SuspendableProgress
});
var tink_core_ProgressTrigger = function(status) {
	this._changed = null;
	var _gthis = this;
	if(status == null) {
		status = tink_core_ProgressStatus.InProgress(tink_core_ProgressValue.ZERO);
		this._status = status;
	}
	tink_core__$Progress_ProgressObject.call(this,(status == null ? false : status._hx_index == 1) ? tink_core_Signal.dead() : this._changed = tink_core_Signal.trigger(),function() {
		return _gthis._status;
	});
};
tink_core_ProgressTrigger.__name__ = true;
tink_core_ProgressTrigger.__super__ = tink_core__$Progress_ProgressObject;
tink_core_ProgressTrigger.prototype = $extend(tink_core__$Progress_ProgressObject.prototype,{
	asProgress: function() {
		return this;
	}
	,progress: function(v,total) {
		if(this._status._hx_index != 1) {
			var this1 = new tink_core_MPair(v,total);
			var this2 = this1;
			this._changed.handlers.invoke(this._status = tink_core_ProgressStatus.InProgress(this2));
		}
	}
	,finish: function(v) {
		if(this._status._hx_index != 1) {
			this._changed.handlers.invoke(this._status = tink_core_ProgressStatus.Finished(v));
		}
	}
	,__class__: tink_core_ProgressTrigger
});
var tink_core_UnitInterval = {};
tink_core_UnitInterval.toPercentageString = function(this1,dp) {
	var m = Math.pow(10,dp);
	var v = Math.round(this1 * m * 100) / m;
	var s = v == null ? "null" : "" + v;
	var _g = s.indexOf(".");
	if(_g == -1) {
		return s + "." + StringTools.lpad("","0",dp) + "%";
	} else if(s.length - _g > dp) {
		return HxOverrides.substr(s,0,dp + _g + 1) + "%";
	} else {
		return StringTools.rpad(s,"0",_g + dp + 1) + "%";
	}
};
var tink_core_ProgressStatus = $hxEnums["tink.core.ProgressStatus"] = { __ename__:true,__constructs__:null
	,InProgress: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"tink.core.ProgressStatus",toString:$estr}; },$_._hx_name="InProgress",$_.__params__ = ["v"],$_)
	,Finished: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"tink.core.ProgressStatus",toString:$estr}; },$_._hx_name="Finished",$_.__params__ = ["v"],$_)
};
tink_core_ProgressStatus.__constructs__ = [tink_core_ProgressStatus.InProgress,tink_core_ProgressStatus.Finished];
var tink_core_ProgressStatusTools = function() { };
tink_core_ProgressStatusTools.__name__ = true;
tink_core_ProgressStatusTools.map = function(p,f) {
	switch(p._hx_index) {
	case 0:
		return tink_core_ProgressStatus.InProgress(p.v);
	case 1:
		return tink_core_ProgressStatus.Finished(f(p.v));
	}
};
var tink_core_TotalTools = function() { };
tink_core_TotalTools.__name__ = true;
tink_core_TotalTools.eq = function(a,b) {
	switch(a._hx_index) {
	case 0:
		if(b._hx_index == 0) {
			return a.v == b.v;
		} else {
			return false;
		}
		break;
	case 1:
		if(b._hx_index == 1) {
			return true;
		} else {
			return false;
		}
		break;
	}
};
var tink_core_ProgressTools = function() { };
tink_core_ProgressTools.__name__ = true;
tink_core_ProgressTools.asPromise = function(p) {
	return p.result;
};
var tink_core_Promise = {};
tink_core_Promise.never = function() {
	return tink_core_Future.never();
};
tink_core_Promise._new = function(f) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return f(function(v) {
			cb(tink_core_Outcome.Success(v));
		},function(e) {
			cb(tink_core_Outcome.Failure(e));
		});
	});
	var this2 = this1;
	return this2;
};
tink_core_Promise.eager = function(this1) {
	this1.eager();
	return this1;
};
tink_core_Promise.map = function(this1,f) {
	return tink_core_Future.map(this1,f);
};
tink_core_Promise.flatMap = function(this1,f) {
	return tink_core_Future.flatMap(this1,f);
};
tink_core_Promise.tryRecover = function(this1,f) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
		case 1:
			return f(o.failure);
		}
	});
};
tink_core_Promise.recover = function(this1,f) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o.data));
		case 1:
			return f(o.failure);
		}
	});
};
tink_core_Promise.mapError = function(this1,f) {
	return tink_core_Future.map(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			return o;
		case 1:
			return tink_core_Outcome.Failure(f(o.failure));
		}
	});
};
tink_core_Promise.withSideEffect = function(this1,c) {
	var c1 = function(o) {
		if(o._hx_index == 0) {
			tink_core_Callback.invoke(c,o.data);
		}
	};
	return tink_core_Future.map(this1,function(v) {
		tink_core_Callback.invoke(c1,v);
		return v;
	});
};
tink_core_Promise.handle = function(this1,cb) {
	return this1.handle(cb);
};
tink_core_Promise.noise = function(this1) {
	if(this1.getStatus()._hx_index == 4) {
		return tink_core_Promise.never();
	} else {
		return tink_core_Promise.next(this1,function(v) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
		});
	}
};
tink_core_Promise.isSuccess = function(this1) {
	return tink_core_Future.map(this1,function(o) {
		return tink_core_OutcomeTools.isSuccess(o);
	});
};
tink_core_Promise.next = function(this1,f,gather) {
	return tink_core_Future.flatMap(this1,function(o) {
		switch(o._hx_index) {
		case 0:
			return f(o.data);
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(o.failure)));
		}
	});
};
tink_core_Promise.swap = function(this1,v) {
	return tink_core_Promise.next(this1,function(_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(v)));
	});
};
tink_core_Promise.swapError = function(this1,e) {
	return tink_core_Promise.mapError(this1,function(_) {
		return e;
	});
};
tink_core_Promise.merge = function(this1,other,merger,gather) {
	return tink_core_Future.flatMap(tink_core_Future.merge(this1,other,function(a,b) {
		switch(a._hx_index) {
		case 0:
			var _g = a.data;
			switch(b._hx_index) {
			case 0:
				return merger(_g,b.data);
			case 1:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(b.failure)));
			}
			break;
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(a.failure)));
		}
	}),function(o) {
		return o;
	});
};
tink_core_Promise.irreversible = function(f) {
	var f1 = function(res,rej) {
		f(res,rej);
		return null;
	};
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return f1(function(v) {
			cb(tink_core_Outcome.Success(v));
		},function(e) {
			cb(tink_core_Outcome.Failure(e));
		});
	});
	var this2 = this1;
	return this2;
};
tink_core_Promise.and = function(a,b) {
	return tink_core_Promise.merge(a,b,function(a,b) {
		var this1 = new tink_core_MPair(a,b);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(this1)));
	});
};
tink_core_Promise.iterate = function(promises,$yield,fallback,fallThroughOnError) {
	if(fallThroughOnError == null) {
		fallThroughOnError = false;
	}
	return tink_core_Future.irreversible(function(cb) {
		var iter = $getIterator(promises);
		var next = null;
		next = function() {
			if(iter.hasNext()) {
				iter.next().handle(function(o) {
					switch(o._hx_index) {
					case 0:
						$yield(o.data).handle(function(o) {
							switch(o._hx_index) {
							case 0:
								var _g = o.data;
								switch(_g._hx_index) {
								case 0:
									cb(tink_core_Outcome.Success(_g.v));
									break;
								case 1:
									next();
									break;
								}
								break;
							case 1:
								cb(tink_core_Outcome.Failure(o.failure));
								break;
							}
						});
						break;
					case 1:
						if(fallThroughOnError) {
							next();
						} else {
							cb(tink_core_Outcome.Failure(o.failure));
						}
						break;
					}
				});
			} else {
				fallback.handle(cb);
			}
		};
		next();
	});
};
tink_core_Promise.retry = function(gen,next) {
	var stamp = function() {
		var hrtime = process.hrtime();
		return (hrtime[0] + hrtime[1] / 1e9) * 1000;
	};
	var start = stamp();
	var attempt = null;
	attempt = function(count) {
		var f = function(error) {
			return tink_core_Promise.next(next({ attempt : count, error : error, elapsed : stamp() - start}),function(_) {
				return attempt(count + 1);
			});
		};
		return tink_core_Future.flatMap(gen(),function(o) {
			switch(o._hx_index) {
			case 0:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
			case 1:
				return f(o.failure);
			}
		});
	};
	return attempt(1);
};
tink_core_Promise.ofJsPromise = function(promise,transformError) {
	return tink_core_Future.ofJsPromise(promise,transformError);
};
tink_core_Promise.fromJsPromise = function(promise) {
	return tink_core_Future.ofJsPromise(promise);
};
tink_core_Promise.toJsPromise = function(this1) {
	return new Promise(function(resolve,reject) {
		this1.handle(function(o) {
			switch(o._hx_index) {
			case 0:
				resolve(o.data);
				break;
			case 1:
				reject(o.failure.toJsError());
				break;
			}
		});
	});
};
tink_core_Promise.ofSpecific = function(s) {
	return s;
};
tink_core_Promise.fromNever = function(l) {
	return l;
};
tink_core_Promise.ofTrigger = function(f) {
	return f;
};
tink_core_Promise.ofHappyTrigger = function(f) {
	return tink_core_Future.map(f,tink_core_Outcome.Success);
};
tink_core_Promise.ofFuture = function(f) {
	return tink_core_Future.map(f,tink_core_Outcome.Success);
};
tink_core_Promise.ofOutcome = function(o) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o));
};
tink_core_Promise.ofError = function(e) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
};
tink_core_Promise.ofData = function(d) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(d)));
};
tink_core_Promise.asFuture = function(this1) {
	return this1;
};
tink_core_Promise.lazy = function(p) {
	var this1 = new tink_core__$Future_SuspendableFuture(function(cb) {
		return tink_core_Lazy.get(p).handle(cb);
	});
	return this1;
};
tink_core_Promise.inParallel = function(a,concurrency) {
	return tink_core_Promise.many(a,concurrency);
};
tink_core_Promise.many = function(a,concurrency) {
	return tink_core_Future.processMany(a,concurrency,function(o) {
		return o;
	},function(o) {
		return o;
	});
};
tink_core_Promise.inSequence = function(a) {
	return tink_core_Promise.many(a,1);
};
tink_core_Promise.cache = function(gen) {
	var p = null;
	return function() {
		var ret = p;
		if(ret == null) {
			var sync = false;
			ret = tink_core_Promise.next(gen(),function(o) {
				o.b.handle(function(_) {
					sync = true;
					p = null;
				});
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(o.a)));
			});
			if(!sync) {
				p = ret;
			}
		}
		return tink_core_Future.map(ret,function(o) {
			if(!tink_core_OutcomeTools.isSuccess(o)) {
				p = null;
			}
			return o;
		});
	};
};
tink_core_Promise.lift = function(p) {
	return p;
};
tink_core_Promise.trigger = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
tink_core_Promise.resolve = function(v) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(v)));
};
tink_core_Promise.reject = function(e) {
	return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(e)));
};
var tink_core_Next = {};
tink_core_Next.ofSafe = function(f) {
	return function(x) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(x)));
	};
};
tink_core_Next.ofSync = function(f) {
	return function(x) {
		return tink_core_Future.map(f(x),tink_core_Outcome.Success);
	};
};
tink_core_Next.ofSafeSync = function(f) {
	return function(x) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(f(x))));
	};
};
tink_core_Next._chain = function(a,b) {
	return function(v) {
		return tink_core_Promise.next(a(v),b);
	};
};
var tink_core_Recover = {};
tink_core_Recover.ofSync = function(f) {
	return function(e) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(e)));
	};
};
var tink_core_Combiner = {};
tink_core_Combiner.ofSync = function(f) {
	return function(x1,x2) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(x1,x2)));
	};
};
tink_core_Combiner.ofSafe = function(f) {
	return function(x1,x2) {
		return tink_core_Future.map(f(x1,x2),tink_core_Outcome.Success);
	};
};
tink_core_Combiner.ofSafeSync = function(f) {
	return function(x1,x2) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(f(x1,x2))));
	};
};
var tink_core_PromiseTrigger = {};
tink_core_PromiseTrigger._new = function() {
	var this1 = new tink_core_FutureTrigger();
	return this1;
};
tink_core_PromiseTrigger.resolve = function(this1,v) {
	return this1.trigger(tink_core_Outcome.Success(v));
};
tink_core_PromiseTrigger.reject = function(this1,e) {
	return this1.trigger(tink_core_Outcome.Failure(e));
};
tink_core_PromiseTrigger.asPromise = function(this1) {
	return this1;
};
var tink_core_Ref = {};
tink_core_Ref._new = function() {
	var this1 = new Array(1);
	var this2 = this1;
	return this2;
};
tink_core_Ref.get_value = function(this1) {
	return this1[0];
};
tink_core_Ref.set_value = function(this1,param) {
	return this1[0] = param;
};
tink_core_Ref.toString = function(this1) {
	return "@[" + Std.string(this1[0]) + "]";
};
tink_core_Ref.to = function(v) {
	var this1 = new Array(1);
	var this2 = this1;
	var ret = this2;
	ret[0] = v;
	return ret;
};
var tink_core_Gather = {};
tink_core_Gather._new = function(v) {
	return v;
};
tink_core_Gather.ofBool = function(b) {
	return b;
};
var tink_core_Signal = {};
tink_core_Signal._new = function(f,init) {
	var this1 = new tink_core__$Signal_Suspendable(f,init);
	return this1;
};
tink_core_Signal.handle = function(this1,handler) {
	return this1.listen(handler);
};
tink_core_Signal.map = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			fire(f(v));
		});
	});
};
tink_core_Signal.flatMap = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			f(v).handle(fire);
		});
	});
};
tink_core_Signal.filter = function(this1,f,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			if(f(v)) {
				fire(v);
			}
		});
	});
};
tink_core_Signal.select = function(this1,selector,gather) {
	return tink_core__$Signal_Suspendable.over(this1,function(fire) {
		return this1.listen(function(v) {
			var _g = selector(v);
			if(_g._hx_index == 0) {
				fire(_g.v);
			}
		});
	});
};
tink_core_Signal.join = function(this1,that,gather) {
	if(this1.get_disposed()) {
		return that;
	} else if(that.get_disposed()) {
		return this1;
	} else {
		return new tink_core__$Signal_Suspendable(function(fire) {
			var cb = fire;
			return new tink_core__$Callback_LinkPair(this1.listen(cb),that.listen(cb));
		},function(self) {
			var release = function() {
				if(this1.get_disposed() && that.get_disposed()) {
					self.dispose();
				}
			};
			this1.ondispose(release);
			that.ondispose(release);
		});
	}
};
tink_core_Signal.nextTime = function(this1,condition) {
	return tink_core_Signal.pickNext(this1,function(v) {
		if(condition == null || condition(v)) {
			return haxe_ds_Option.Some(v);
		} else {
			return haxe_ds_Option.None;
		}
	});
};
tink_core_Signal.pickNext = function(this1,selector) {
	var ret = new tink_core_FutureTrigger();
	var link = null;
	link = this1.listen(function(v) {
		var _g = selector(v);
		switch(_g._hx_index) {
		case 0:
			ret.trigger(_g.v);
			break;
		case 1:
			break;
		}
	});
	ret.handle(link == null ? tink_core_CallbackLink.noop : ($_=link,$bind($_,$_.cancel)));
	return ret;
};
tink_core_Signal.until = function(this1,end) {
	return new tink_core__$Signal_Suspendable(function($yield) {
		return this1.listen($yield);
	},function(self) {
		end.handle($bind(self,self.dispose));
	});
};
tink_core_Signal.next = function(this1,condition) {
	return tink_core_Signal.nextTime(this1,condition);
};
tink_core_Signal.noise = function(this1) {
	return tink_core_Signal.map(this1,function(_) {
		return null;
	});
};
tink_core_Signal.gather = function(this1) {
	return this1;
};
tink_core_Signal.create = function(f) {
	var this1 = new tink_core__$Signal_Suspendable(f,null);
	return this1;
};
tink_core_Signal.generate = function(generator,init) {
	var this1 = new tink_core__$Signal_Suspendable(function(fire) {
		generator(fire);
		return null;
	},init);
	return this1;
};
tink_core_Signal.trigger = function() {
	return new tink_core_SignalTrigger();
};
tink_core_Signal.ofClassical = function(add,remove,gather) {
	return new tink_core__$Signal_Suspendable(function(fire) {
		add(fire);
		var _g = remove;
		var a1 = fire;
		var this1 = new tink_core_SimpleLink(function() {
			_g(a1);
		});
		return this1;
	});
};
tink_core_Signal.dead = function() {
	return tink_core__$Signal_Disposed.INST;
};
var tink_core__$Signal_SignalObject = function() { };
tink_core__$Signal_SignalObject.__name__ = true;
tink_core__$Signal_SignalObject.__isInterface__ = true;
tink_core__$Signal_SignalObject.__interfaces__ = [tink_core_Disposable];
tink_core__$Signal_SignalObject.prototype = {
	__class__: tink_core__$Signal_SignalObject
};
var tink_core__$Signal_Disposed = function() {
	tink_core_AlreadyDisposed.call(this);
};
tink_core__$Signal_Disposed.__name__ = true;
tink_core__$Signal_Disposed.__interfaces__ = [tink_core__$Signal_SignalObject];
tink_core__$Signal_Disposed.__super__ = tink_core_AlreadyDisposed;
tink_core__$Signal_Disposed.prototype = $extend(tink_core_AlreadyDisposed.prototype,{
	listen: function(cb) {
		return null;
	}
	,__class__: tink_core__$Signal_Disposed
});
var tink_core__$Signal_Suspendable = function(activate,init) {
	this.handlers = new tink_core_CallbackList();
	var _gthis = this;
	this.activate = activate;
	this.init = init;
	this.handlers.ondrain = function() {
		var this1 = _gthis.subscription;
		if(this1 != null) {
			this1.cancel();
		}
	};
	this.handlers.onfill = function() {
		if(init != null) {
			var f = init;
			init = null;
			f(_gthis);
		}
		_gthis.subscription = activate(($_=_gthis.handlers,$bind($_,$_.invoke)));
	};
};
tink_core__$Signal_Suspendable.__name__ = true;
tink_core__$Signal_Suspendable.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core__$Signal_Suspendable.over = function(s,activate) {
	if(s.get_disposed()) {
		return tink_core_Signal.dead();
	} else {
		var ret = new tink_core__$Signal_Suspendable(activate);
		s.ondispose($bind(ret,ret.dispose));
		return ret;
	}
};
tink_core__$Signal_Suspendable.prototype = {
	get_disposed: function() {
		return this.handlers.disposeHandlers == null;
	}
	,dispose: function() {
		this.handlers.dispose();
	}
	,ondispose: function(handler) {
		this.handlers.ondispose(handler);
	}
	,listen: function(cb) {
		var _this = this.handlers;
		if(_this.disposeHandlers == null) {
			return null;
		} else {
			var node = new tink_core__$Callback_ListCell(cb,_this);
			_this.cells.push(node);
			if(_this.used++ == 0) {
				var fn = _this.onfill;
				if(tink_core_Callback.depth < 500) {
					tink_core_Callback.depth++;
					fn();
					tink_core_Callback.depth--;
				} else {
					tink_core_Callback.defer(fn);
				}
			}
			return node;
		}
	}
	,__class__: tink_core__$Signal_Suspendable
};
var tink_core_SignalTrigger = function() {
	this.handlers = new tink_core_CallbackList();
};
tink_core_SignalTrigger.__name__ = true;
tink_core_SignalTrigger.__interfaces__ = [tink_core_OwnedDisposable,tink_core__$Signal_SignalObject];
tink_core_SignalTrigger.prototype = {
	get_disposed: function() {
		return this.handlers.disposeHandlers == null;
	}
	,dispose: function() {
		this.handlers.dispose();
	}
	,ondispose: function(d) {
		this.handlers.ondispose(d);
	}
	,trigger: function(event) {
		this.handlers.invoke(event);
	}
	,getLength: function() {
		return this.handlers.used;
	}
	,listen: function(cb) {
		var _this = this.handlers;
		if(_this.disposeHandlers == null) {
			return null;
		} else {
			var node = new tink_core__$Callback_ListCell(cb,_this);
			_this.cells.push(node);
			if(_this.used++ == 0) {
				var fn = _this.onfill;
				if(tink_core_Callback.depth < 500) {
					tink_core_Callback.depth++;
					fn();
					tink_core_Callback.depth--;
				} else {
					tink_core_Callback.defer(fn);
				}
			}
			return node;
		}
	}
	,clear: function() {
		this.handlers.clear();
	}
	,asSignal: function() {
		return this;
	}
	,__class__: tink_core_SignalTrigger
};
var tink_http_Chunked = function() { };
tink_http_Chunked.__name__ = true;
tink_http_Chunked.encoder = function() {
	if(tink_http_Chunked._encoder == null) {
		tink_http_Chunked._encoder = new tink_http_ChunkedEncoder();
	}
	return tink_http_Chunked._encoder;
};
tink_http_Chunked.decoder = function() {
	if(tink_http_Chunked._decoder == null) {
		tink_http_Chunked._decoder = new tink_http_ChunkedDecoder();
	}
	return tink_http_Chunked._decoder;
};
tink_http_Chunked.encode = function(source) {
	return tink_http_Chunked.encoder().transform(source);
};
tink_http_Chunked.decode = function(source) {
	return tink_http_Chunked.decoder().transform(source);
};
var tink_io_Transformer = function() { };
tink_io_Transformer.__name__ = true;
tink_io_Transformer.__isInterface__ = true;
tink_io_Transformer.prototype = {
	__class__: tink_io_Transformer
};
var tink_http_ChunkedEncoder = function() {
};
tink_http_ChunkedEncoder.__name__ = true;
tink_http_ChunkedEncoder.__interfaces__ = [tink_io_Transformer];
tink_http_ChunkedEncoder.prototype = {
	transform: function(source) {
		return tink_io_Source.chunked(source).map(tink_streams_Mapping.ofPlain(function(chunk) {
			return tink_Chunk.concat(tink_Chunk.concat(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString("" + StringTools.hex(chunk.getLength()) + "\r\n")),chunk),tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString("\r\n")));
		})).append(tink_streams_Stream.single(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString("0\r\n\r\n"))));
	}
	,__class__: tink_http_ChunkedEncoder
};
var tink_http_ChunkedDecoder = function() {
};
tink_http_ChunkedDecoder.__name__ = true;
tink_http_ChunkedDecoder.__interfaces__ = [tink_io_Transformer];
tink_http_ChunkedDecoder.prototype = {
	transform: function(source) {
		return tink_io_RealSourceTools.parseStream(source,new tink_http_ChunkedParser()).map(tink_streams_Mapping.ofPlain(function(v) {
			if(v == null) {
				return tink_Chunk.EMPTY;
			} else {
				return v;
			}
		}));
	}
	,__class__: tink_http_ChunkedDecoder
};
var tink_io_StreamParserObject = function() { };
tink_io_StreamParserObject.__name__ = true;
tink_io_StreamParserObject.__isInterface__ = true;
tink_io_StreamParserObject.prototype = {
	__class__: tink_io_StreamParserObject
};
var tink_http_ChunkedParser = function() {
	this.lastChunkSize = -1;
	this.reset();
};
tink_http_ChunkedParser.__name__ = true;
tink_http_ChunkedParser.__interfaces__ = [tink_io_StreamParserObject];
tink_http_ChunkedParser.min = function(a,b) {
	if(a > b) {
		return b;
	} else {
		return a;
	}
};
tink_http_ChunkedParser.prototype = {
	reset: function() {
		this.lastChunkSize = this.chunkSize;
		this.chunkSize = -1;
	}
	,progress: function(cursor) {
		if(this.chunkSize < 0) {
			var _g = cursor.seek(tink_http_ChunkedParser.LINEBREAK);
			switch(_g._hx_index) {
			case 0:
				var _g1 = _g.v;
				this.remaining = this.chunkSize = Std.parseInt("0x" + (_g1 == null ? "null" : _g1.toString()));
				break;
			case 1:
				break;
			}
			return tink_io_ParseStep.Progressed;
		} else {
			var a = cursor.length;
			var b = this.remaining;
			var length = a > b ? b : a;
			var data = cursor.sweep(length);
			this.remaining -= length;
			if(this.remaining == 0) {
				if(cursor.currentByte == 13 && cursor.next() && cursor.currentByte == 10) {
					cursor.next();
					this.reset();
					return tink_io_ParseStep.Done(data);
				} else {
					return tink_io_ParseStep.Failed(new tink_core_TypedError(null,"Invalid encoding, expected line break",{ fileName : "tink/http/Chunked.hx", lineNumber : 90, className : "tink.http.ChunkedParser", methodName : "progress"}));
				}
			} else {
				return tink_io_ParseStep.Done(data);
			}
		}
	}
	,eof: function(rest) {
		if(this.chunkSize == -1 && this.lastChunkSize == 0) {
			return tink_core_Outcome.Success(tink_Chunk.EMPTY);
		} else {
			return tink_core_Outcome.Failure(new tink_core_TypedError(null,"Unexpected end of input",{ fileName : "tink/http/Chunked.hx", lineNumber : 99, className : "tink.http.ChunkedParser", methodName : "eof"}));
		}
	}
	,__class__: tink_http_ChunkedParser
};
var tink_http_Client = {};
tink_http_Client.fetch = function(url,options) {
	return tink_http_Fetch.fetch(url,options);
};
tink_http_Client.augment = function(this1,pipeline) {
	return tink_http__$Client_CustomClient.create(this1,pipeline.before,pipeline.after);
};
var tink_http_ClientObject = function() { };
tink_http_ClientObject.__name__ = true;
tink_http_ClientObject.__isInterface__ = true;
tink_http_ClientObject.prototype = {
	__class__: tink_http_ClientObject
};
var tink_http__$Client_CustomClient = function(preprocessors,postprocessors,real) {
	this.preprocessors = preprocessors;
	this.postprocessors = postprocessors;
	this.real = real;
};
tink_http__$Client_CustomClient.__name__ = true;
tink_http__$Client_CustomClient.__interfaces__ = [tink_http_ClientObject];
tink_http__$Client_CustomClient.concat = function(a,b) {
	if(a == null) {
		return b;
	} else if(b == null) {
		return a;
	} else {
		return a.concat(b);
	}
};
tink_http__$Client_CustomClient.create = function(c,preprocessors,postprocessors) {
	var _g = ((c) instanceof tink_http__$Client_CustomClient) ? c : null;
	if(_g == null) {
		return new tink_http__$Client_CustomClient(preprocessors,postprocessors,c);
	} else {
		var v = _g;
		return new tink_http__$Client_CustomClient(tink_http__$Client_CustomClient.concat(preprocessors,v.preprocessors),tink_http__$Client_CustomClient.concat(v.postprocessors,postprocessors),v.real);
	}
};
tink_http__$Client_CustomClient.prototype = {
	pipe: function(value,transforms,index) {
		if(index == null) {
			index = 0;
		}
		if(transforms != null && index < transforms.length) {
			var _g = $bind(this,this.pipe);
			var transforms1 = transforms;
			var index1 = index + 1;
			var tmp = function(value) {
				return _g(value,transforms1,index1);
			};
			return tink_core_Promise.next(transforms[index](value),tmp);
		} else {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(value)));
		}
	}
	,request: function(req) {
		var _gthis = this;
		return tink_core_Promise.next(this.pipe(req,this.preprocessors),function(req) {
			var tmp = _gthis.real.request(req);
			var _g = $bind(_gthis,_gthis.pipe);
			var transforms;
			if(_gthis.postprocessors == null) {
				transforms = null;
			} else {
				var _g1 = [];
				var _g2 = 0;
				var _g3 = _gthis.postprocessors;
				while(_g2 < _g3.length) {
					var p = _g3[_g2];
					++_g2;
					_g1.push(p(req));
				}
				transforms = _g1;
			}
			return tink_core_Promise.next(tmp,function(value) {
				return _g(value,transforms);
			});
		});
	}
	,__class__: tink_http__$Client_CustomClient
};
var tink_http_Container = function() { };
tink_http_Container.__name__ = true;
tink_http_Container.__isInterface__ = true;
tink_http_Container.prototype = {
	__class__: tink_http_Container
};
var tink_http_ContainerResult = $hxEnums["tink.http.ContainerResult"] = { __ename__:true,__constructs__:null
	,Running: ($_=function(running) { return {_hx_index:0,running:running,__enum__:"tink.http.ContainerResult",toString:$estr}; },$_._hx_name="Running",$_.__params__ = ["running"],$_)
	,Failed: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.http.ContainerResult",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["e"],$_)
	,Shutdown: {_hx_name:"Shutdown",_hx_index:2,__enum__:"tink.http.ContainerResult",toString:$estr}
};
tink_http_ContainerResult.__constructs__ = [tink_http_ContainerResult.Running,tink_http_ContainerResult.Failed,tink_http_ContainerResult.Shutdown];
var tink_http_Fetch = function() { };
tink_http_Fetch.__name__ = true;
tink_http_Fetch.fetch = function(url,options) {
	return tink_core_Future.async(function(cb) {
		var method = "GET";
		var headers = null;
		var body = tink_io_Source.EMPTY;
		var type = tink_http_ClientType.Default;
		var followRedirect = true;
		if(options != null) {
			if(options.method != null) {
				method = options.method;
			}
			if(options.headers != null) {
				headers = options.headers;
			}
			if(options.body != null) {
				body = options.body;
			}
			if(options.client != null) {
				type = options.client;
			}
			if(options.followRedirect == false) {
				followRedirect = false;
			}
		}
		var client = tink_http_Fetch.getClient(type);
		if(options != null && options.augment != null) {
			var pipeline = options.augment;
			client = tink_http__$Client_CustomClient.create(client,pipeline.before,pipeline.after);
		}
		client.request(new tink_http_OutgoingRequest(new tink_http_OutgoingRequestHeader(method,url,null,headers),body)).handle(function(res) {
			switch(res._hx_index) {
			case 0:
				var _g = res.data;
				var _g1 = _g.header.statusCode;
				switch(_g1) {
				case 301:case 302:case 303:case 307:case 308:
					var code = _g1;
					if(followRedirect) {
						tink_core_Promise.next(new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(_g.header.byName("location".toLowerCase()))),function(location) {
							var this1 = tink_Url.resolve(url,tink_Url.fromString(location));
							var this2;
							if(code == 303) {
								var o = Reflect.copy(options);
								o.method = "GET";
								this2 = o;
							} else {
								this2 = options;
							}
							return tink_http_Fetch.fetch(this1,this2);
						}).handle(cb);
					} else {
						cb(tink_core_Outcome.Success(_g));
					}
					break;
				default:
					cb(tink_core_Outcome.Success(_g));
				}
				break;
			case 1:
				cb(tink_core_Outcome.Failure(res.failure));
				break;
			}
		});
	});
};
tink_http_Fetch.getClient = function(type) {
	if(!tink_http_Fetch.cache.exists(type)) {
		var c;
		switch(type._hx_index) {
		case 0:
			c = new tink_http_clients_NodeClient();
			break;
		case 1:
			c = new tink_http_clients_LocalContainerClient(type.container);
			break;
		case 2:
			c = new tink_http_clients_CurlClient();
			break;
		case 3:
			c = new tink_http_clients_StdClient();
			break;
		case 4:
			c = type.v;
			break;
		}
		tink_http_Fetch.cache.set(type,c);
	}
	return tink_http_Fetch.cache.get(type);
};
var tink_http_ClientType = $hxEnums["tink.http.ClientType"] = { __ename__:true,__constructs__:null
	,Default: {_hx_name:"Default",_hx_index:0,__enum__:"tink.http.ClientType",toString:$estr}
	,Local: ($_=function(container) { return {_hx_index:1,container:container,__enum__:"tink.http.ClientType",toString:$estr}; },$_._hx_name="Local",$_.__params__ = ["container"],$_)
	,Curl: {_hx_name:"Curl",_hx_index:2,__enum__:"tink.http.ClientType",toString:$estr}
	,StdLib: {_hx_name:"StdLib",_hx_index:3,__enum__:"tink.http.ClientType",toString:$estr}
	,Custom: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"tink.http.ClientType",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["v"],$_)
};
tink_http_ClientType.__constructs__ = [tink_http_ClientType.Default,tink_http_ClientType.Local,tink_http_ClientType.Curl,tink_http_ClientType.StdLib,tink_http_ClientType.Custom];
var tink_http_FetchResponse = {};
tink_http_FetchResponse.all = function(this1) {
	return tink_core_Promise.next(this1,function(r) {
		return tink_core_Promise.next(tink_io_RealSourceTools.all(r.body),function(chunk) {
			if(r.header.statusCode >= 400) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(tink_core_TypedError.withData(r.header.statusCode,r.header.reason,chunk.toString(),{ fileName : "tink/http/Fetch.hx", lineNumber : 124, className : "tink.http._Fetch.FetchResponse_Impl_", methodName : "all"}))));
			} else {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(new tink_http_Message(r.header,chunk))));
			}
		});
	});
};
tink_http_FetchResponse.progress = function(this1) {
	return tink_core_Promise.next(this1,function(r) {
		if(r.header.statusCode >= 400) {
			return tink_core_Promise.next(tink_io_RealSourceTools.all(r.body),function(chunk) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(tink_core_TypedError.withData(r.header.statusCode,r.header.reason,chunk.toString(),{ fileName : "tink/http/Fetch.hx", lineNumber : 136, className : "tink.http._Fetch.FetchResponse_Impl_", methodName : "progress"}))));
			});
		} else {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(new tink_http_Message(r.header,tink_core_Progress.make(function(progress,finish) {
				var total;
				var _g = r.header.getContentLength();
				switch(_g._hx_index) {
				case 0:
					total = haxe_ds_Option.Some(_g.data);
					break;
				case 1:
					total = haxe_ds_Option.None;
					break;
				}
				var chunk = tink_Chunk.EMPTY;
				progress(chunk.getLength(),total);
				return tink_io_Source.chunked(r.body).forEach(tink_streams_Handler.ofSafe(function(part) {
					chunk = tink_Chunk.concat(chunk,part);
					progress(chunk.getLength(),total);
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
				})).handle(function(o) {
					switch(o._hx_index) {
					case 0:
						finish(tink_core_Outcome.Failure(new tink_core_TypedError(null,"unreachable",{ fileName : "tink/http/Fetch.hx", lineNumber : 156, className : "tink.http._Fetch.FetchResponse_Impl_", methodName : "progress"})));
						break;
					case 2:
						finish(tink_core_Outcome.Failure(o.error));
						break;
					case 3:
						finish(tink_core_Outcome.Success(chunk));
						break;
					}
				});
			})))));
		}
	});
};
var tink_http_Handler = {};
tink_http_Handler.ofFunc = function(f) {
	return new tink_http_SimpleHandler(f);
};
tink_http_Handler.toNodeHandler = function(this1,options) {
	var body = options == null ? function(msg) {
		var options = null;
		options = { };
		return tink_http_IncomingRequestBody.Plain(tink_io_nodejs_NodejsSource.wrap("Incoming HTTP message from " + msg.socket.remoteAddress,msg,options.chunkSize,options.onEnd));
	} : options.body == null ? function(msg) {
		var options = null;
		options = { };
		return tink_http_IncomingRequestBody.Plain(tink_io_nodejs_NodejsSource.wrap("Incoming HTTP message from " + msg.socket.remoteAddress,msg,options.chunkSize,options.onEnd));
	} : options.body;
	return function(req,res) {
		this1.process(new tink_http_IncomingRequest(req.socket.remoteAddress,tink_http_IncomingRequestHeader.fromIncomingMessage(req),body(req))).handle(function(out) {
			var headers_h = Object.create(null);
			var _this = out.header.fields;
			var _g1_current = 0;
			while(_g1_current < _this.length) {
				var h = _this[_g1_current++];
				if(!Object.prototype.hasOwnProperty.call(headers_h,h.name)) {
					var v = [];
					headers_h[h.name] = v;
				}
				headers_h[h.name].push(h.value);
			}
			var name = new haxe_ds__$StringMap_StringMapKeyIterator(headers_h);
			while(name.hasNext()) {
				var name1 = name.next();
				res.setHeader(name1,headers_h[name1]);
			}
			res.writeHead(out.header.statusCode,out.header.reason);
			tink_io_Source.pipeTo(out.body,tink_io_nodejs_NodejsSink.wrap("Outgoing HTTP response to " + req.socket.remoteAddress,res)).handle(function(x) {
				res.end();
			});
		});
	};
};
var tink_http_HandlerObject = function() { };
tink_http_HandlerObject.__name__ = true;
tink_http_HandlerObject.__isInterface__ = true;
tink_http_HandlerObject.prototype = {
	__class__: tink_http_HandlerObject
};
var tink_http_SimpleHandler = function(f) {
	this.f = f;
};
tink_http_SimpleHandler.__name__ = true;
tink_http_SimpleHandler.__interfaces__ = [tink_http_HandlerObject];
tink_http_SimpleHandler.prototype = {
	process: function(req) {
		return this.f(req);
	}
	,__class__: tink_http_SimpleHandler
};
var tink_http_ReadonlyMap = {};
tink_http_ReadonlyMap.get = function(this1,key) {
	return this1.get(key);
};
tink_http_ReadonlyMap.exists = function(this1,key) {
	return this1.exists(key);
};
tink_http_ReadonlyMap.iterator = function(this1) {
	return this1.iterator();
};
tink_http_ReadonlyMap.keys = function(this1) {
	return this1.keys();
};
var tink_http_ContentType = function() {
	this.subtype = "*";
	this.type = "*";
	this.extensions = new haxe_ds_StringMap();
};
tink_http_ContentType.__name__ = true;
tink_http_ContentType.ofString = function(s) {
	var ret = new tink_http_ContentType();
	ret.raw = s;
	var parsed = tink_http_HeaderValue.parse(s);
	var value = parsed[0].value;
	var _g = value.indexOf("/");
	if(_g == -1) {
		ret.type = value;
	} else {
		ret.type = value.substring(0,_g);
		ret.subtype = value.substring(_g + 1);
	}
	ret.extensions = parsed[0].extensions;
	return ret;
};
tink_http_ContentType.prototype = {
	get_fullType: function() {
		return "" + this.type + "/" + this.subtype;
	}
	,toString: function() {
		return this.raw;
	}
	,__class__: tink_http_ContentType
};
var tink_http_Header = function(fields) {
	this.fields = fields == null ? [] : fields;
};
tink_http_Header.__name__ = true;
tink_http_Header.prototype = {
	get: function(name) {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.fields;
		while(_g1 < _g2.length) {
			var f = _g2[_g1];
			++_g1;
			if(f.name == name) {
				_g.push(f.value);
			}
		}
		return _g;
	}
	,byName: function(name) {
		var _g = this.get(name);
		switch(_g.length) {
		case 0:
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"No " + name + " header found",{ fileName : "tink/http/Header.hx", lineNumber : 91, className : "tink.http.Header", methodName : "byName"}));
		case 1:
			return tink_core_Outcome.Success(_g[0]);
		default:
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Multiple entries for " + name + " header",{ fileName : "tink/http/Header.hx", lineNumber : 95, className : "tink.http.Header", methodName : "byName"}));
		}
	}
	,contentType: function() {
		return tink_core_OutcomeTools.map(this.byName("content-type"),tink_http_ContentType.ofString);
	}
	,iterator: function() {
		return new haxe_iterators_ArrayIterator(this.fields);
	}
	,concat: function(fields) {
		return new tink_http_Header(this.fields.concat(fields));
	}
	,getContentLength: function() {
		var _g = this.byName("content-length");
		switch(_g._hx_index) {
		case 0:
			var _hx_tmp = Std.parseInt(_g.data);
			if(_hx_tmp == null) {
				return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Invalid Content-Length Header",{ fileName : "tink/http/Header.hx", lineNumber : 120, className : "tink.http.Header", methodName : "getContentLength"}));
			} else {
				return tink_core_Outcome.Success(_hx_tmp);
			}
			break;
		case 1:
			return tink_core_Outcome.Failure(_g.failure);
		}
	}
	,accepts: function(type) {
		var prefix = type.split("/")[0];
		return tink_core_OutcomeTools.map(this.byName("accept"),function(v) {
			var _g = 0;
			var _g1 = tink_http_HeaderValue.parse(v);
			while(_g < _g1.length) {
				var entry = _g1[_g];
				++_g;
				if(entry.value == "*/*" || entry.value == type) {
					return true;
				}
				var _g2 = entry.value.split("/");
				if(_g2.length == 2) {
					if(_g2[1] == "*") {
						if(prefix == _g2[0]) {
							return true;
						}
					}
				}
			}
			return false;
		});
	}
	,get_LINEBREAK: function() {
		return "\r\n";
	}
	,toString: function() {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.fields;
		while(_g1 < _g2.length) {
			var f = _g2[_g1];
			++_g1;
			_g.push(f.toString());
		}
		return _g.join("\r\n") + "\r\n" + "\r\n";
	}
	,headerNotFound: function(name) {
		return "No " + name + " header found";
	}
	,__class__: tink_http_Header
};
var tink_http_HeaderValue = {};
tink_http_HeaderValue.getExtension = function(this1) {
	return tink_http_HeaderValue.parse(this1)[0].extensions;
};
tink_http_HeaderValue.parse = function(this1) {
	return tink_http_HeaderValue.parseWith(this1,function(_,params) {
		var _g = new haxe_ds_StringMap();
		while(params.hasNext()) {
			var p = params.next();
			var key = p.name;
			var _g1 = tink_url_Portion.toString(p.value);
			_g.h[key] = HxOverrides.cca(_g1,0) == 34 ? HxOverrides.substr(_g1,1,_g1.length - 2) : _g1;
		}
		return _g;
	});
};
tink_http_HeaderValue.parseWith = function(this1,parseExtension) {
	var _g = [];
	var _g1 = 0;
	var _g2 = this1.split(",");
	while(_g1 < _g2.length) {
		var v = _g2[_g1];
		++_g1;
		v = StringTools.trim(v);
		var _g3 = v.indexOf(";");
		var i = _g3 == -1 ? v.length : _g3;
		var value = HxOverrides.substr(v,0,i);
		var pos = i + 1;
		if(pos == null) {
			pos = 0;
		}
		_g.push({ value : value, extensions : parseExtension(value,new tink_url__$Query_QueryStringParser(v,";","=",pos))});
	}
	return _g;
};
tink_http_HeaderValue.basicAuth = function(username,password) {
	return "Basic " + haxe_crypto_Base64.encode(haxe_io_Bytes.ofString("" + username + ":" + password)).toString();
};
tink_http_HeaderValue.ofDate = function(d) {
	return DateTools.format(d,tink_http_HeaderValue.DAYS[d.getDay()] + ", %d " + tink_http_HeaderValue.MONTHS[d.getMonth()] + " %Y %H:%M:%S GMT");
};
tink_http_HeaderValue.ofInt = function(i) {
	if(i == null) {
		return "null";
	} else {
		return "" + i;
	}
};
var tink_http_HeaderName = {};
tink_http_HeaderName._new = function(s) {
	return s;
};
tink_http_HeaderName.ofString = function(s) {
	return s.toLowerCase();
};
var tink_http_HeaderField = function(name,value) {
	tink_core_NamedWith.call(this,name,value);
};
tink_http_HeaderField.__name__ = true;
tink_http_HeaderField.ofString = function(s) {
	var _g = s.indexOf(":");
	if(_g == -1) {
		return new tink_http_HeaderField(s.toLowerCase(),null);
	} else {
		return new tink_http_HeaderField(HxOverrides.substr(s,0,_g).toLowerCase(),StringTools.trim(HxOverrides.substr(s,_g + 1,null)));
	}
};
tink_http_HeaderField.setCookie = function(key,value,options) {
	if(options == null) {
		options = { };
	}
	var buf_b = "";
	buf_b += Std.string(encodeURIComponent(key) + "=" + encodeURIComponent(value));
	if(options.expires != null) {
		var value = tink_http_HeaderValue.ofDate(options.expires);
		if(value != null) {
			buf_b += "; ";
			buf_b += "expires=";
			buf_b += Std.string(value);
		}
	}
	var value = options.domain;
	if(value != null) {
		buf_b += "; ";
		buf_b += "domain=";
		buf_b += Std.string(value);
	}
	var value = options.path;
	if(value != null) {
		buf_b += "; ";
		buf_b += "path=";
		buf_b += Std.string(value);
	}
	if(options.secure) {
		buf_b += "; ";
		buf_b += "secure";
		buf_b += "";
	}
	if(options.scriptable != true) {
		buf_b += "; ";
		buf_b += "HttpOnly";
		buf_b += "";
	}
	return new tink_http_HeaderField("set-cookie",buf_b);
};
tink_http_HeaderField.__super__ = tink_core_NamedWith;
tink_http_HeaderField.prototype = $extend(tink_core_NamedWith.prototype,{
	toString: function() {
		if(this.value == null) {
			return this.name;
		} else {
			return "" + this.name + ": " + this.value;
		}
	}
	,__class__: tink_http_HeaderField
});
var tink_io_BytewiseParser = function() { };
tink_io_BytewiseParser.__name__ = true;
tink_io_BytewiseParser.__interfaces__ = [tink_io_StreamParserObject];
tink_io_BytewiseParser.prototype = {
	read: function(char) {
		throw haxe_Exception.thrown("abstract");
	}
	,progress: function(cursor) {
		while(true) {
			var _g = this.read(cursor.currentByte);
			switch(_g._hx_index) {
			case 0:
				break;
			case 1:
				cursor.next();
				return tink_io_ParseStep.Done(_g.r);
			case 2:
				return tink_io_ParseStep.Failed(_g.e);
			}
			if(!cursor.next()) {
				break;
			}
		}
		return tink_io_ParseStep.Progressed;
	}
	,eof: function(rest) {
		var _g = this.read(-1);
		switch(_g._hx_index) {
		case 0:
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Unexpected end of input",{ fileName : "tink/io/StreamParser.hx", lineNumber : 180, className : "tink.io.BytewiseParser", methodName : "eof"}));
		case 1:
			return tink_core_Outcome.Success(_g.r);
		case 2:
			return tink_core_Outcome.Failure(_g.e);
		}
	}
	,__class__: tink_io_BytewiseParser
};
var tink_io_ParseStep = $hxEnums["tink.io.ParseStep"] = { __ename__:true,__constructs__:null
	,Progressed: {_hx_name:"Progressed",_hx_index:0,__enum__:"tink.io.ParseStep",toString:$estr}
	,Done: ($_=function(r) { return {_hx_index:1,r:r,__enum__:"tink.io.ParseStep",toString:$estr}; },$_._hx_name="Done",$_.__params__ = ["r"],$_)
	,Failed: ($_=function(e) { return {_hx_index:2,e:e,__enum__:"tink.io.ParseStep",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["e"],$_)
};
tink_io_ParseStep.__constructs__ = [tink_io_ParseStep.Progressed,tink_io_ParseStep.Done,tink_io_ParseStep.Failed];
var tink_http_HeaderParser = function(makeHeader) {
	this.last = -1;
	this.buf = new StringBuf();
	this.makeHeader = makeHeader;
};
tink_http_HeaderParser.__name__ = true;
tink_http_HeaderParser.__super__ = tink_io_BytewiseParser;
tink_http_HeaderParser.prototype = $extend(tink_io_BytewiseParser.prototype,{
	read: function(c) {
		var _g = this.last;
		switch(c) {
		case -1:
			return this.nextLine();
		case 10:
			if(_g == 13) {
				return this.nextLine();
			} else {
				var other = c;
				this.last = other;
				this.buf.b += String.fromCodePoint(other);
				return tink_io_ParseStep.Progressed;
			}
			break;
		case 13:
			if(_g == 13) {
				var c1 = this.last;
				this.buf.b += String.fromCodePoint(c1);
				return tink_io_ParseStep.Progressed;
			} else {
				this.last = 13;
				return tink_io_ParseStep.Progressed;
			}
			break;
		default:
			if(_g == 13) {
				var other = c;
				var c1 = this.last;
				this.buf.b += String.fromCodePoint(c1);
				this.buf.b += String.fromCodePoint(other);
				this.last = -1;
				return tink_io_ParseStep.Progressed;
			} else {
				var other = c;
				this.last = other;
				this.buf.b += String.fromCodePoint(other);
				return tink_io_ParseStep.Progressed;
			}
		}
	}
	,nextLine: function() {
		var line = this.buf.b;
		this.buf = new StringBuf();
		this.last = -1;
		if(line == "") {
			if(this.header == null) {
				return tink_io_ParseStep.Progressed;
			} else {
				return tink_io_ParseStep.Done(this.header);
			}
		} else if(this.header == null) {
			var _g = this.makeHeader(line,this.fields = []);
			switch(_g._hx_index) {
			case 0:
				var _g1 = _g.data;
				if(_g1 == null) {
					return tink_io_ParseStep.Done(this.header = null);
				} else {
					this.header = _g1;
					return tink_io_ParseStep.Progressed;
				}
				break;
			case 1:
				return tink_io_ParseStep.Failed(_g.failure);
			}
		} else {
			this.fields.push(tink_http_HeaderField.ofString(line));
			return tink_io_ParseStep.Progressed;
		}
	}
	,__class__: tink_http_HeaderParser
});
var tink_http_Message = function(header,body) {
	this.header = header;
	this.body = body;
};
tink_http_Message.__name__ = true;
tink_http_Message.prototype = {
	__class__: tink_http_Message
};
var tink_http_Method = {};
tink_http_Method.ofString = function(s,fallback) {
	var _g = s.toUpperCase();
	switch(_g) {
	case "DELETE":
		return "DELETE";
	case "GET":
		return "GET";
	case "HEAD":
		return "HEAD";
	case "OPTIONS":
		return "OPTIONS";
	case "PATCH":
		return "PATCH";
	case "POST":
		return "POST";
	case "PUT":
		return "PUT";
	default:
		return fallback(_g);
	}
};
var tink_http_RequestHeader = function(method,url,protocol,fields) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	this.method = method;
	this.url = url;
	this.protocol = protocol;
	tink_http_Header.call(this,fields);
};
tink_http_RequestHeader.__name__ = true;
tink_http_RequestHeader.__super__ = tink_http_Header;
tink_http_RequestHeader.prototype = $extend(tink_http_Header.prototype,{
	concat: function(fields) {
		return new tink_http_RequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	}
	,toString: function() {
		var this1 = this.url;
		return "" + this.method + " " + (this1.query == null ? this1.path : (this1.path == null ? "null" : this1.path) + "?" + (this1.query == null ? "null" : this1.query)) + " " + this.protocol + "\r\n" + tink_http_Header.prototype.toString.call(this);
	}
	,__class__: tink_http_RequestHeader
});
var tink_http_IncomingRequestHeader = function(method,url,protocol,fields) {
	tink_http_RequestHeader.call(this,method,url,protocol,fields);
};
tink_http_IncomingRequestHeader.__name__ = true;
tink_http_IncomingRequestHeader.parser = function() {
	return new tink_http_HeaderParser(function(line,headers) {
		var _g = line.split(" ");
		if(_g.length == 3) {
			var _g1 = _g[2];
			return tink_core_Outcome.Success(new tink_http_IncomingRequestHeader(_g[0],tink_Url.fromString(_g[1]),_g1,headers));
		} else {
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Invalid HTTP header",{ fileName : "tink/http/Request.hx", lineNumber : 95, className : "tink.http.IncomingRequestHeader", methodName : "parser"}));
		}
	});
};
tink_http_IncomingRequestHeader.fromIncomingMessage = function(req) {
	var req1 = req.method;
	var tmp = tink_Url.fromString(req.url);
	var tmp1 = "HTTP/" + req.httpVersion;
	var _g = [];
	var _g1 = 0;
	var _g2 = req.rawHeaders.length / 2 | 0;
	while(_g1 < _g2) {
		var i = _g1++;
		_g.push(new tink_http_HeaderField(req.rawHeaders[2 * i].toLowerCase(),req.rawHeaders[2 * i + 1]));
	}
	return new tink_http_IncomingRequestHeader(req1,tmp,tmp1,_g);
};
tink_http_IncomingRequestHeader.__super__ = tink_http_RequestHeader;
tink_http_IncomingRequestHeader.prototype = $extend(tink_http_RequestHeader.prototype,{
	getCookies: function() {
		if(this.cookies == null) {
			var _g = new haxe_ds_StringMap();
			var _g1 = 0;
			var _g2 = this.get("cookie".toLowerCase());
			while(_g1 < _g2.length) {
				var header = _g2[_g1];
				++_g1;
				var entry = new tink_url__$Query_QueryStringParser(header,";","=",0);
				while(entry.hasNext()) {
					var entry1 = entry.next();
					var key = entry1.name;
					var value = tink_url_Portion.toString(entry1.value);
					_g.h[key] = value;
				}
			}
			this.cookies = _g;
		}
		return this.cookies;
	}
	,concat: function(fields) {
		return new tink_http_IncomingRequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	}
	,cookieNames: function() {
		return new haxe_ds__$StringMap_StringMapKeyIterator(this.cookies.h);
	}
	,getCookie: function(name) {
		return this.getCookies().h[name];
	}
	,getAuth: function() {
		return this.getAuthWith(function(s,p) {
			switch(s) {
			case "Basic":
				var decoded;
				try {
					decoded = haxe_crypto_Base64.decode(p).toString();
				} catch( _g ) {
					return tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error in decoding basic auth",haxe_Exception.caught(_g).unwrap(),{ fileName : "tink/http/Request.hx", lineNumber : 67, className : "tink.http.IncomingRequestHeader", methodName : "getAuth"}));
				}
				var _g = decoded.indexOf(":");
				if(_g == -1) {
					return tink_core_Outcome.Failure(new tink_core_TypedError(null,"Cannot parse username and password because \":\" is missing",{ fileName : "tink/http/Request.hx", lineNumber : 69, className : "tink.http.IncomingRequestHeader", methodName : "getAuth"}));
				} else {
					return tink_core_Outcome.Success(tink_http_Authorization.Basic(HxOverrides.substr(decoded,0,_g),HxOverrides.substr(decoded,_g + 1,null)));
				}
				break;
			case "Bearer":
				return tink_core_Outcome.Success(tink_http_Authorization.Bearer(p));
			default:
				return tink_core_Outcome.Success(tink_http_Authorization.Others(s,p));
			}
		});
	}
	,getAuthWith: function(parser) {
		return tink_core_OutcomeTools.flatMap(this.byName("authorization"),tink_core__$Outcome_OutcomeMapper.withSameError(function(v) {
			var _g = v.indexOf(" ");
			if(_g == -1) {
				return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Invalid Authorization Header",{ fileName : "tink/http/Request.hx", lineNumber : 81, className : "tink.http.IncomingRequestHeader", methodName : "getAuthWith"}));
			} else {
				return parser(HxOverrides.substr(v,0,_g),HxOverrides.substr(v,_g + 1,null));
			}
		}));
	}
	,__class__: tink_http_IncomingRequestHeader
});
var tink_http_OutgoingRequestHeader = function(method,url,protocol,fields) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	var _g = tink_http_OutgoingRequestHeader.extractAuth(url);
	if(_g._hx_index == 0) {
		var _g1 = _g.v;
		url = _g1.url;
		fields = fields.concat(_g1.headers);
	}
	tink_http_RequestHeader.call(this,method,url,protocol,fields);
};
tink_http_OutgoingRequestHeader.__name__ = true;
tink_http_OutgoingRequestHeader.extractAuth = function(url) {
	var _g = url.auth;
	if(_g == null) {
		return haxe_ds_Option.None;
	} else {
		var tmp = [new tink_http_HeaderField("authorization",tink_http_HeaderValue.basicAuth(_g == null ? null : _g.split(":")[0],_g == null ? null : _g.split(":")[1]))];
		var url1 = url.scheme;
		var _g = [];
		var _g1 = 0;
		var _g2 = url.hosts;
		while(_g1 < _g2.length) {
			var host = _g2[_g1];
			++_g1;
			_g.push(host);
		}
		return haxe_ds_Option.Some({ headers : tmp, url : tink_Url.make({ scheme : url1, hosts : _g, path : url.path, query : url.query})});
	}
};
tink_http_OutgoingRequestHeader.__super__ = tink_http_RequestHeader;
tink_http_OutgoingRequestHeader.prototype = $extend(tink_http_RequestHeader.prototype,{
	concat: function(fields) {
		return new tink_http_OutgoingRequestHeader(this.method,this.url,this.protocol,this.fields.concat(fields));
	}
	,__class__: tink_http_OutgoingRequestHeader
});
var tink_http_OutgoingRequest = function(header,body) {
	tink_http_Message.call(this,header,body);
};
tink_http_OutgoingRequest.__name__ = true;
tink_http_OutgoingRequest.__super__ = tink_http_Message;
tink_http_OutgoingRequest.prototype = $extend(tink_http_Message.prototype,{
	__class__: tink_http_OutgoingRequest
});
var tink_http_IncomingRequest = function(clientIp,header,body) {
	this.clientIp = clientIp;
	tink_http_Message.call(this,header,body);
};
tink_http_IncomingRequest.__name__ = true;
tink_http_IncomingRequest.parse = function(clientIp,source) {
	return tink_core_Promise.next(tink_io_RealSourceTools.parse(source,tink_http_IncomingRequestHeader.parser()),function(parts) {
		var clientIp1 = clientIp;
		var parts1 = parts.a;
		var _g = parts.a.getContentLength();
		var d;
		switch(_g._hx_index) {
		case 0:
			d = tink_io_Source.limit(parts.b,_g.data);
			break;
		case 1:
			var _g = parts.a.method;
			var _g1 = parts.a.byName("transfer-encoding");
			switch(_g) {
			case "GET":case "OPTIONS":
				d = tink_io_Source.EMPTY;
				break;
			default:
				if(_g1._hx_index == 0) {
					var _this = _g1.data.split(",");
					var f = StringTools.trim;
					var result = new Array(_this.length);
					var _g = 0;
					var _g1 = _this.length;
					while(_g < _g1) {
						var i = _g++;
						result[i] = f(_this[i]);
					}
					if(result.indexOf("chunked") != -1) {
						var source = parts.b;
						d = tink_http_Chunked.decoder().transform(source);
					} else {
						return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(411,"Content-Length header missing",{ fileName : "tink/http/Request.hx", lineNumber : 171, className : "tink.http.IncomingRequest", methodName : "parse"}))));
					}
				} else {
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(411,"Content-Length header missing",{ fileName : "tink/http/Request.hx", lineNumber : 171, className : "tink.http.IncomingRequest", methodName : "parse"}))));
				}
			}
			break;
		}
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(new tink_http_IncomingRequest(clientIp1,parts1,tink_http_IncomingRequestBody.Plain(d)))));
	});
};
tink_http_IncomingRequest.__super__ = tink_http_Message;
tink_http_IncomingRequest.prototype = $extend(tink_http_Message.prototype,{
	__class__: tink_http_IncomingRequest
});
var tink_http_IncomingRequestBody = $hxEnums["tink.http.IncomingRequestBody"] = { __ename__:true,__constructs__:null
	,Plain: ($_=function(source) { return {_hx_index:0,source:source,__enum__:"tink.http.IncomingRequestBody",toString:$estr}; },$_._hx_name="Plain",$_.__params__ = ["source"],$_)
	,Parsed: ($_=function(parts) { return {_hx_index:1,parts:parts,__enum__:"tink.http.IncomingRequestBody",toString:$estr}; },$_._hx_name="Parsed",$_.__params__ = ["parts"],$_)
};
tink_http_IncomingRequestBody.__constructs__ = [tink_http_IncomingRequestBody.Plain,tink_http_IncomingRequestBody.Parsed];
var tink_http_Authorization = $hxEnums["tink.http.Authorization"] = { __ename__:true,__constructs__:null
	,Basic: ($_=function(user,pass) { return {_hx_index:0,user:user,pass:pass,__enum__:"tink.http.Authorization",toString:$estr}; },$_._hx_name="Basic",$_.__params__ = ["user","pass"],$_)
	,Bearer: ($_=function(token) { return {_hx_index:1,token:token,__enum__:"tink.http.Authorization",toString:$estr}; },$_._hx_name="Bearer",$_.__params__ = ["token"],$_)
	,Others: ($_=function(scheme,param) { return {_hx_index:2,scheme:scheme,param:param,__enum__:"tink.http.Authorization",toString:$estr}; },$_._hx_name="Others",$_.__params__ = ["scheme","param"],$_)
};
tink_http_Authorization.__constructs__ = [tink_http_Authorization.Basic,tink_http_Authorization.Bearer,tink_http_Authorization.Others];
var tink_http_ResponseHeader = {};
tink_http_ResponseHeader._new = function(statusCode,reason,fields,protocol) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	var this1 = new tink_http_ResponseHeaderBase(statusCode,reason,fields,protocol);
	return this1;
};
tink_http_ResponseHeader.fromStatusCode = function(code) {
	var this1 = new tink_http_ResponseHeaderBase(code,null,null,"HTTP/1.1");
	return this1;
};
tink_http_ResponseHeader.fromHeaderFields = function(fields) {
	var this1 = new tink_http_ResponseHeaderBase(200,null,fields,"HTTP/1.1");
	return this1;
};
tink_http_ResponseHeader.parser = function() {
	return tink_http_ResponseHeaderBase.parser();
};
var tink_http_ResponseHeaderBase = function(statusCode,reason,fields,protocol) {
	if(protocol == null) {
		protocol = "HTTP/1.1";
	}
	this.statusCode = statusCode;
	var tmp;
	if(reason == null) {
		var this1 = httpstatus_HttpStatusMessage.fromCode(statusCode);
		tmp = this1;
	} else {
		tmp = reason;
	}
	this.reason = tmp;
	this.protocol = protocol;
	tink_http_Header.call(this,fields);
};
tink_http_ResponseHeaderBase.__name__ = true;
tink_http_ResponseHeaderBase.parser = function() {
	return new tink_http_HeaderParser(function(line,headers) {
		var _g = line.split(" ");
		if(_g.length >= 3) {
			var statusCode = Std.parseInt(_g[1]);
			var reason = _g.slice(2).join(" ");
			var protocol = _g[0];
			if(protocol == null) {
				protocol = "HTTP/1.1";
			}
			var this1 = new tink_http_ResponseHeaderBase(statusCode,reason,headers,protocol);
			return tink_core_Outcome.Success(this1);
		} else {
			return tink_core_Outcome.Failure(new tink_core_TypedError(422,"Invalid HTTP response header",{ fileName : "tink/http/Response.hx", lineNumber : 56, className : "tink.http.ResponseHeaderBase", methodName : "parser"}));
		}
	});
};
tink_http_ResponseHeaderBase.__super__ = tink_http_Header;
tink_http_ResponseHeaderBase.prototype = $extend(tink_http_Header.prototype,{
	concat: function(fields) {
		var statusCode = this.statusCode;
		var reason = this.reason;
		var fields1 = this.fields.concat(fields);
		var protocol = this.protocol;
		if(protocol == null) {
			protocol = "HTTP/1.1";
		}
		var this1 = new tink_http_ResponseHeaderBase(statusCode,reason,fields1,protocol);
		return this1;
	}
	,toString: function() {
		return "" + this.protocol + " " + this.statusCode + " " + this.reason + "\r\n" + tink_http_Header.prototype.toString.call(this);
	}
	,__class__: tink_http_ResponseHeaderBase
});
var tink_http__$Response_OutgoingResponseData = function(header,body) {
	tink_http_Message.call(this,header,body);
};
tink_http__$Response_OutgoingResponseData.__name__ = true;
tink_http__$Response_OutgoingResponseData.__super__ = tink_http_Message;
tink_http__$Response_OutgoingResponseData.prototype = $extend(tink_http_Message.prototype,{
	__class__: tink_http__$Response_OutgoingResponseData
});
var tink_http_OutgoingResponse = {};
tink_http_OutgoingResponse._new = function(header,body) {
	var this1 = new tink_http__$Response_OutgoingResponseData(header,body);
	return this1;
};
tink_http_OutgoingResponse.blob = function(code,chunk,contentType,headers) {
	if(code == null) {
		code = 200;
	}
	var this1 = httpstatus_HttpStatusMessage.fromCode(code);
	var this2 = new tink_http_ResponseHeaderBase(code,this1,[new tink_http_HeaderField("Content-Type".toLowerCase(),contentType),new tink_http_HeaderField("Content-Length".toLowerCase(),Std.string(chunk.getLength()))].concat(headers == null ? [] : headers),"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this2,new tink_streams_Single(new tink_core__$Lazy_LazyConst(chunk)));
	return this1;
};
tink_http_OutgoingResponse.chunked = function(contentType,headers,source) {
};
tink_http_OutgoingResponse.ofString = function(s) {
	return tink_http_OutgoingResponse.blob(null,tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(s)),"text/plain");
};
tink_http_OutgoingResponse.ofChunk = function(c) {
	return tink_http_OutgoingResponse.blob(null,c,"application/octet-stream");
};
tink_http_OutgoingResponse.reportError = function(e) {
	var code = e.code;
	if(code < 100 || code > 999) {
		code = 500;
	}
	var this1 = new tink_http_ResponseHeaderBase(code,httpstatus_HttpStatusMessage.fromCode(code),[new tink_http_HeaderField("Content-Type".toLowerCase(),"application/json")],"HTTP/1.1");
	var this2 = new tink_http__$Response_OutgoingResponseData(this1,new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(JSON.stringify({ error : e.message, details : e.data}))))));
	return this2;
};
var tink_http_IncomingResponse = function(header,body) {
	tink_http_Message.call(this,header,body);
};
tink_http_IncomingResponse.__name__ = true;
tink_http_IncomingResponse.readAll = function(res) {
	return tink_core_Promise.next(tink_io_RealSourceTools.all(res.body),function(b) {
		if(res.header.statusCode >= 400) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(tink_core_TypedError.withData(res.header.statusCode,res.header.reason,b.toString(),{ fileName : "tink/http/Response.hx", lineNumber : 115, className : "tink.http.IncomingResponse", methodName : "readAll"}))));
		} else {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(b)));
		}
	});
};
tink_http_IncomingResponse.reportError = function(e) {
	var this1 = new tink_http_ResponseHeaderBase(e.code,httpstatus_HttpStatusMessage.fromCode(e.code),[new tink_http_HeaderField("Content-Type".toLowerCase(),"application/json")],"HTTP/1.1");
	return new tink_http_IncomingResponse(this1,new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(JSON.stringify({ error : e.message, details : e.data}))))));
};
tink_http_IncomingResponse.__super__ = tink_http_Message;
tink_http_IncomingResponse.prototype = $extend(tink_http_Message.prototype,{
	__class__: tink_http_IncomingResponse
});
var tink_http_BodyPart = $hxEnums["tink.http.BodyPart"] = { __ename__:true,__constructs__:null
	,Value: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"tink.http.BodyPart",toString:$estr}; },$_._hx_name="Value",$_.__params__ = ["v"],$_)
	,File: ($_=function(handle) { return {_hx_index:1,handle:handle,__enum__:"tink.http.BodyPart",toString:$estr}; },$_._hx_name="File",$_.__params__ = ["handle"],$_)
};
tink_http_BodyPart.__constructs__ = [tink_http_BodyPart.Value,tink_http_BodyPart.File];
var tink_http_UploadedFile = {};
tink_http_UploadedFile.ofBlob = function(name,type,data) {
	return { fileName : name, mimeType : type, size : data.length, read : function() {
		return new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(data)));
	}, saveTo : function(path) {
		var name = "File sink " + path;
		var dest = tink_io_nodejs_NodejsSink.wrap(name,js_node_Fs.createWriteStream(path));
		return tink_core_Future.map(tink_io_Source.pipeTo(new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(data))),dest,{ end : true}),function(r) {
			switch(r._hx_index) {
			case 0:
				return tink_core_Outcome.Success(null);
			case 1:
				return tink_core_Outcome.Failure(new tink_core_TypedError(null,"File $path closed unexpectedly",{ fileName : "tink/http/StructuredBody.hx", lineNumber : 37, className : "tink.http._StructuredBody.UploadedFile_Impl_", methodName : "ofBlob"}));
			case 2:
				return tink_core_Outcome.Failure(r.e);
			}
		});
	}};
};
var tink_http_clients_CurlClient = function(curl,extraArgs) {
	if(curl != null) {
		this.curl = curl;
	}
	this.extraArgs = extraArgs;
};
tink_http_clients_CurlClient.__name__ = true;
tink_http_clients_CurlClient.__interfaces__ = [tink_http_ClientObject];
tink_http_clients_CurlClient.prototype = {
	request: function(req) {
		var _g = tink_http_clients_Helpers.checkScheme(req.header.url);
		switch(_g._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(_g.v)));
		case 1:
			var _g = this.extraArgs;
			var args = _g == null ? [] : _g.slice();
			args.push("-isS");
			args.push("-X");
			args.push(req.header.method);
			switch(req.header.protocol) {
			case "HTTP/1.0":
				args.push("--http1.0");
				break;
			case "HTTP/1.1":
				args.push("--http1.1");
				break;
			case "HTTP/2":
				args.push("--http2");
				break;
			default:
			}
			var _this = req.header.fields;
			var _g2_current = 0;
			while(_g2_current < _this.length) {
				var header = _this[_g2_current++];
				args.push("-H");
				args.push("" + header.name + ": " + header.value);
			}
			args.push(tink_Url.toString(req.header.url));
			return tink_core_Promise.next(tink_io_RealSourceTools.parse(this.curl(args,req.body),tink_http_ResponseHeaderBase.parser()),function(p) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(new tink_http_IncomingResponse(p.a,p.b))));
			});
		}
	}
	,curl: function(args,body) {
		args.push("--data-binary");
		args.push("@-");
		var $process = js_node_ChildProcess.spawn("curl",args);
		var stdin = tink_io_nodejs_NodejsSink.wrap("stdin",$process.stdin);
		var options = null;
		options = { };
		var stdout = tink_io_nodejs_NodejsSource.wrap("stdout",$process.stdout,options.chunkSize,options.onEnd);
		var options = null;
		options = { };
		var stderr = tink_io_nodejs_NodejsSource.wrap("stderr",$process.stderr,options.chunkSize,options.onEnd);
		var this1 = tink_io_Source.pipeTo(body,stdin,{ end : true});
		this1.eager();
		return tink_io_Source.ofPromised(tink_core_Future.flatMap(tink_core_Future.async(function(cb) {
			$process.once("exit",function(code,signal) {
				cb(code);
			});
		}),function(code) {
			if(code == 0) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(stdout)));
			} else {
				var v = code;
				return tink_core_Promise.next(tink_io_RealSourceTools.all(stderr),function(chunk) {
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(v,chunk.toString(),{ fileName : "tink/http/clients/CurlClient.hx", lineNumber : 70, className : "tink.http.clients.CurlClient", methodName : "curl"}))));
				});
			}
		}));
	}
	,__class__: tink_http_clients_CurlClient
};
var tink_http_clients_Helpers = function() { };
tink_http_clients_Helpers.__name__ = true;
tink_http_clients_Helpers.checkScheme = function(url) {
	var _g = url.scheme;
	if(_g == null) {
		return haxe_ds_Option.Some(new tink_core_TypedError(400,"Missing Scheme (expected http/https) in URL: " + tink_Url.toString(url),{ fileName : "tink/http/clients/Helpers.hx", lineNumber : 16, className : "tink.http.clients.Helpers", methodName : "missingSchemeError"}));
	} else {
		switch(_g) {
		case "http":case "https":
			return haxe_ds_Option.None;
		default:
			var url = tink_Url.fromString(_g);
			return haxe_ds_Option.Some(new tink_core_TypedError(400,"Invalid Scheme \"" + url.scheme + "\" (expected http/https) in URL: " + tink_Url.toString(url),{ fileName : "tink/http/clients/Helpers.hx", lineNumber : 19, className : "tink.http.clients.Helpers", methodName : "invalidSchemeError"}));
		}
	}
};
tink_http_clients_Helpers.missingSchemeError = function(url) {
	return new tink_core_TypedError(400,"Missing Scheme (expected http/https) in URL: " + tink_Url.toString(url),{ fileName : "tink/http/clients/Helpers.hx", lineNumber : 16, className : "tink.http.clients.Helpers", methodName : "missingSchemeError"});
};
tink_http_clients_Helpers.invalidSchemeError = function(url) {
	return new tink_core_TypedError(400,"Invalid Scheme \"" + url.scheme + "\" (expected http/https) in URL: " + tink_Url.toString(url),{ fileName : "tink/http/clients/Helpers.hx", lineNumber : 19, className : "tink.http.clients.Helpers", methodName : "invalidSchemeError"});
};
var tink_http_clients_LocalContainerClient = function(container) {
	this.container = container;
};
tink_http_clients_LocalContainerClient.__name__ = true;
tink_http_clients_LocalContainerClient.__interfaces__ = [tink_http_ClientObject];
tink_http_clients_LocalContainerClient.prototype = {
	request: function(req) {
		var this1 = req.header.url;
		return tink_core_Future.flatMap(this.container.serve(new tink_http_IncomingRequest("127.0.0.1",new tink_http_IncomingRequestHeader(req.header.method,tink_Url.fromString(this1.query == null ? this1.path : (this1.path == null ? "null" : this1.path) + "?" + (this1.query == null ? "null" : this1.query)),"HTTP/1.1",req.header.fields),tink_http_IncomingRequestBody.Plain(req.body))),function(res) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(new tink_http_IncomingResponse(res.header,res.body))));
		});
	}
	,__class__: tink_http_clients_LocalContainerClient
};
var tink_http_clients_NodeClient = function(agent) {
	this.agent = agent;
};
tink_http_clients_NodeClient.__name__ = true;
tink_http_clients_NodeClient.__interfaces__ = [tink_http_ClientObject];
tink_http_clients_NodeClient.prototype = {
	request: function(req) {
		var _g = tink_http_clients_Helpers.checkScheme(req.header.url);
		switch(_g._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(_g.v)));
		case 1:
			var options = this.getNodeOptions(req.header);
			if(req.header.url.scheme == "https") {
				return this.nodeRequest(js_node_Https,options,req);
			} else {
				return this.nodeRequest(js_node_Http,options,req);
			}
			break;
		}
	}
	,getNodeOptions: function(header) {
		var tmp = this.agent;
		var header1 = header.method;
		var this1 = header.url;
		var tmp1 = this1.query == null ? this1.path : (this1.path == null ? "null" : this1.path) + "?" + (this1.query == null ? "null" : this1.query);
		var tmp2 = tink_url_Host.get_name(header.url.hosts[0]);
		var tmp3 = tink_url_Host.get_port(header.url.hosts[0]);
		var this1 = { };
		var map = this1;
		var _this = header.fields;
		var _g_current = 0;
		while(_g_current < _this.length) {
			var h = _this[_g_current++];
			var name = h.name;
			if(name == "host") {
				map[h.name] = h.value;
			} else {
				var _g = map[h.name];
				var list = _g == null ? map[h.name] = [] : _g;
				list.push(h.value);
			}
		}
		return { agent : tmp, method : header1, path : tmp1, host : tmp2, port : tmp3, headers : map};
	}
	,nodeRequest: function(agent,options,req) {
		return tink_core_Future.async(function(cb) {
			var fwd = agent.request(options,function(msg) {
				var cb1 = cb;
				var statusCode = msg.statusCode;
				var reason = msg.statusMessage;
				var _g = [];
				var _g1 = 0;
				var _g2 = msg.rawHeaders.length >> 1;
				while(_g1 < _g2) {
					var i = _g1++;
					_g.push(new tink_http_HeaderField(msg.rawHeaders[2 * i].toLowerCase(),msg.rawHeaders[2 * i + 1]));
				}
				var this1 = new tink_http_ResponseHeaderBase(statusCode,reason,_g,"HTTP/1.1");
				var options = null;
				options = { };
				cb1(tink_core_Outcome.Success(new tink_http_IncomingResponse(this1,tink_io_nodejs_NodejsSource.wrap("Response from " + (req.header.url == null ? "null" : tink_Url.toString(req.header.url)),msg,options.chunkSize,options.onEnd))));
			});
			var fail = function(e) {
				cb(tink_core_Outcome.Failure(e));
			};
			fwd.on("error",function(e) {
				fail(tink_core_TypedError.withData(null,e.message,e,{ fileName : "tink/http/clients/NodeClient.hx", lineNumber : 87, className : "tink.http.clients.NodeClient", methodName : "nodeRequest"}));
			});
			tink_io_Source.pipeTo(req.body,tink_io_nodejs_NodejsSink.wrap("Request to " + (req.header.url == null ? "null" : tink_Url.toString(req.header.url)),fwd)).handle(function(res) {
				fwd.end();
				switch(res._hx_index) {
				case 0:
					break;
				case 1:
					fail(new tink_core_TypedError(502,"Gateway Error",{ fileName : "tink/http/clients/NodeClient.hx", lineNumber : 96, className : "tink.http.clients.NodeClient", methodName : "nodeRequest"}));
					break;
				case 2:
					fail(res.e);
					break;
				}
			});
		});
	}
	,__class__: tink_http_clients_NodeClient
};
var tink_http_clients_StdClient = function(worker) {
	this.worker = tink_io_Worker.ensure(worker);
};
tink_http_clients_StdClient.__name__ = true;
tink_http_clients_StdClient.__interfaces__ = [tink_http_ClientObject];
tink_http_clients_StdClient.prototype = {
	request: function(req) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			var r = new haxe_http_HttpNodeJs(tink_Url.toString(req.header.url));
			var send = function(post) {
				var code = 200;
				r.onStatus = function(c) {
					code = c;
				};
				var headers = function() {
					return [];
				};
				r.onError = function(msg) {
					if(code == 200) {
						code = 500;
					}
					tink_io_Worker.work(_gthis.worker,new tink_core__$Lazy_LazyConst(true)).handle(function() {
						cb(tink_core_Outcome.Failure(new tink_core_TypedError(code,msg,{ fileName : "tink/http/clients/StdClient.hx", lineNumber : 44, className : "tink.http.clients.StdClient", methodName : "request"})));
					});
				};
				r.onData = function(data) {
					tink_io_Worker.work(_gthis.worker,new tink_core__$Lazy_LazyConst(true)).handle(function() {
						var cb1 = cb;
						var fields = headers();
						var this1 = new tink_http_ResponseHeaderBase(code,"OK",fields,"HTTP/1.1");
						cb1(tink_core_Outcome.Success(new tink_http_IncomingResponse(this1,new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(data)))))));
					});
				};
				tink_io_Worker.work(_gthis.worker,new tink_core__$Lazy_LazyFunc(function() {
					r.request(post);
				}));
			};
			var _this = req.header.fields;
			var _g_current = 0;
			while(_g_current < _this.length) {
				var h = _this[_g_current++];
				r.setHeader(h.name,h.value);
			}
			switch(req.header.method) {
			case "GET":case "HEAD":case "OPTIONS":
				send(false);
				break;
			default:
				tink_io_IdealSourceTools.all(req.body).handle(function(bytes) {
					r.setPostData(bytes.toString());
					send(true);
				});
			}
		});
	}
	,__class__: tink_http_clients_StdClient
};
var tink_http_containers_LocalContainer = function() {
};
tink_http_containers_LocalContainer.__name__ = true;
tink_http_containers_LocalContainer.__interfaces__ = [tink_http_Container];
tink_http_containers_LocalContainer.prototype = {
	run: function(handler) {
		var _gthis = this;
		this.handler = handler;
		this.running = true;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_http_ContainerResult.Running({ failures : new tink_core_SignalTrigger(), shutdown : function(hard) {
			_gthis.running = false;
			return tink_core_Future.map(new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(true)),tink_core_Outcome.Success);
		}})));
	}
	,serve: function(req) {
		if(!this.running) {
			var this1 = new tink_http_ResponseHeaderBase(503,"Server stopped",[],"HTTP/1.1");
			var this2 = new tink_http__$Response_OutgoingResponseData(this1,tink_io_Source.EMPTY);
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(this2));
		}
		return this.handler.process(req);
	}
	,__class__: tink_http_containers_LocalContainer
};
var tink_io_PipeOptions = {};
tink_io_PipeOptions.get_end = function(this1) {
	if(this1 != null) {
		return this1.end;
	} else {
		return false;
	}
};
tink_io_PipeOptions.get_destructive = function(this1) {
	if(this1 != null) {
		return this1.destructive;
	} else {
		return false;
	}
};
var tink_io_PipeResult = $hxEnums["tink.io.PipeResult"] = { __ename__:true,__constructs__:null
	,AllWritten: {_hx_name:"AllWritten",_hx_index:0,__enum__:"tink.io.PipeResult",toString:$estr}
	,SinkEnded: ($_=function(result,rest) { return {_hx_index:1,result:result,rest:rest,__enum__:"tink.io.PipeResult",toString:$estr}; },$_._hx_name="SinkEnded",$_.__params__ = ["result","rest"],$_)
	,SinkFailed: ($_=function(e,rest) { return {_hx_index:2,e:e,rest:rest,__enum__:"tink.io.PipeResult",toString:$estr}; },$_._hx_name="SinkFailed",$_.__params__ = ["e","rest"],$_)
	,SourceFailed: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.io.PipeResult",toString:$estr}; },$_._hx_name="SourceFailed",$_.__params__ = ["e"],$_)
};
tink_io_PipeResult.__constructs__ = [tink_io_PipeResult.AllWritten,tink_io_PipeResult.SinkEnded,tink_io_PipeResult.SinkFailed,tink_io_PipeResult.SourceFailed];
var tink_io_PipeResultTools = function() { };
tink_io_PipeResultTools.__name__ = true;
tink_io_PipeResultTools.toOutcome = function(result) {
	switch(result._hx_index) {
	case 0:
		return tink_core_Outcome.Success(haxe_ds_Option.None);
	case 1:
		return tink_core_Outcome.Success(haxe_ds_Option.Some(result.result));
	case 2:
		return tink_core_Outcome.Failure(result.e);
	case 3:
		return tink_core_Outcome.Failure(result.e);
	}
};
tink_io_PipeResultTools.toResult = function(c,result,buffered) {
	var mk = function(s) {
		if(buffered == null) {
			return s;
		} else {
			var v = buffered;
			return s.prepend(new tink_streams_Single(new tink_core__$Lazy_LazyConst(v)));
		}
	};
	switch(c._hx_index) {
	case 0:
		return tink_io_PipeResult.SinkEnded(result,mk(c.rest));
	case 1:
		return tink_io_PipeResult.SinkFailed(c.error,mk(c.at));
	case 2:
		return tink_io_PipeResult.SourceFailed(c.error);
	case 3:
		return tink_io_PipeResult.AllWritten;
	}
};
var tink_io_SinkObject = function() { };
tink_io_SinkObject.__name__ = true;
tink_io_SinkObject.__isInterface__ = true;
tink_io_SinkObject.prototype = {
	__class__: tink_io_SinkObject
};
var tink_io_SinkBase = function() { };
tink_io_SinkBase.__name__ = true;
tink_io_SinkBase.__interfaces__ = [tink_io_SinkObject];
tink_io_SinkBase.prototype = {
	get_sealed: function() {
		return true;
	}
	,consume: function(source,options) {
		throw haxe_Exception.thrown("not implemented");
	}
	,__class__: tink_io_SinkBase
};
var tink_io__$Sink_Blackhole = function() {
};
tink_io__$Sink_Blackhole.__name__ = true;
tink_io__$Sink_Blackhole.__super__ = tink_io_SinkBase;
tink_io__$Sink_Blackhole.prototype = $extend(tink_io_SinkBase.prototype,{
	consume: function(source,options) {
		return tink_core_Future.map(source.forEach(tink_streams_Handler.ofSafe(function(_) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
		})),function(o) {
			switch(o._hx_index) {
			case 0:
				throw haxe_Exception.thrown("unreachable");
			case 2:
				return tink_io_PipeResult.SourceFailed(o.error);
			case 3:
				return tink_io_PipeResult.AllWritten;
			}
		});
	}
	,__class__: tink_io__$Sink_Blackhole
});
var tink_io_SinkYielding = {};
tink_io_SinkYielding.end = function(this1) {
	if(this1.get_sealed()) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(false)));
	} else {
		return tink_core_Future.map(this1.consume(tink_io_Source.EMPTY,{ end : true}),function(r) {
			switch(r._hx_index) {
			case 0:
				return tink_core_Outcome.Success(true);
			case 1:
				return tink_core_Outcome.Success(true);
			case 2:
				return tink_core_Outcome.Failure(r.e);
			}
		});
	}
};
tink_io_SinkYielding.dirty = function(this1) {
	return this1;
};
tink_io_SinkYielding.ofError = function(e) {
	return new tink_io__$Sink_ErrorSink(e);
};
tink_io_SinkYielding.ofPromised = function(p) {
	return new tink_io__$Sink_FutureSink(tink_core_Future.map(p,function(o) {
		switch(o._hx_index) {
		case 0:
			return o.data;
		case 1:
			return tink_io_SinkYielding.ofError(o.failure);
		}
	}));
};
tink_io_SinkYielding.ofNodeStream = function(name,r) {
	return tink_io_nodejs_NodejsSink.wrap(name,r);
};
tink_io_SinkYielding.ofOutput = function(name,target,options) {
	var tmp;
	if(options == null) {
		tmp = tink_io_Worker.get();
	} else {
		var _g = options.worker;
		tmp = _g == null ? tink_io_Worker.get() : _g;
	}
	return new tink_io_std_OutputSink(name,target,tmp);
};
var tink_io__$Sink_FutureSink = function(f) {
	this.f = f;
};
tink_io__$Sink_FutureSink.__name__ = true;
tink_io__$Sink_FutureSink.__super__ = tink_io_SinkBase;
tink_io__$Sink_FutureSink.prototype = $extend(tink_io_SinkBase.prototype,{
	consume: function(source,options) {
		return tink_core_Future.flatMap(this.f,function(sink) {
			return sink.consume(source,options);
		});
	}
	,__class__: tink_io__$Sink_FutureSink
});
var tink_io__$Sink_ErrorSink = function(error) {
	this.error = error;
};
tink_io__$Sink_ErrorSink.__name__ = true;
tink_io__$Sink_ErrorSink.__super__ = tink_io_SinkBase;
tink_io__$Sink_ErrorSink.prototype = $extend(tink_io_SinkBase.prototype,{
	get_sealed: function() {
		return false;
	}
	,consume: function(source,options) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_PipeResult.SinkFailed(this.error,source)));
	}
	,__class__: tink_io__$Sink_ErrorSink
});
var tink_streams_StreamObject = function() { };
tink_streams_StreamObject.__name__ = true;
tink_streams_StreamObject.__isInterface__ = true;
tink_streams_StreamObject.prototype = {
	__class__: tink_streams_StreamObject
};
var tink_streams_StreamBase = function() {
	this.retainCount = 0;
};
tink_streams_StreamBase.__name__ = true;
tink_streams_StreamBase.__interfaces__ = [tink_streams_StreamObject];
tink_streams_StreamBase.prototype = {
	get_depleted: function() {
		return false;
	}
	,retain: function() {
		var _gthis = this;
		this.retainCount++;
		var retained = true;
		return function() {
			if(retained) {
				retained = false;
				if(--_gthis.retainCount == 0) {
					_gthis.destroy();
				}
			}
		};
	}
	,next: function() {
		throw haxe_Exception.thrown("not implemented");
	}
	,regroup: function(f) {
		return new tink_streams__$Stream_RegroupStream(this,f);
	}
	,map: function(f) {
		return this.regroup(f);
	}
	,filter: function(f) {
		return this.regroup(f);
	}
	,destroy: function() {
	}
	,append: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return tink_streams__$Stream_CompoundStream.of([this,other]);
		}
	}
	,prepend: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return tink_streams__$Stream_CompoundStream.of([other,this]);
		}
	}
	,blend: function(other) {
		if(this.get_depleted()) {
			return other;
		} else {
			return new tink_streams_BlendStream(this,other);
		}
	}
	,decompose: function(into) {
		if(!this.get_depleted()) {
			into.push(this);
		}
	}
	,idealize: function(rescue) {
		if(this.get_depleted()) {
			return tink_streams_Empty.inst;
		} else {
			return new tink_streams_IdealizeStream(this,rescue);
		}
	}
	,reduce: function(initial,reducer) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			_gthis.forEach(tink_streams_Handler.ofUnknown(function(item) {
				return tink_core_Future.map(reducer(initial,item),function(o) {
					switch(o._hx_index) {
					case 0:
						initial = o.result;
						return tink_streams_Handled.Resume;
					case 1:
						return tink_streams_Handled.Clog(o.e);
					}
				});
			})).handle(function(c) {
				switch(c._hx_index) {
				case 0:
					throw haxe_Exception.thrown("assert");
				case 1:
					cb(tink_streams_Reduction.Crashed(c.error,c.at));
					break;
				case 2:
					cb(tink_streams_Reduction.Failed(c.error));
					break;
				case 3:
					cb(tink_streams_Reduction.Reduced(initial));
					break;
				}
			});
		});
	}
	,forEach: function(handler) {
		throw haxe_Exception.thrown("not implemented");
	}
	,__class__: tink_streams_StreamBase
};
var tink_streams_Empty = function() {
	tink_streams_StreamBase.call(this);
};
tink_streams_Empty.__name__ = true;
tink_streams_Empty.make = function() {
	return tink_streams_Empty.inst;
};
tink_streams_Empty.__super__ = tink_streams_StreamBase;
tink_streams_Empty.prototype = $extend(tink_streams_StreamBase.prototype,{
	get_depleted: function() {
		return true;
	}
	,next: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.End));
	}
	,forEach: function(handler) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Conclusion.Depleted));
	}
	,__class__: tink_streams_Empty
});
var tink_io_Source = {};
tink_io_Source.dirty = function(this1) {
	return this1;
};
tink_io_Source.get_depleted = function(this1) {
	return this1.get_depleted();
};
tink_io_Source.ofNodeStream = function(name,r,options) {
	if(options == null) {
		options = { };
	}
	return tink_io_nodejs_NodejsSource.wrap(name,r,options.chunkSize,options.onEnd);
};
tink_io_Source.toNodeStream = function(this1) {
	var native = new js_node_stream_PassThrough();
	var source = tink_io_Source.chunked(this1);
	var write = null;
	write = function() {
		source.forEach(tink_streams_Handler.ofSafe(function(chunk) {
			var native1 = native;
			var b = chunk.toBytes();
			var data = b.b;
			var ok = native1.write(js_node_buffer_Buffer.from(data.buffer,data.byteOffset,b.length));
			if(ok) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
			} else {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Finish));
			}
		})).handle(function(o) {
			switch(o._hx_index) {
			case 0:
				source = o.rest;
				break;
			case 2:
				native.emit("error",new Error(o.error.message));
				break;
			case 3:
				native.removeListener("drain",write);
				native.end();
				break;
			}
		});
	};
	var f = write;
	var time_ms = 1;
	var tmp = function() {
		return haxe_Timer.delay(f,time_ms);
	};
	native.on("drain",tmp);
	write();
	return native;
};
tink_io_Source.ofJsFile = function(name,file,options) {
	var chunkSize = options == null || options.chunkSize == null ? 16777216 : options.chunkSize;
	return new tink_io_js_BlobSource(name,file,0,chunkSize);
};
tink_io_Source.ofJsBlob = function(name,blob,options) {
	var chunkSize = options == null || options.chunkSize == null ? 16777216 : options.chunkSize;
	return new tink_io_js_BlobSource(name,blob,0,chunkSize);
};
tink_io_Source.ofInput = function(name,input,options) {
	if(options == null) {
		options = { };
	}
	var tmp = tink_io_Worker.ensure(options.worker);
	var _g = options.chunkSize;
	return new tink_io_std_InputSource(name,input,tmp,new haxe_io_Bytes(new ArrayBuffer(_g == null ? 65536 : _g)),0);
};
tink_io_Source.chunked = function(this1) {
	return this1;
};
tink_io_Source.concatAll = function(s) {
	return s.reduce(tink_Chunk.EMPTY,tink_streams_Reducer.ofSafe(function(res,cur) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_ReductionStep.Progress(tink_Chunk.concat(res,cur))));
	}));
};
tink_io_Source.pipeTo = function(this1,target,options) {
	return target.consume(this1,options);
};
tink_io_Source.append = function(this1,that) {
	return this1.append(that);
};
tink_io_Source.prepend = function(this1,that) {
	return this1.prepend(that);
};
tink_io_Source.transform = function(this1,transformer) {
	return transformer.transform(this1);
};
tink_io_Source.skip = function(this1,len) {
	return this1.regroup(tink_streams_Regrouper.ofIgnoranceSync(function(chunks) {
		var chunk = chunks[0];
		if(len <= 0) {
			return tink_streams_RegroupResult.Converted(tink_streams_Stream.single(chunk));
		}
		var length = chunk.getLength();
		var out = tink_streams_RegroupResult.Converted(len < length ? tink_streams_Stream.single(chunk.slice(len,length)) : tink_streams_Empty.inst);
		len -= length;
		return out;
	}));
};
tink_io_Source.limit = function(this1,len) {
	if(len == 0) {
		return tink_io_Source.EMPTY;
	}
	return this1.regroup(tink_streams_Regrouper.ofIgnoranceSync(function(chunks) {
		if(len <= 0) {
			return tink_streams_RegroupResult.Terminated(haxe_ds_Option.None);
		}
		var chunk = chunks[0];
		var length = chunk.getLength();
		var out = len == length ? tink_streams_RegroupResult.Terminated(haxe_ds_Option.Some(tink_streams_Stream.single(chunk))) : tink_streams_RegroupResult.Converted(tink_streams_Stream.single(len < length ? chunk.slice(0,len) : chunk));
		len -= length;
		return out;
	}));
};
tink_io_Source.ofError = function(e) {
	return tink_streams_Stream.ofError(e);
};
tink_io_Source.ofFuture = function(f) {
	return tink_streams_Stream.future(f);
};
tink_io_Source.ofPromised = function(p) {
	return tink_streams_Stream.future(tink_core_Future.map(p,function(o) {
		switch(o._hx_index) {
		case 0:
			return o.data;
		case 1:
			return tink_io_Source.ofError(o.failure);
		}
	}));
};
tink_io_Source.ofChunk = function(chunk) {
	return new tink_streams_Single(new tink_core__$Lazy_LazyConst(chunk));
};
tink_io_Source.ofString = function(s) {
	return new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(s))));
};
tink_io_Source.ofBytes = function(b) {
	return new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_chunk_ByteChunk.of(b)));
};
tink_io_Source.ofFutureChunk = function(chunk) {
	return tink_io_Source.ofFuture(tink_core_Future.map(chunk,tink_io_Source.ofChunk));
};
tink_io_Source.ofFutureString = function(s) {
	return tink_io_Source.ofFuture(tink_core_Future.map(s,tink_io_Source.ofString));
};
tink_io_Source.ofFutureBytes = function(b) {
	return tink_io_Source.ofFuture(tink_core_Future.map(b,tink_io_Source.ofBytes));
};
tink_io_Source.ofPromiseChunk = function(chunk) {
	return tink_io_Source.ofPromised(tink_core_Promise.next(chunk,tink_core_Next.ofSafeSync(tink_io_Source.ofChunk)));
};
tink_io_Source.ofPromiseString = function(s) {
	return tink_io_Source.ofPromised(tink_core_Promise.next(s,tink_core_Next.ofSafeSync(tink_io_Source.ofString)));
};
tink_io_Source.ofPromiseBytes = function(b) {
	return tink_io_Source.ofPromised(tink_core_Promise.next(b,tink_core_Next.ofSafeSync(tink_io_Source.ofBytes)));
};
var tink_io_RealSourceTools = function() { };
tink_io_RealSourceTools.__name__ = true;
tink_io_RealSourceTools.all = function(s) {
	return tink_core_Future.map(tink_io_Source.concatAll(s),function(o) {
		switch(o._hx_index) {
		case 1:
			return tink_core_Outcome.Failure(o.error);
		case 2:
			return tink_core_Outcome.Success(o.result);
		}
	});
};
tink_io_RealSourceTools.parse = function(s,p) {
	return tink_core_Future.map(tink_io_StreamParser.parse(s,p),function(r) {
		switch(r._hx_index) {
		case 0:
			var this1 = new tink_core_MPair(r.data,r.rest);
			return tink_core_Outcome.Success(this1);
		case 1:
			return tink_core_Outcome.Failure(r.e);
		case 2:
			return tink_core_Outcome.Failure(r.e);
		}
	});
};
tink_io_RealSourceTools.split = function(src,delim) {
	var s = tink_io_RealSourceTools.parse(src,new tink_io_Splitter(delim));
	return { before : tink_streams_Stream.promise(tink_core_Promise.next(s,tink_core_Next.ofSafeSync(function(p) {
		var _g = p.a;
		switch(_g._hx_index) {
		case 0:
			return new tink_streams_Single(new tink_core__$Lazy_LazyConst(_g.v));
		case 1:
			return src;
		}
	}))), delimiter : tink_core_Promise.next(s,function(p) {
		switch(p.a._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(delim)));
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Failure(new tink_core_TypedError(404,"Delimiter not found",{ fileName : "tink/io/Source.hx", lineNumber : 213, className : "tink.io.RealSourceTools", methodName : "split"}))));
		}
	}), after : tink_streams_Stream.promise(tink_core_Promise.next(s,tink_core_Next.ofSafeSync(function(p) {
		return p.b;
	})))};
};
tink_io_RealSourceTools.parseStream = function(s,p) {
	return tink_io_StreamParser.parseStream(s,p);
};
tink_io_RealSourceTools.idealize = function(s,rescue) {
	return tink_io_Source.chunked(s).idealize(rescue);
};
var tink_io_IdealSourceTools = function() { };
tink_io_IdealSourceTools.__name__ = true;
tink_io_IdealSourceTools.all = function(s) {
	return tink_core_Future.map(tink_io_Source.concatAll(s),function(o) {
		return o.result;
	});
};
tink_io_IdealSourceTools.parse = function(s,p) {
	return tink_core_Future.map(tink_io_StreamParser.parse(s,p),function(r) {
		switch(r._hx_index) {
		case 0:
			var this1 = new tink_core_MPair(r.data,r.rest);
			return tink_core_Outcome.Success(this1);
		case 1:
			return tink_core_Outcome.Failure(r.e);
		}
	});
};
tink_io_IdealSourceTools.parseStream = function(s,p) {
	return tink_io_StreamParser.parseStream(s,p);
};
tink_io_IdealSourceTools.split = function(s,delim) {
	var s1 = tink_io_RealSourceTools.split(s,delim);
	return { before : tink_io_RealSourceTools.idealize(s1.before,function(e) {
		return tink_io_Source.EMPTY;
	}), delimiter : s1.delimiter, after : tink_io_RealSourceTools.idealize(s1.after,function(e) {
		return tink_io_Source.EMPTY;
	})};
};
var tink_io_ParseResult = $hxEnums["tink.io.ParseResult"] = { __ename__:true,__constructs__:null
	,Parsed: ($_=function(data,rest) { return {_hx_index:0,data:data,rest:rest,__enum__:"tink.io.ParseResult",toString:$estr}; },$_._hx_name="Parsed",$_.__params__ = ["data","rest"],$_)
	,Invalid: ($_=function(e,rest) { return {_hx_index:1,e:e,rest:rest,__enum__:"tink.io.ParseResult",toString:$estr}; },$_._hx_name="Invalid",$_.__params__ = ["e","rest"],$_)
	,Broke: ($_=function(e) { return {_hx_index:2,e:e,__enum__:"tink.io.ParseResult",toString:$estr}; },$_._hx_name="Broke",$_.__params__ = ["e"],$_)
};
tink_io_ParseResult.__constructs__ = [tink_io_ParseResult.Parsed,tink_io_ParseResult.Invalid,tink_io_ParseResult.Broke];
var tink_io_StreamParser = {};
tink_io_StreamParser.doParse = function(source,p,consume,finish) {
	var cursor = tink_Chunk.EMPTY.getCursor();
	var resume = true;
	var mk = function(source) {
		if(cursor.currentPos < cursor.length) {
			return source.prepend(new tink_streams_Single(new tink_core__$Lazy_LazyConst(cursor.right())));
		} else {
			return source;
		}
	};
	var flush = function() {
		var _g = cursor.flush();
		if(_g.getLength() == 0) {
			return tink_io_Source.EMPTY;
		} else {
			return new tink_streams_Single(new tink_core__$Lazy_LazyConst(_g));
		}
	};
	return tink_core_Future.flatMap(source.forEach(tink_streams_Handler.ofUnknown(function(chunk) {
		if(chunk.getLength() == 0) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
		}
		cursor.shift(chunk);
		return tink_core_Future.async(function(cb) {
			var next = null;
			next = function() {
				cursor.shift();
				var lastPos = cursor.currentPos;
				var _g = p.progress(cursor);
				switch(_g._hx_index) {
				case 0:
					if(lastPos != cursor.currentPos && cursor.currentPos < cursor.length) {
						next();
					} else {
						cb(tink_streams_Handled.Resume);
					}
					break;
				case 1:
					consume(_g.r).handle(function(o) {
						resume = o.resume;
						if(resume) {
							if(lastPos != cursor.currentPos && cursor.currentPos < cursor.length) {
								next();
							} else {
								cb(tink_streams_Handled.Resume);
							}
						} else {
							cb(tink_streams_Handled.Finish);
						}
					});
					break;
				case 2:
					cb(tink_streams_Handled.Clog(_g.e));
					break;
				}
			};
			next();
		});
	})),function(c) {
		switch(c._hx_index) {
		case 0:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Parsed(finish(),mk(c.rest))));
		case 1:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Invalid(c.error,mk(c.at))));
		case 2:
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Broke(c.error)));
		case 3:
			if(cursor.currentPos < cursor.length) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Parsed(finish(),mk(new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_Chunk.EMPTY))))));
			} else if(!resume) {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Parsed(finish(),flush())));
			} else {
				var _g = p.eof(cursor);
				switch(_g._hx_index) {
				case 0:
					return tink_core_Future.map(consume(_g.data),function(_) {
						return tink_io_ParseResult.Parsed(finish(),flush());
					});
				case 1:
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_io_ParseResult.Invalid(_g.failure,flush())));
				}
			}
			break;
		}
	});
};
tink_io_StreamParser.parse = function(s,p) {
	var res = null;
	var onResult = function(r) {
		res = r;
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst({ resume : false}));
	};
	return tink_io_StreamParser.doParse(s,p,onResult,function() {
		return res;
	});
};
tink_io_StreamParser.parseStream = function(s,p) {
	var next = null;
	next = function(step) {
		if(s.get_depleted()) {
			step(tink_streams_Step.End);
		} else {
			tink_io_StreamParser.parse(s,p).handle(function(o) {
				switch(o._hx_index) {
				case 0:
					s = o.rest;
					step(tink_streams_Step.Link(o.data,tink_streams_Generator.stream(next)));
					break;
				case 1:
					step(tink_streams_Step.Fail(o.e));
					break;
				case 2:
					step(tink_streams_Step.Fail(o.e));
					break;
				}
			});
		}
	};
	return tink_streams_Generator.stream(next);
};
var tink_io_Splitter = function(delim) {
	this.buf = tink_Chunk.EMPTY;
	this.delim = delim;
};
tink_io_Splitter.__name__ = true;
tink_io_Splitter.__super__ = tink_io_BytewiseParser;
tink_io_Splitter.prototype = $extend(tink_io_BytewiseParser.prototype,{
	read: function(char) {
		if(char == -1) {
			return tink_io_ParseStep.Done(haxe_ds_Option.None);
		}
		this.buf = tink_Chunk.concat(this.buf,tink_chunk_ByteChunk.of(haxe_io_Bytes.ofString(String.fromCodePoint(char))));
		if(this.buf.getLength() >= this.delim.getLength()) {
			var bcursor = this.buf.getCursor();
			var delta = this.buf.getLength() - this.delim.getLength();
			bcursor.moveTo(bcursor.currentPos + delta);
			var dcursor = this.delim.getCursor();
			var _g = 0;
			var _g1 = this.delim.getLength();
			while(_g < _g1) {
				_g++;
				if(bcursor.currentByte != dcursor.currentByte) {
					return tink_io_ParseStep.Progressed;
				} else {
					bcursor.next();
					dcursor.next();
				}
			}
			var out = tink_io_ParseStep.Done(haxe_ds_Option.Some(this.buf.slice(0,bcursor.currentPos - this.delim.getLength())));
			this.buf = tink_Chunk.EMPTY;
			return out;
		} else {
			return tink_io_ParseStep.Progressed;
		}
	}
	,__class__: tink_io_Splitter
});
var tink_io_SimpleBytewiseParser = function(f) {
	this._read = f;
};
tink_io_SimpleBytewiseParser.__name__ = true;
tink_io_SimpleBytewiseParser.__super__ = tink_io_BytewiseParser;
tink_io_SimpleBytewiseParser.prototype = $extend(tink_io_BytewiseParser.prototype,{
	read: function(char) {
		return this._read(char);
	}
	,__class__: tink_io_SimpleBytewiseParser
});
var tink_io_WorkerObject = function() { };
tink_io_WorkerObject.__name__ = true;
tink_io_WorkerObject.__isInterface__ = true;
tink_io_WorkerObject.prototype = {
	__class__: tink_io_WorkerObject
};
var tink_io__$Worker_EagerWorker = function() {
};
tink_io__$Worker_EagerWorker.__name__ = true;
tink_io__$Worker_EagerWorker.__interfaces__ = [tink_io_WorkerObject];
tink_io__$Worker_EagerWorker.prototype = {
	work: function(task) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Lazy.get(task)));
	}
	,__class__: tink_io__$Worker_EagerWorker
};
var tink_io_Worker = {};
tink_io_Worker.ensure = function(this1) {
	if(this1 == null) {
		return tink_io_Worker.get();
	} else {
		return this1;
	}
};
tink_io_Worker.get = function() {
	return tink_io_Worker.pool[Std.random(tink_io_Worker.pool.length)];
};
tink_io_Worker.work = function(this1,task) {
	return this1.work(task);
};
var tink_streams_Generator = function(upcoming) {
	tink_streams_StreamBase.call(this);
	this.upcoming = upcoming;
};
tink_streams_Generator.__name__ = true;
tink_streams_Generator.stream = function(step) {
	return new tink_streams_Generator(tink_core_Future.async(step));
};
tink_streams_Generator.__super__ = tink_streams_StreamBase;
tink_streams_Generator.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return this.upcoming;
	}
	,forEach: function(handler) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			_gthis.upcoming.handle(function(e) {
				switch(e._hx_index) {
				case 0:
					var then = e.next;
					handler(e.value).handle(function(s) {
						switch(s._hx_index) {
						case 0:
							cb(tink_streams_Conclusion.Halted(_gthis));
							break;
						case 1:
							cb(tink_streams_Conclusion.Halted(then));
							break;
						case 2:
							then.forEach(handler).handle(cb);
							break;
						case 3:
							cb(tink_streams_Conclusion.Clogged(s.e,_gthis));
							break;
						}
					});
					break;
				case 1:
					cb(tink_streams_Conclusion.Failed(e.e));
					break;
				case 2:
					cb(tink_streams_Conclusion.Depleted);
					break;
				}
			});
		});
	}
	,__class__: tink_streams_Generator
});
var tink_io_js_BlobSource = function(name,blob,pos,chunkSize) {
	this.name = name;
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		if(pos >= blob.size) {
			cb(tink_streams_Step.End);
		} else {
			var end = pos + chunkSize;
			if(end > blob.size) {
				end = blob.size;
			}
			var reader = new FileReader();
			reader.onload = function() {
				var chunk = tink_chunk_ByteChunk.of(haxe_io_Bytes.ofData(reader.result));
				cb(tink_streams_Step.Link(chunk,new tink_io_js_BlobSource(name,blob,end,chunkSize)));
			};
			reader.onerror = function(e) {
				cb(tink_streams_Step.Fail(tink_core_TypedError.withData(500,e.message,e,{ fileName : "tink/io/js/BlobSource.hx", lineNumber : 29, className : "tink.io.js.BlobSource", methodName : "new"})));
			};
			reader.readAsArrayBuffer(blob.slice(pos,end));
		}
	},true));
};
tink_io_js_BlobSource.__name__ = true;
tink_io_js_BlobSource.wrap = function(name,blob,chunkSize) {
	return new tink_io_js_BlobSource(name,blob,0,chunkSize);
};
tink_io_js_BlobSource.__super__ = tink_streams_Generator;
tink_io_js_BlobSource.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_io_js_BlobSource
});
var tink_io_nodejs_NodejsSink = function(target) {
	this.target = target;
};
tink_io_nodejs_NodejsSink.__name__ = true;
tink_io_nodejs_NodejsSink.wrap = function(name,native) {
	return new tink_io_nodejs_NodejsSink(new tink_io_nodejs_WrappedWritable(name,native));
};
tink_io_nodejs_NodejsSink.__super__ = tink_io_SinkBase;
tink_io_nodejs_NodejsSink.prototype = $extend(tink_io_SinkBase.prototype,{
	consume: function(source,options) {
		var _gthis = this;
		var ret = source.forEach(tink_streams_Handler.ofUnknown(function(c) {
			return tink_core_Future.map(_gthis.target.write(c),function(w) {
				switch(w._hx_index) {
				case 0:
					if(w.data) {
						return tink_streams_Handled.Resume;
					} else {
						return tink_streams_Handled.BackOff;
					}
					break;
				case 1:
					return tink_streams_Handled.Clog(w.failure);
				}
			});
		}));
		if(options != null && options.end) {
			ret.handle(function(end) {
				_gthis.target.end();
			});
		}
		return tink_core_Future.map(ret,function(c) {
			return tink_io_PipeResultTools.toResult(c,null);
		});
	}
	,__class__: tink_io_nodejs_NodejsSink
});
var tink_io_nodejs_NodejsSource = function(target) {
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		target.read().handle(function(o) {
			var cb1 = cb;
			var tmp;
			switch(o._hx_index) {
			case 0:
				var _g = o.data;
				tmp = _g == null ? tink_streams_Step.End : tink_streams_Step.Link(_g,new tink_io_nodejs_NodejsSource(target));
				break;
			case 1:
				tmp = tink_streams_Step.Fail(o.failure);
				break;
			}
			cb1(tmp);
		});
	},true));
};
tink_io_nodejs_NodejsSource.__name__ = true;
tink_io_nodejs_NodejsSource.wrap = function(name,native,chunkSize,onEnd) {
	return new tink_io_nodejs_NodejsSource(new tink_io_nodejs_WrappedReadable(name,native,chunkSize,onEnd));
};
tink_io_nodejs_NodejsSource.__super__ = tink_streams_Generator;
tink_io_nodejs_NodejsSource.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_io_nodejs_NodejsSource
});
var tink_io_nodejs_WrappedReadable = function(name,native,chunkSize,onEnd) {
	this.name = name;
	this.native = native;
	this.chunkSize = chunkSize;
	var this1 = tink_core_Future.async(function(cb) {
		native.once("end",function() {
			cb(tink_core_Outcome.Success(null));
		});
		native.once("error",function(e) {
			cb(tink_core_Outcome.Failure(new tink_core_TypedError(null,"" + e.code + " - Failed reading from " + name + " because " + e.message,{ fileName : "tink/io/nodejs/WrappedReadable.hx", lineNumber : 22, className : "tink.io.nodejs.WrappedReadable", methodName : "new"})));
		});
	});
	this1.eager();
	this.end = this1;
	if(onEnd != null) {
		this.end.handle(function() {
			process.nextTick(onEnd);
		});
	}
};
tink_io_nodejs_WrappedReadable.__name__ = true;
tink_io_nodejs_WrappedReadable.prototype = {
	read: function() {
		var _gthis = this;
		return tink_core_Future.first(tink_core_Future.async(function(cb) {
			var attempt = null;
			attempt = function() {
				try {
					var _g = _gthis.native.read(_gthis.chunkSize);
					if(_g == null) {
						_gthis.native.once("readable",attempt);
					} else {
						var buf = typeof(_g) == "string" ? new js_node_buffer_Buffer(_g) : _g;
						cb(tink_core_Outcome.Success(new tink_chunk_nodejs_BufferChunk(buf)));
					}
				} catch( _g ) {
					var _g1 = haxe_Exception.caught(_g).unwrap();
					cb(tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error while reading from " + _gthis.name,_g1,{ fileName : "tink/io/nodejs/WrappedReadable.hx", lineNumber : 48, className : "tink.io.nodejs.WrappedReadable", methodName : "read"})));
				}
			};
			attempt();
		}),this.end);
	}
	,__class__: tink_io_nodejs_WrappedReadable
};
var tink_io_nodejs_WrappedWritable = function(name,native) {
	this.name = name;
	this.native = native;
	this.ended = tink_core_Future.async(function(cb) {
		native.once("end",function() {
			cb(tink_core_Outcome.Success(false));
		});
		native.once("finish",function() {
			cb(tink_core_Outcome.Success(false));
		});
		native.once("close",function() {
			cb(tink_core_Outcome.Success(false));
		});
		native.on("error",function(e) {
			cb(tink_core_Outcome.Failure(new tink_core_TypedError(null,"" + e.code + ": " + e.message,{ fileName : "tink/io/nodejs/WrappedWritable.hx", lineNumber : 24, className : "tink.io.nodejs.WrappedWritable", methodName : "new"})));
		});
	});
};
tink_io_nodejs_WrappedWritable.__name__ = true;
tink_io_nodejs_WrappedWritable.prototype = {
	end: function() {
		var didEnd = false;
		var this1 = this.ended.handle(function() {
			didEnd = true;
		});
		if(this1 != null) {
			this1.cancel();
		}
		if(didEnd) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(false)));
		}
		this.native.end();
		return tink_core_Promise.next(this.ended,function(_) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(true)));
		});
	}
	,write: function(chunk) {
		var _gthis = this;
		return tink_core_Future.first(tink_core_Future.async(function(cb) {
			if(chunk.getLength() == 0) {
				cb(tink_core_Outcome.Success(true));
				return;
			}
			var buf;
			if(js_node_buffer_Buffer.isBuffer(chunk.buffer)) {
				buf = chunk.buffer;
			} else {
				var b = chunk.toBytes();
				var data = b.b;
				buf = js_node_buffer_Buffer.from(data.buffer,data.byteOffset,b.length);
			}
			var _g = cb;
			var a1 = tink_core_Outcome.Success(true);
			var tmp = function() {
				_g(a1);
			};
			_gthis.native.write(buf,null,tmp);
		}),this.ended);
	}
	,__class__: tink_io_nodejs_WrappedWritable
};
var tink_io_std_InputSource = function(name,target,worker,buf,offset) {
	var next = function(buf,offset) {
		return new tink_io_std_InputSource(name,target,worker,buf,offset);
	};
	var free = buf.length - offset;
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		tink_io_Worker.work(worker,new tink_core__$Lazy_LazyFunc(function() {
			try {
				var read = target.readBytes(buf,offset,free);
				if(read == 0) {
					return tink_streams_Step.Link(tink_Chunk.EMPTY,next(buf,offset));
				} else {
					var nextOffset = free - read < 1024 ? 0 : offset + read;
					var nextBuf = nextOffset == 0 ? new haxe_io_Bytes(new ArrayBuffer(buf.length)) : buf;
					return tink_streams_Step.Link(tink_chunk_ByteChunk.of(buf).slice(offset,offset + read),next(nextBuf,nextOffset));
				}
			} catch( _g ) {
				var _g1 = haxe_Exception.caught(_g).unwrap();
				if(((_g1) instanceof haxe_io_Eof)) {
					return tink_streams_Step.End;
				} else if(js_Boot.__instanceof(_g1,haxe_io_Error)) {
					var e = _g1;
					if(e._hx_index == 0) {
						return tink_streams_Step.Link(tink_Chunk.EMPTY,next(buf,offset));
					} else {
						return tink_streams_Step.Fail(tink_core_TypedError.withData(null,"Failed to read from " + name,e,{ fileName : "tink/io/std/InputSource.hx", lineNumber : 50, className : "tink.io.std.InputSource", methodName : "new"}));
					}
				} else {
					throw _g;
				}
			}
		})).handle(function(step) {
			switch(step._hx_index) {
			case 1:
				try {
					target.close();
				} catch( _g ) {
				}
				break;
			case 2:
				try {
					target.close();
				} catch( _g ) {
				}
				break;
			default:
			}
			cb(step);
		});
	},true));
};
tink_io_std_InputSource.__name__ = true;
tink_io_std_InputSource.__super__ = tink_streams_Generator;
tink_io_std_InputSource.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_io_std_InputSource
});
var tink_io_std_OutputSink = function(name,target,worker) {
	this.name = name;
	this.target = target;
	this.worker = worker;
};
tink_io_std_OutputSink.__name__ = true;
tink_io_std_OutputSink.__super__ = tink_io_SinkBase;
tink_io_std_OutputSink.prototype = $extend(tink_io_SinkBase.prototype,{
	consume: function(source,options) {
		var _gthis = this;
		var rest = tink_Chunk.EMPTY;
		var ret = source.forEach(tink_streams_Handler.ofUnknown(function(c) {
			return tink_core_Future.async(function(cb) {
				var pos = 0;
				var bytes = c.toBytes();
				var write = null;
				write = function() {
					if(pos == bytes.length) {
						cb(tink_streams_Handled.Resume);
					} else {
						tink_io_Worker.work(_gthis.worker,new tink_core__$Lazy_LazyFunc(function() {
							try {
								return tink_core_Outcome.Success(_gthis.target.writeBytes(bytes,pos,bytes.length - pos));
							} catch( _g ) {
								var _g1 = haxe_Exception.caught(_g).unwrap();
								if(((_g1) instanceof haxe_io_Eof)) {
									return tink_core_Outcome.Success(-1);
								} else if(js_Boot.__instanceof(_g1,haxe_io_Error)) {
									var e = _g1;
									if(e._hx_index == 0) {
										return tink_core_Outcome.Success(0);
									} else {
										return tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error writing to " + _gthis.name,e,{ fileName : "tink/io/std/OutputSink.hx", lineNumber : 40, className : "tink.io.std.OutputSink", methodName : "consume"}));
									}
								} else if(((_g1) instanceof tink_core_TypedError)) {
									var e = _g1;
									return tink_core_Outcome.Failure(e);
								} else {
									return tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error writing to " + _gthis.name,_g1,{ fileName : "tink/io/std/OutputSink.hx", lineNumber : 46, className : "tink.io.std.OutputSink", methodName : "consume"}));
								}
							}
						})).handle(function(o) {
							switch(o._hx_index) {
							case 0:
								var _g = o.data;
								if(_g == -1) {
									rest = tink_chunk_ByteChunk.of(bytes).slice(pos,bytes.length);
									cb(tink_streams_Handled.Finish);
								} else {
									pos += _g;
									if(pos == bytes.length) {
										cb(tink_streams_Handled.Resume);
									} else {
										write();
									}
								}
								break;
							case 1:
								cb(tink_streams_Handled.Clog(o.failure));
								break;
							}
						});
					}
				};
				write();
			});
		}));
		if(options != null && options.end) {
			ret.handle(function(end) {
				try {
					_gthis.target.close();
				} catch( _g ) {
				}
			});
		}
		return tink_core_Future.map(ret,function(c) {
			return tink_io_PipeResultTools.toResult(c,null,rest);
		});
	}
	,__class__: tink_io_std_OutputSink
});
var tink_streams_IdealStream = {};
tink_streams_IdealStream.promiseOfIdealStream = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_IdealStream.promiseOfStreamNoise = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_IdealStream.collect = function(this1) {
	var buf = [];
	return tink_core_Future.map(this1.forEach(tink_streams_Handler.ofSafe(function(x) {
		buf.push(x);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
	})),function(c) {
		return buf;
	});
};
var tink_streams_IdealStreamBase = function() {
	tink_streams_StreamBase.call(this);
};
tink_streams_IdealStreamBase.__name__ = true;
tink_streams_IdealStreamBase.__super__ = tink_streams_StreamBase;
tink_streams_IdealStreamBase.prototype = $extend(tink_streams_StreamBase.prototype,{
	idealize: function(rescue) {
		return this;
	}
	,__class__: tink_streams_IdealStreamBase
});
var tink_streams_RealStream = {};
tink_streams_RealStream.promiseOfIdealStream = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_RealStream.promiseOfStreamNoise = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_RealStream.promiseOfRealStream = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_RealStream.promiseOfStreamError = function(p) {
	return tink_streams_Stream.promise(p);
};
tink_streams_RealStream.collect = function(this1) {
	var buf = [];
	return tink_core_Future.map(this1.forEach(tink_streams_Handler.ofSafe(function(x) {
		buf.push(x);
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Handled.Resume));
	})),function(c) {
		switch(c._hx_index) {
		case 0:
			throw haxe_Exception.thrown("unreachable");
		case 2:
			return tink_core_Outcome.Failure(c.error);
		case 3:
			return tink_core_Outcome.Success(buf);
		}
	});
};
var tink_streams_Stream = {};
tink_streams_Stream.get_depleted = function(this1) {
	return this1.get_depleted();
};
tink_streams_Stream.dirty = function(this1) {
	return this1;
};
tink_streams_Stream.single = function(i) {
	return new tink_streams_Single(new tink_core__$Lazy_LazyConst(i));
};
tink_streams_Stream.ofIterator = function(i) {
	var next = null;
	next = function(step) {
		step(i.hasNext() ? tink_streams_Step.Link(i.next(),tink_streams_Generator.stream(next)) : tink_streams_Step.End);
	};
	return tink_streams_Generator.stream(next);
};
tink_streams_Stream.flatten = function(stream) {
	return stream.regroup(tink_streams_Regrouper.ofIgnoranceSync(function(arr) {
		return tink_streams_RegroupResult.Converted(arr[0]);
	}));
};
tink_streams_Stream.future = function(f) {
	return new tink_streams_FutureStream(f);
};
tink_streams_Stream.promiseIdeal = function(f) {
	return tink_streams_Stream.promise(f);
};
tink_streams_Stream.promiseReal = function(f) {
	return tink_streams_Stream.promise(f);
};
tink_streams_Stream.promise = function(f) {
	return tink_streams_Stream.future(tink_core_Future.map(f,function(o) {
		switch(o._hx_index) {
		case 0:
			return tink_streams_Stream.dirty(o.data);
		case 1:
			return tink_streams_Stream.ofError(o.failure);
		}
	}));
};
tink_streams_Stream.ofError = function(e) {
	return new tink_streams__$Stream_ErrorStream(e);
};
tink_streams_Stream.ofNodeStream = function(name,r,options) {
	return tink_streams_nodejs_NodejsStream.wrap(name,r,options == null ? null : options.onEnd);
};
var tink_streams_RegroupStatus = $hxEnums["tink.streams.RegroupStatus"] = { __ename__:true,__constructs__:null
	,Flowing: {_hx_name:"Flowing",_hx_index:0,__enum__:"tink.streams.RegroupStatus",toString:$estr}
	,Errored: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.RegroupStatus",toString:$estr}; },$_._hx_name="Errored",$_.__params__ = ["e"],$_)
	,Ended: {_hx_name:"Ended",_hx_index:2,__enum__:"tink.streams.RegroupStatus",toString:$estr}
};
tink_streams_RegroupStatus.__constructs__ = [tink_streams_RegroupStatus.Flowing,tink_streams_RegroupStatus.Errored,tink_streams_RegroupStatus.Ended];
var tink_streams_RegroupResult = $hxEnums["tink.streams.RegroupResult"] = { __ename__:true,__constructs__:null
	,Converted: ($_=function(data,untouched) { return {_hx_index:0,data:data,untouched:untouched,__enum__:"tink.streams.RegroupResult",toString:$estr}; },$_._hx_name="Converted",$_.__params__ = ["data","untouched"],$_)
	,Terminated: ($_=function(data) { return {_hx_index:1,data:data,__enum__:"tink.streams.RegroupResult",toString:$estr}; },$_._hx_name="Terminated",$_.__params__ = ["data"],$_)
	,Untouched: {_hx_name:"Untouched",_hx_index:2,__enum__:"tink.streams.RegroupResult",toString:$estr}
	,Errored: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.streams.RegroupResult",toString:$estr}; },$_._hx_name="Errored",$_.__params__ = ["e"],$_)
};
tink_streams_RegroupResult.__constructs__ = [tink_streams_RegroupResult.Converted,tink_streams_RegroupResult.Terminated,tink_streams_RegroupResult.Untouched,tink_streams_RegroupResult.Errored];
var tink_streams_Regrouper = {};
tink_streams_Regrouper.ofIgnorance = function(f) {
	return { apply : function(i,_) {
		return f(i);
	}};
};
tink_streams_Regrouper.ofIgnoranceSync = function(f) {
	return { apply : function(i,_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(i)));
	}};
};
tink_streams_Regrouper.ofFunc = function(f) {
	return { apply : f};
};
tink_streams_Regrouper.ofFuncSync = function(f) {
	return { apply : function(i,s) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(i,s)));
	}};
};
var tink_streams__$Stream_CompoundStream = function(parts) {
	tink_streams_StreamBase.call(this);
	this.parts = parts;
};
tink_streams__$Stream_CompoundStream.__name__ = true;
tink_streams__$Stream_CompoundStream.consumeParts = function(parts,handler,cb) {
	if(parts.length == 0) {
		cb(tink_streams_Conclusion.Depleted);
	} else {
		parts[0].forEach(handler).handle(function(o) {
			switch(o._hx_index) {
			case 0:
				parts = parts.slice();
				parts[0] = o.rest;
				cb(tink_streams_Conclusion.Halted(new tink_streams__$Stream_CompoundStream(parts)));
				break;
			case 1:
				var _g = o.at;
				if(_g.get_depleted()) {
					parts = parts.slice(1);
				} else {
					parts = parts.slice();
					parts[0] = _g;
				}
				cb(tink_streams_Conclusion.Clogged(o.error,new tink_streams__$Stream_CompoundStream(parts)));
				break;
			case 2:
				cb(tink_streams_Conclusion.Failed(o.error));
				break;
			case 3:
				tink_streams__$Stream_CompoundStream.consumeParts(parts.slice(1),handler,cb);
				break;
			}
		});
	}
};
tink_streams__$Stream_CompoundStream.of = function(streams) {
	var ret = [];
	var _g = 0;
	while(_g < streams.length) {
		var s = streams[_g];
		++_g;
		s.decompose(ret);
	}
	if(ret.length == 0) {
		return tink_streams_Empty.inst;
	} else {
		return new tink_streams__$Stream_CompoundStream(ret);
	}
};
tink_streams__$Stream_CompoundStream.__super__ = tink_streams_StreamBase;
tink_streams__$Stream_CompoundStream.prototype = $extend(tink_streams_StreamBase.prototype,{
	get_depleted: function() {
		switch(this.parts.length) {
		case 0:
			return true;
		case 1:
			return this.parts[0].get_depleted();
		default:
			return false;
		}
	}
	,next: function() {
		var _gthis = this;
		if(this.parts.length == 0) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.End));
		} else {
			return tink_core_Future.flatMap(this.parts[0].next(),function(v) {
				switch(v._hx_index) {
				case 0:
					var copy = _gthis.parts.slice();
					copy[0] = v.next;
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.Link(v.value,new tink_streams__$Stream_CompoundStream(copy))));
				case 2:
					if(_gthis.parts.length > 1) {
						return _gthis.parts[1].next();
					} else {
						return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
					}
					break;
				default:
					return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
				}
			});
		}
	}
	,decompose: function(into) {
		var _g = 0;
		var _g1 = this.parts;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			p.decompose(into);
		}
	}
	,forEach: function(handler) {
		var parts = this.parts;
		var handler1 = handler;
		return tink_core_Future.async(function(cb) {
			tink_streams__$Stream_CompoundStream.consumeParts(parts,handler1,cb);
		});
	}
	,__class__: tink_streams__$Stream_CompoundStream
});
var tink_streams__$Stream_RegroupStream = function(source,f,prev,buf) {
	if(prev == null) {
		prev = tink_streams_Empty.inst;
	}
	if(buf == null) {
		buf = [];
	}
	var ret = null;
	var terminated = false;
	var next = tink_streams_Stream.future(tink_core_Future.map(source.forEach(tink_streams_Handler.ofUnknown(function(item) {
		buf.push(item);
		return tink_core_Future.map(f.apply(buf,tink_streams_RegroupStatus.Flowing),function(o) {
			switch(o._hx_index) {
			case 0:
				ret = o.data;
				buf = o.untouched;
				return tink_streams_Handled.Finish;
			case 1:
				var _g = o.data;
				ret = _g._hx_index == 0 ? _g.v : tink_core_Lazy.get(new tink_core__$Lazy_LazyFunc(tink_streams_Empty.make));
				terminated = true;
				return tink_streams_Handled.Finish;
			case 2:
				return tink_streams_Handled.Resume;
			case 3:
				return tink_streams_Handled.Clog(o.e);
			}
		});
	})),function(o) {
		switch(o._hx_index) {
		case 0:
			if(terminated) {
				return ret;
			} else {
				return new tink_streams__$Stream_RegroupStream(o.rest,f,ret,buf);
			}
			break;
		case 1:
			return new tink_streams__$Stream_ErrorStream(o.error);
		case 2:
			return tink_streams_Stream.ofError(o.error);
		case 3:
			if(buf.length == 0) {
				return tink_streams_Empty.inst;
			} else {
				return tink_streams_Stream.future(tink_core_Future.map(f.apply(buf,tink_streams_RegroupStatus.Ended),function(o) {
					switch(o._hx_index) {
					case 0:
						return o.data;
					case 1:
						var _g = o.data;
						if(_g._hx_index == 0) {
							return _g.v;
						} else {
							return tink_core_Lazy.get(new tink_core__$Lazy_LazyFunc(tink_streams_Empty.make));
						}
						break;
					case 2:
						return tink_streams_Empty.inst;
					case 3:
						return tink_streams_Stream.ofError(o.e);
					}
				}));
			}
			break;
		}
	}));
	tink_streams__$Stream_CompoundStream.call(this,[prev,next]);
};
tink_streams__$Stream_RegroupStream.__name__ = true;
tink_streams__$Stream_RegroupStream.__super__ = tink_streams__$Stream_CompoundStream;
tink_streams__$Stream_RegroupStream.prototype = $extend(tink_streams__$Stream_CompoundStream.prototype,{
	__class__: tink_streams__$Stream_RegroupStream
});
var tink_streams_Handled = $hxEnums["tink.streams.Handled"] = { __ename__:true,__constructs__:null
	,BackOff: {_hx_name:"BackOff",_hx_index:0,__enum__:"tink.streams.Handled",toString:$estr}
	,Finish: {_hx_name:"Finish",_hx_index:1,__enum__:"tink.streams.Handled",toString:$estr}
	,Resume: {_hx_name:"Resume",_hx_index:2,__enum__:"tink.streams.Handled",toString:$estr}
	,Clog: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"tink.streams.Handled",toString:$estr}; },$_._hx_name="Clog",$_.__params__ = ["e"],$_)
};
tink_streams_Handled.__constructs__ = [tink_streams_Handled.BackOff,tink_streams_Handled.Finish,tink_streams_Handled.Resume,tink_streams_Handled.Clog];
var tink_streams_Conclusion = $hxEnums["tink.streams.Conclusion"] = { __ename__:true,__constructs__:null
	,Halted: ($_=function(rest) { return {_hx_index:0,rest:rest,__enum__:"tink.streams.Conclusion",toString:$estr}; },$_._hx_name="Halted",$_.__params__ = ["rest"],$_)
	,Clogged: ($_=function(error,at) { return {_hx_index:1,error:error,at:at,__enum__:"tink.streams.Conclusion",toString:$estr}; },$_._hx_name="Clogged",$_.__params__ = ["error","at"],$_)
	,Failed: ($_=function(error) { return {_hx_index:2,error:error,__enum__:"tink.streams.Conclusion",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["error"],$_)
	,Depleted: {_hx_name:"Depleted",_hx_index:3,__enum__:"tink.streams.Conclusion",toString:$estr}
};
tink_streams_Conclusion.__constructs__ = [tink_streams_Conclusion.Halted,tink_streams_Conclusion.Clogged,tink_streams_Conclusion.Failed,tink_streams_Conclusion.Depleted];
var tink_streams_ReductionStep = $hxEnums["tink.streams.ReductionStep"] = { __ename__:true,__constructs__:null
	,Progress: ($_=function(result) { return {_hx_index:0,result:result,__enum__:"tink.streams.ReductionStep",toString:$estr}; },$_._hx_name="Progress",$_.__params__ = ["result"],$_)
	,Crash: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.ReductionStep",toString:$estr}; },$_._hx_name="Crash",$_.__params__ = ["e"],$_)
};
tink_streams_ReductionStep.__constructs__ = [tink_streams_ReductionStep.Progress,tink_streams_ReductionStep.Crash];
var tink_streams_Reduction = $hxEnums["tink.streams.Reduction"] = { __ename__:true,__constructs__:null
	,Crashed: ($_=function(error,at) { return {_hx_index:0,error:error,at:at,__enum__:"tink.streams.Reduction",toString:$estr}; },$_._hx_name="Crashed",$_.__params__ = ["error","at"],$_)
	,Failed: ($_=function(error) { return {_hx_index:1,error:error,__enum__:"tink.streams.Reduction",toString:$estr}; },$_._hx_name="Failed",$_.__params__ = ["error"],$_)
	,Reduced: ($_=function(result) { return {_hx_index:2,result:result,__enum__:"tink.streams.Reduction",toString:$estr}; },$_._hx_name="Reduced",$_.__params__ = ["result"],$_)
};
tink_streams_Reduction.__constructs__ = [tink_streams_Reduction.Crashed,tink_streams_Reduction.Failed,tink_streams_Reduction.Reduced];
var tink_streams__$Stream_CloggedStream = function(rest,error) {
	tink_streams_StreamBase.call(this);
	this.rest = rest;
	this.error = error;
};
tink_streams__$Stream_CloggedStream.__name__ = true;
tink_streams__$Stream_CloggedStream.__super__ = tink_streams_StreamBase;
tink_streams__$Stream_CloggedStream.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.Fail(this.error)));
	}
	,forEach: function(handler) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Conclusion.Clogged(this.error,this.rest)));
	}
	,__class__: tink_streams__$Stream_CloggedStream
});
var tink_streams__$Stream_ErrorStream = function(error) {
	tink_streams_StreamBase.call(this);
	this.error = error;
};
tink_streams__$Stream_ErrorStream.__name__ = true;
tink_streams__$Stream_ErrorStream.__super__ = tink_streams_StreamBase;
tink_streams__$Stream_ErrorStream.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.Fail(this.error)));
	}
	,forEach: function(handler) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Conclusion.Failed(this.error)));
	}
	,__class__: tink_streams__$Stream_ErrorStream
});
var tink_streams_Mapping = {};
tink_streams_Mapping._new = function(o) {
	return o;
};
tink_streams_Mapping.ofNext = function(n) {
	var this1 = { apply : function(i,_) {
		var this1 = tink_core_Promise.next(n(i[0]),function(o) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(tink_streams_RegroupResult.Converted(tink_streams_Stream.single(o)))));
		});
		var f = tink_core_Recover.ofSync(tink_streams_RegroupResult.Errored);
		return tink_core_Future.flatMap(this1,function(o) {
			switch(o._hx_index) {
			case 0:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o.data));
			case 1:
				return f(o.failure);
			}
		});
	}};
	return this1;
};
tink_streams_Mapping.ofAsync = function(f) {
	var this1 = { apply : function(i,_) {
		return tink_core_Future.map(f(i[0]),function(o) {
			return tink_streams_RegroupResult.Converted(tink_streams_Stream.single(o));
		});
	}};
	return this1;
};
tink_streams_Mapping.ofSync = function(f) {
	var this1 = { apply : function(i,_) {
		var v;
		var _g = f(i[0]);
		switch(_g._hx_index) {
		case 0:
			v = tink_streams_RegroupResult.Converted(tink_streams_Stream.single(_g.data));
			break;
		case 1:
			v = tink_streams_RegroupResult.Errored(_g.failure);
			break;
		}
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
	}};
	return this1;
};
tink_streams_Mapping.ofPlain = function(f) {
	var this1 = { apply : function(i,_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_RegroupResult.Converted(tink_streams_Stream.single(f(i[0])))));
	}};
	return this1;
};
var tink_streams_Filter = {};
tink_streams_Filter._new = function(o) {
	return o;
};
tink_streams_Filter.ofNext = function(n) {
	var this1 = { apply : function(i,_) {
		var this1 = tink_core_Promise.next(n(i[0]),function(matched) {
			return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(tink_streams_RegroupResult.Converted(matched ? tink_streams_Stream.single(i[0]) : tink_streams_Empty.inst))));
		});
		var f = tink_core_Recover.ofSync(tink_streams_RegroupResult.Errored);
		return tink_core_Future.flatMap(this1,function(o) {
			switch(o._hx_index) {
			case 0:
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(o.data));
			case 1:
				return f(o.failure);
			}
		});
	}};
	return this1;
};
tink_streams_Filter.ofAsync = function(f) {
	var this1 = { apply : function(i,_) {
		return tink_core_Future.map(f(i[0]),function(matched) {
			return tink_streams_RegroupResult.Converted(matched ? tink_streams_Stream.single(i[0]) : tink_streams_Empty.inst);
		});
	}};
	return this1;
};
tink_streams_Filter.ofSync = function(f) {
	var this1 = { apply : function(i,_) {
		var v;
		var _g = f(i[0]);
		switch(_g._hx_index) {
		case 0:
			v = tink_streams_RegroupResult.Converted(_g.data ? tink_streams_Stream.single(i[0]) : tink_streams_Empty.inst);
			break;
		case 1:
			v = tink_streams_RegroupResult.Errored(_g.failure);
			break;
		}
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
	}};
	return this1;
};
tink_streams_Filter.ofPlain = function(f) {
	var this1 = { apply : function(i,_) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_RegroupResult.Converted(f(i[0]) ? tink_streams_Stream.single(i[0]) : tink_streams_Empty.inst)));
	}};
	return this1;
};
var tink_streams_IdealizeStream = function(target,rescue) {
	tink_streams_IdealStreamBase.call(this);
	this.target = target;
	this.rescue = rescue;
};
tink_streams_IdealizeStream.__name__ = true;
tink_streams_IdealizeStream.__super__ = tink_streams_IdealStreamBase;
tink_streams_IdealizeStream.prototype = $extend(tink_streams_IdealStreamBase.prototype,{
	get_depleted: function() {
		return this.target.get_depleted();
	}
	,next: function() {
		var _gthis = this;
		return tink_core_Future.flatMap(this.target.next(),function(v) {
			if(v._hx_index == 1) {
				return _gthis.rescue(v.e).idealize(_gthis.rescue).next();
			} else {
				return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(v));
			}
		});
	}
	,forEach: function(handler) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			_gthis.target.forEach(handler).handle(function(end) {
				switch(end._hx_index) {
				case 0:
					cb(tink_streams_Conclusion.Halted(end.rest.idealize(_gthis.rescue)));
					break;
				case 1:
					cb(tink_streams_Conclusion.Clogged(end.error,end.at.idealize(_gthis.rescue)));
					break;
				case 2:
					_gthis.rescue(end.error).idealize(_gthis.rescue).forEach(handler).handle(cb);
					break;
				case 3:
					cb(tink_streams_Conclusion.Depleted);
					break;
				}
			});
		});
	}
	,__class__: tink_streams_IdealizeStream
});
var tink_streams_Single = function(value) {
	tink_streams_StreamBase.call(this);
	this.value = value;
};
tink_streams_Single.__name__ = true;
tink_streams_Single.__super__ = tink_streams_StreamBase;
tink_streams_Single.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_Step.Link(tink_core_Lazy.get(this.value),tink_streams_Empty.inst)));
	}
	,forEach: function(handle) {
		var _gthis = this;
		return tink_core_Future.map(handle(tink_core_Lazy.get(this.value)),function(step) {
			switch(step._hx_index) {
			case 0:
				return tink_streams_Conclusion.Halted(_gthis);
			case 1:
				return tink_streams_Conclusion.Halted(tink_streams_Empty.inst);
			case 2:
				return tink_streams_Conclusion.Depleted;
			case 3:
				return tink_streams_Conclusion.Clogged(step.e,_gthis);
			}
		});
	}
	,__class__: tink_streams_Single
});
var tink_streams_Handler = {};
tink_streams_Handler._new = function(f) {
	return f;
};
tink_streams_Handler.apply = function(this1,item) {
	return this1(item);
};
tink_streams_Handler.ofSafeSync = function(f) {
	var this1 = function(i) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(i)));
	};
	return this1;
};
tink_streams_Handler.ofUnknownSync = function(f) {
	var this1 = function(i) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(i)));
	};
	return this1;
};
tink_streams_Handler.ofSafe = function(f) {
	return f;
};
tink_streams_Handler.ofUnknown = function(f) {
	return f;
};
var tink_streams_Reducer = {};
tink_streams_Reducer._new = function(f) {
	return f;
};
tink_streams_Reducer.apply = function(this1,res,item) {
	return this1(res,item);
};
tink_streams_Reducer.ofSafeSync = function(f) {
	var this1 = function(res,cur) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(res,cur)));
	};
	return this1;
};
tink_streams_Reducer.ofUnknownSync = function(f) {
	var this1 = function(res,cur) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(f(res,cur)));
	};
	return this1;
};
tink_streams_Reducer.ofSafe = function(f) {
	return f;
};
tink_streams_Reducer.ofPlainSync = function(f) {
	var this1 = function(res,cur) {
		return new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_streams_ReductionStep.Progress(f(res,cur))));
	};
	return this1;
};
tink_streams_Reducer.ofUnknown = function(f) {
	return f;
};
tink_streams_Reducer.ofPromiseBased = function(f) {
	var this1 = function(res,cur) {
		return tink_core_Future.map(f(res,cur),function(s) {
			switch(s._hx_index) {
			case 0:
				return tink_streams_ReductionStep.Progress(s.data);
			case 1:
				return tink_streams_ReductionStep.Crash(s.failure);
			}
		});
	};
	return this1;
};
var tink_streams_FutureStream = function(f) {
	tink_streams_StreamBase.call(this);
	this.f = f;
};
tink_streams_FutureStream.__name__ = true;
tink_streams_FutureStream.__super__ = tink_streams_StreamBase;
tink_streams_FutureStream.prototype = $extend(tink_streams_StreamBase.prototype,{
	next: function() {
		return tink_core_Future.flatMap(this.f,function(s) {
			return s.next();
		});
	}
	,forEach: function(handler) {
		var _gthis = this;
		return tink_core_Future.async(function(cb) {
			_gthis.f.handle(function(s) {
				s.forEach(handler).handle(cb);
			});
		});
	}
	,__class__: tink_streams_FutureStream
});
var tink_streams_BlendStream = function(a,b) {
	var first = null;
	var wait = function(s) {
		return tink_core_Future.map(s.next(),function(o) {
			if(first == null) {
				first = s;
			}
			return o;
		});
	};
	var n1 = wait(a);
	var n2 = wait(b);
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		tink_core_Future.first(n1,n2).handle(function(o) {
			switch(o._hx_index) {
			case 0:
				cb(tink_streams_Step.Link(o.value,new tink_streams_BlendStream(o.next,first == a ? b : a)));
				break;
			case 1:
				cb(tink_streams_Step.Fail(o.e));
				break;
			case 2:
				(first == a ? n2 : n1).handle(cb);
				break;
			}
		});
	}));
};
tink_streams_BlendStream.__name__ = true;
tink_streams_BlendStream.__super__ = tink_streams_Generator;
tink_streams_BlendStream.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_streams_BlendStream
});
var tink_streams_Step = $hxEnums["tink.streams.Step"] = { __ename__:true,__constructs__:null
	,Link: ($_=function(value,next) { return {_hx_index:0,value:value,next:next,__enum__:"tink.streams.Step",toString:$estr}; },$_._hx_name="Link",$_.__params__ = ["value","next"],$_)
	,Fail: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.Step",toString:$estr}; },$_._hx_name="Fail",$_.__params__ = ["e"],$_)
	,End: {_hx_name:"End",_hx_index:2,__enum__:"tink.streams.Step",toString:$estr}
};
tink_streams_Step.__constructs__ = [tink_streams_Step.Link,tink_streams_Step.Fail,tink_streams_Step.End];
var tink_streams_SignalStream = function(signal) {
	var this1 = tink_core_Future.map(tink_core_Signal.nextTime(signal),function(o) {
		switch(o._hx_index) {
		case 0:
			return tink_streams_Step.Link(o.data,new tink_streams_SignalStream(signal));
		case 1:
			return tink_streams_Step.Fail(o.e);
		case 2:
			return tink_streams_Step.End;
		}
	});
	this1.eager();
	tink_streams_Generator.call(this,this1);
};
tink_streams_SignalStream.__name__ = true;
tink_streams_SignalStream.__super__ = tink_streams_Generator;
tink_streams_SignalStream.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_streams_SignalStream
});
var tink_streams_Yield = $hxEnums["tink.streams.Yield"] = { __ename__:true,__constructs__:null
	,Data: ($_=function(data) { return {_hx_index:0,data:data,__enum__:"tink.streams.Yield",toString:$estr}; },$_._hx_name="Data",$_.__params__ = ["data"],$_)
	,Fail: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"tink.streams.Yield",toString:$estr}; },$_._hx_name="Fail",$_.__params__ = ["e"],$_)
	,End: {_hx_name:"End",_hx_index:2,__enum__:"tink.streams.Yield",toString:$estr}
};
tink_streams_Yield.__constructs__ = [tink_streams_Yield.Data,tink_streams_Yield.Fail,tink_streams_Yield.End];
var tink_streams_nodejs_NodejsStream = function(target) {
	tink_streams_Generator.call(this,tink_core_Future.async(function(cb) {
		target.read().handle(function(o) {
			var cb1 = cb;
			var tmp;
			switch(o._hx_index) {
			case 0:
				var _g = o.data;
				tmp = _g == null ? tink_streams_Step.End : tink_streams_Step.Link(_g,new tink_streams_nodejs_NodejsStream(target));
				break;
			case 1:
				tmp = tink_streams_Step.Fail(o.failure);
				break;
			}
			cb1(tmp);
		});
	}));
};
tink_streams_nodejs_NodejsStream.__name__ = true;
tink_streams_nodejs_NodejsStream.wrap = function(name,native,onEnd) {
	return new tink_streams_nodejs_NodejsStream(new tink_streams_nodejs_WrappedReadable(name,native,onEnd));
};
tink_streams_nodejs_NodejsStream.__super__ = tink_streams_Generator;
tink_streams_nodejs_NodejsStream.prototype = $extend(tink_streams_Generator.prototype,{
	__class__: tink_streams_nodejs_NodejsStream
});
var tink_streams_nodejs_WrappedReadable = function(name,native,onEnd) {
	this.name = name;
	this.native = native;
	var this1 = tink_core_Future.async(function(cb) {
		native.once("end",function() {
			cb(tink_core_Outcome.Success(null));
		});
		native.once("close",function() {
			cb(tink_core_Outcome.Success(null));
		});
		native.once("error",function(e) {
			cb(tink_core_Outcome.Failure(new tink_core_TypedError(null,"" + e.code + " - Failed reading from " + name + " because " + e.message,{ fileName : "tink/streams/nodejs/WrappedReadable.hx", lineNumber : 21, className : "tink.streams.nodejs.WrappedReadable", methodName : "new"})));
		});
	});
	this1.eager();
	this.end = this1;
	if(onEnd != null) {
		this.end.handle(function() {
			process.nextTick(onEnd);
		});
	}
};
tink_streams_nodejs_WrappedReadable.__name__ = true;
tink_streams_nodejs_WrappedReadable.prototype = {
	read: function() {
		var _gthis = this;
		return tink_core_Future.first(tink_core_Future.async(function(cb) {
			var attempt = null;
			attempt = function() {
				try {
					var _g = _gthis.native.read();
					if(_g == null) {
						_gthis.native.once("readable",attempt);
					} else {
						var object = _g;
						cb(tink_core_Outcome.Success(object));
					}
				} catch( _g ) {
					var _g1 = haxe_Exception.caught(_g).unwrap();
					cb(tink_core_Outcome.Failure(tink_core_TypedError.withData(null,"Error while reading from " + _gthis.name,_g1,{ fileName : "tink/streams/nodejs/WrappedReadable.hx", lineNumber : 41, className : "tink.streams.nodejs.WrappedReadable", methodName : "read"})));
				}
			};
			attempt();
		}),this.end);
	}
	,__class__: tink_streams_nodejs_WrappedReadable
};
var tink_url_Auth = {};
tink_url_Auth._new = function(user,password) {
	var this1 = "" + user + ":" + password;
	return this1;
};
tink_url_Auth.get_user = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		return this1.split(":")[0];
	}
};
tink_url_Auth.get_password = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		return this1.split(":")[1];
	}
};
tink_url_Auth.toString = function(this1) {
	if(this1 == null) {
		return "";
	} else {
		return "" + this1 + "@";
	}
};
var tink_url_Host = {};
tink_url_Host._new = function(name,port) {
	var this1;
	if(port == null) {
		this1 = name;
	} else if(port > 65535 || port <= 0) {
		throw haxe_Exception.thrown("Invalid port");
	} else {
		this1 = "" + name + ":" + port;
	}
	return this1;
};
tink_url_Host.get_name = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		var _g = this1.split("]");
		switch(_g.length) {
		case 1:
			return _g[0].split(":")[0];
		case 2:
			return _g[0] + "]";
		default:
			throw haxe_Exception.thrown("assert");
		}
	}
};
tink_url_Host.get_port = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		var _g = this1.split("]");
		switch(_g.length) {
		case 1:
			var _g1 = _g[0].split(":")[1];
			if(_g1 == null) {
				return null;
			} else {
				return Std.parseInt(_g1);
			}
			break;
		case 2:
			var _g1 = _g[1].split(":")[1];
			if(_g1 == null) {
				return null;
			} else {
				return Std.parseInt(_g1);
			}
			break;
		default:
			throw haxe_Exception.thrown("assert");
		}
	}
};
tink_url_Host.toString = function(this1) {
	return this1;
};
var tink_url_Path = {};
tink_url_Path.parts = function(this1) {
	var _g = [];
	var _g1 = 0;
	var _g2 = this1.split("/");
	while(_g1 < _g2.length) {
		var p = _g2[_g1];
		++_g1;
		if(p != "") {
			_g.push(p);
		}
	}
	return _g;
};
tink_url_Path.get_absolute = function(this1) {
	return this1.charAt(0) == "/";
};
tink_url_Path.get_isDir = function(this1) {
	return this1.charAt(this1.length - 1) == "/";
};
tink_url_Path._new = function(s) {
	return s;
};
tink_url_Path.join = function(this1,that) {
	if(that == "") {
		return this1;
	} else if(that.charAt(0) == "/") {
		return that;
	} else if(this1.charAt(this1.length - 1) == "/") {
		return tink_url_Path.ofString(this1 + that);
	} else {
		var _g = this1.lastIndexOf("/");
		if(_g == -1) {
			return that;
		} else {
			return tink_url_Path.ofString(HxOverrides.substr(this1,0,_g + 1) + (that == null ? "null" : that));
		}
	}
};
tink_url_Path.ofString = function(s) {
	return tink_url_Path.normalize(s);
};
tink_url_Path.normalize = function(s) {
	s = StringTools.trim(StringTools.replace(s,"\\","/"));
	if(s == ".") {
		return "./";
	}
	var isDir = StringTools.endsWith(s,"/..") || StringTools.endsWith(s,"/") || StringTools.endsWith(s,"/.");
	var parts = [];
	var isAbsolute = StringTools.startsWith(s,"/");
	var up = 0;
	var _g = 0;
	var _g1 = s.split("/");
	while(_g < _g1.length) {
		var part = _g1[_g];
		++_g;
		var _g2 = StringTools.trim(part);
		switch(_g2) {
		case "":
			break;
		case ".":
			break;
		case "..":
			if(parts.pop() == null) {
				++up;
			}
			break;
		default:
			parts.push(_g2);
		}
	}
	if(isAbsolute) {
		parts.unshift("");
	} else {
		var _g = 0;
		var _g1 = up;
		while(_g < _g1) {
			++_g;
			parts.unshift("..");
		}
	}
	if(isDir) {
		parts.push("");
	}
	return parts.join("/");
};
tink_url_Path.toString = function(this1) {
	return this1;
};
var tink_url_Portion = {};
tink_url_Portion.get_raw = function(this1) {
	return this1;
};
tink_url_Portion.isValid = function(this1) {
	if(this1 != null) {
		try {
			decodeURIComponent(this1.split("+").join(" "));
			return true;
		} catch( _g ) {
			return false;
		}
	} else {
		return true;
	}
};
tink_url_Portion._new = function(v) {
	return v;
};
tink_url_Portion.stringly = function(this1) {
	return tink_url_Portion.toString(this1);
};
tink_url_Portion.toString = function(this1) {
	if(this1 == null) {
		return null;
	} else {
		try {
			return decodeURIComponent(this1.split("+").join(" "));
		} catch( _g ) {
			return "";
		}
	}
};
tink_url_Portion.ofString = function(s) {
	var this1 = s == null ? "" : encodeURIComponent(s);
	return this1;
};
var tink_url_PortionArray = {};
tink_url_PortionArray.toStringArray = function(this1) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < this1.length) {
		var p = this1[_g1];
		++_g1;
		_g.push(tink_url_Portion.toString(p));
	}
	return _g;
};
var tink_url_Query = {};
tink_url_Query.parse = function(this1) {
	return new tink_url__$Query_QueryStringParser(this1,"&","=",0);
};
tink_url_Query.with = function(this1,values) {
	var this2 = [];
	var ret = this2;
	var _g = [];
	var key = new haxe_ds__$StringMap_StringMapKeyIterator(values.h);
	while(key.hasNext()) {
		var key1 = key.next();
		_g.push(key1);
	}
	var p = new tink_url__$Query_QueryStringParser(this1,"&","=",0);
	while(p.hasNext()) {
		var p1 = p.next();
		var key = tink_url_Portion.ofString(p1.name);
		if(Object.prototype.hasOwnProperty.call(values.h,key)) {
			var name = tink_url_Portion.ofString(p1.name);
			var key1 = tink_url_Portion.ofString(p1.name);
			ret.push(name + "=" + values.h[key1]);
			HxOverrides.remove(_g,tink_url_Portion.ofString(p1.name));
		} else {
			ret.push(tink_url_Portion.ofString(p1.name) + "=" + p1.value);
		}
	}
	var _g1 = 0;
	while(_g1 < _g.length) {
		var name = _g[_g1];
		++_g1;
		ret.push(name + "=" + values.h[name]);
	}
	return ret.join("&");
};
tink_url_Query.iterator = function(this1) {
	return new tink_url__$Query_QueryStringParser(this1,"&","=",0);
};
tink_url_Query.toMap = function(this1) {
	var _g = new haxe_ds_StringMap();
	var p = new tink_url__$Query_QueryStringParser(this1,"&","=",0);
	while(p.hasNext()) {
		var p1 = p.next();
		_g.h[p1.name.toString()] = p1.value;
	}
	return _g;
};
tink_url_Query.ofObj = function(v) {
	var this1 = [];
	var ret = this1;
	var v1 = v;
	var _g = 0;
	var _g1 = Reflect.fields(v1);
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		ret.push(tink_url_Portion.ofString(k) + "=" + tink_url_Portion.ofString(v1[k]));
	}
	return ret.join("&");
};
tink_url_Query.toString = function(this1) {
	return this1;
};
tink_url_Query.build = function() {
	var this1 = [];
	return this1;
};
tink_url_Query.parseString = function(s,sep,set,pos) {
	if(pos == null) {
		pos = 0;
	}
	if(set == null) {
		set = "=";
	}
	if(sep == null) {
		sep = "&";
	}
	return new tink_url__$Query_QueryStringParser(s,sep,set,pos);
};
var tink_url_QueryStringBuilder = {};
tink_url_QueryStringBuilder._new = function() {
	var this1 = [];
	return this1;
};
tink_url_QueryStringBuilder.add = function(this1,name,value) {
	this1.push(name + "=" + value);
	return this1;
};
tink_url_QueryStringBuilder.toString = function(this1,sep) {
	if(sep == null) {
		sep = "&";
	}
	return this1.join(sep);
};
tink_url_QueryStringBuilder.copy = function(this1) {
	return this1.slice();
};
var tink_url__$Query_QueryStringParser = function(s,sep,set,pos) {
	this.s = s == null ? "" : s;
	this.sep = sep;
	this.set = set;
	this.pos = pos;
};
tink_url__$Query_QueryStringParser.__name__ = true;
tink_url__$Query_QueryStringParser.trimmedSub = function(s,start,end) {
	if(start >= s.length) {
		return "";
	}
	while(s.charCodeAt(start) < 33) ++start;
	if(end < s.length - 1) {
		while(s.charCodeAt(end - 1) < 33) --end;
	}
	return s.substring(start,end);
};
tink_url__$Query_QueryStringParser.prototype = {
	hasNext: function() {
		return this.pos < this.s.length;
	}
	,next: function() {
		var next = this.s.indexOf(this.sep,this.pos);
		if(next == -1) {
			next = this.s.length;
		}
		var split = this.s.indexOf(this.set,this.pos);
		var start = this.pos;
		this.pos = next + this.sep.length;
		if(split == -1 || split > next) {
			return new tink_core_NamedWith(tink_url_Portion.toString(tink_url__$Query_QueryStringParser.trimmedSub(this.s,start,next)),tink_url_Portion.ofString(""));
		} else {
			return new tink_core_NamedWith(tink_url_Portion.toString(tink_url__$Query_QueryStringParser.trimmedSub(this.s,start,split)),tink_url__$Query_QueryStringParser.trimmedSub(this.s,split + this.set.length,next));
		}
	}
	,__class__: tink_url__$Query_QueryStringParser
};
var tink_web_routing_Response = {};
tink_web_routing_Response.ofChunk = function(c,contentType) {
	if(contentType == null) {
		contentType = "application/octet-stream";
	}
	return tink_web_routing_Response.binary(null,contentType,c.toBytes());
};
tink_web_routing_Response.ofString = function(s) {
	return tink_web_routing_Response.textual(null,"text/plain",s);
};
tink_web_routing_Response.ofBytes = function(b) {
	return tink_web_routing_Response.binary(null,"application/octet-stream",b);
};
tink_web_routing_Response.fromChunk = function(c) {
	return tink_web_routing_Response.ofChunk(c);
};
tink_web_routing_Response.ofRealSource = function(source,contentType) {
	if(contentType == null) {
		contentType = "application/octet-stream";
	}
	var this1 = httpstatus_HttpStatusMessage.fromCode(200);
	var this2 = new tink_http_ResponseHeaderBase(200,this1,[new tink_http_HeaderField("content-type",contentType)],"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this2,tink_io_RealSourceTools.idealize(source,function(_) {
		return tink_io_Source.EMPTY;
	}));
	return this1;
};
tink_web_routing_Response.ofIdealSource = function(source,contentType) {
	if(contentType == null) {
		contentType = "application/octet-stream";
	}
	var this1 = httpstatus_HttpStatusMessage.fromCode(200);
	var this2 = new tink_http_ResponseHeaderBase(200,this1,[new tink_http_HeaderField("content-type",contentType)],"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this2,source);
	return this1;
};
tink_web_routing_Response.fromRealSource = function(source) {
	return tink_web_routing_Response.ofRealSource(tink_io_RealSourceTools.idealize(source,function(_) {
		return tink_io_Source.EMPTY;
	}));
};
tink_web_routing_Response.fromIdealSource = function(source) {
	return tink_web_routing_Response.ofIdealSource(source);
};
tink_web_routing_Response.ofUrl = function(u) {
	var this1 = httpstatus_HttpStatusMessage.fromCode(302);
	var this2 = new tink_http_ResponseHeaderBase(302,this1,[new tink_http_HeaderField("location".toLowerCase(),tink_Url.toString(u))],"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this2,new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_Chunk.EMPTY)));
	return this1;
};
tink_web_routing_Response.binary = function(code,contentType,bytes,headers) {
	if(code == null) {
		code = 200;
	}
	return tink_http_OutgoingResponse.blob(code,tink_chunk_ByteChunk.of(bytes),contentType,headers);
};
tink_web_routing_Response.empty = function(code) {
	if(code == null) {
		code = 200;
	}
	var this1 = httpstatus_HttpStatusMessage.fromCode(code);
	var this2 = new tink_http_ResponseHeaderBase(code,this1,[new tink_http_HeaderField("content-length","0")],"HTTP/1.1");
	var this1 = new tink_http__$Response_OutgoingResponseData(this2,new tink_streams_Single(new tink_core__$Lazy_LazyConst(tink_Chunk.EMPTY)));
	return this1;
};
tink_web_routing_Response.textual = function(code,contentType,string,headers) {
	if(code == null) {
		code = 200;
	}
	return tink_web_routing_Response.binary(code,contentType,haxe_io_Bytes.ofString(string),headers);
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js_lib__$ArrayBuffer_ArrayBufferCompat.sliceImpl;
}
DateTools.DAY_SHORT_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
DateTools.DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
DateTools.MONTH_SHORT_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
DateTools.MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
Diactrics.map = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h[" "] = " ";
	_g.h["A"] = "A";
	_g.h["Ⓐ"] = "A";
	_g.h["Ａ"] = "A";
	_g.h["À"] = "A";
	_g.h["Á"] = "A";
	_g.h["Â"] = "A";
	_g.h["Ầ"] = "A";
	_g.h["Ấ"] = "A";
	_g.h["Ẫ"] = "A";
	_g.h["Ẩ"] = "A";
	_g.h["Ã"] = "A";
	_g.h["Ā"] = "A";
	_g.h["Ă"] = "A";
	_g.h["Ằ"] = "A";
	_g.h["Ắ"] = "A";
	_g.h["Ẵ"] = "A";
	_g.h["Ẳ"] = "A";
	_g.h["Ȧ"] = "A";
	_g.h["Ǡ"] = "A";
	_g.h["Ä"] = "A";
	_g.h["Ǟ"] = "A";
	_g.h["Ả"] = "A";
	_g.h["Å"] = "A";
	_g.h["Ǻ"] = "A";
	_g.h["Ǎ"] = "A";
	_g.h["Ȁ"] = "A";
	_g.h["Ȃ"] = "A";
	_g.h["Ạ"] = "A";
	_g.h["Ậ"] = "A";
	_g.h["Ặ"] = "A";
	_g.h["Ḁ"] = "A";
	_g.h["Ą"] = "A";
	_g.h["Ⱥ"] = "A";
	_g.h["Ɐ"] = "A";
	_g.h["Ꜳ"] = "AA";
	_g.h["Æ"] = "AE";
	_g.h["Ǽ"] = "AE";
	_g.h["Ǣ"] = "AE";
	_g.h["Ꜵ"] = "AO";
	_g.h["Ꜷ"] = "AU";
	_g.h["Ꜹ"] = "AV";
	_g.h["Ꜻ"] = "AV";
	_g.h["Ꜽ"] = "AY";
	_g.h["B"] = "B";
	_g.h["Ⓑ"] = "B";
	_g.h["Ｂ"] = "B";
	_g.h["Ḃ"] = "B";
	_g.h["Ḅ"] = "B";
	_g.h["Ḇ"] = "B";
	_g.h["Ƀ"] = "B";
	_g.h["Ƃ"] = "B";
	_g.h["Ɓ"] = "B";
	_g.h["C"] = "C";
	_g.h["Ⓒ"] = "C";
	_g.h["Ｃ"] = "C";
	_g.h["Ć"] = "C";
	_g.h["Ĉ"] = "C";
	_g.h["Ċ"] = "C";
	_g.h["Č"] = "C";
	_g.h["Ç"] = "C";
	_g.h["Ḉ"] = "C";
	_g.h["Ƈ"] = "C";
	_g.h["Ȼ"] = "C";
	_g.h["Ꜿ"] = "C";
	_g.h["D"] = "D";
	_g.h["Ⓓ"] = "D";
	_g.h["Ｄ"] = "D";
	_g.h["Ḋ"] = "D";
	_g.h["Ď"] = "D";
	_g.h["Ḍ"] = "D";
	_g.h["Ḑ"] = "D";
	_g.h["Ḓ"] = "D";
	_g.h["Ḏ"] = "D";
	_g.h["Đ"] = "D";
	_g.h["Ƌ"] = "D";
	_g.h["Ɗ"] = "D";
	_g.h["Ɖ"] = "D";
	_g.h["Ꝺ"] = "D";
	_g.h["Ǳ"] = "DZ";
	_g.h["Ǆ"] = "DZ";
	_g.h["ǲ"] = "Dz";
	_g.h["ǅ"] = "Dz";
	_g.h["E"] = "E";
	_g.h["Ⓔ"] = "E";
	_g.h["Ｅ"] = "E";
	_g.h["È"] = "E";
	_g.h["É"] = "E";
	_g.h["Ê"] = "E";
	_g.h["Ề"] = "E";
	_g.h["Ế"] = "E";
	_g.h["Ễ"] = "E";
	_g.h["Ể"] = "E";
	_g.h["Ẽ"] = "E";
	_g.h["Ē"] = "E";
	_g.h["Ḕ"] = "E";
	_g.h["Ḗ"] = "E";
	_g.h["Ĕ"] = "E";
	_g.h["Ė"] = "E";
	_g.h["Ë"] = "E";
	_g.h["Ẻ"] = "E";
	_g.h["Ě"] = "E";
	_g.h["Ȅ"] = "E";
	_g.h["Ȇ"] = "E";
	_g.h["Ẹ"] = "E";
	_g.h["Ệ"] = "E";
	_g.h["Ȩ"] = "E";
	_g.h["Ḝ"] = "E";
	_g.h["Ę"] = "E";
	_g.h["Ḙ"] = "E";
	_g.h["Ḛ"] = "E";
	_g.h["Ɛ"] = "E";
	_g.h["Ǝ"] = "E";
	_g.h["F"] = "F";
	_g.h["Ⓕ"] = "F";
	_g.h["Ｆ"] = "F";
	_g.h["Ḟ"] = "F";
	_g.h["Ƒ"] = "F";
	_g.h["Ꝼ"] = "F";
	_g.h["G"] = "G";
	_g.h["Ⓖ"] = "G";
	_g.h["Ｇ"] = "G";
	_g.h["Ǵ"] = "G";
	_g.h["Ĝ"] = "G";
	_g.h["Ḡ"] = "G";
	_g.h["Ğ"] = "G";
	_g.h["Ġ"] = "G";
	_g.h["Ǧ"] = "G";
	_g.h["Ģ"] = "G";
	_g.h["Ǥ"] = "G";
	_g.h["Ɠ"] = "G";
	_g.h["Ꞡ"] = "G";
	_g.h["Ᵹ"] = "G";
	_g.h["Ꝿ"] = "G";
	_g.h["H"] = "H";
	_g.h["Ⓗ"] = "H";
	_g.h["Ｈ"] = "H";
	_g.h["Ĥ"] = "H";
	_g.h["Ḣ"] = "H";
	_g.h["Ḧ"] = "H";
	_g.h["Ȟ"] = "H";
	_g.h["Ḥ"] = "H";
	_g.h["Ḩ"] = "H";
	_g.h["Ḫ"] = "H";
	_g.h["Ħ"] = "H";
	_g.h["Ⱨ"] = "H";
	_g.h["Ⱶ"] = "H";
	_g.h["Ɥ"] = "H";
	_g.h["I"] = "I";
	_g.h["Ⓘ"] = "I";
	_g.h["Ｉ"] = "I";
	_g.h["Ì"] = "I";
	_g.h["Í"] = "I";
	_g.h["Î"] = "I";
	_g.h["Ĩ"] = "I";
	_g.h["Ī"] = "I";
	_g.h["Ĭ"] = "I";
	_g.h["İ"] = "I";
	_g.h["Ï"] = "I";
	_g.h["Ḯ"] = "I";
	_g.h["Ỉ"] = "I";
	_g.h["Ǐ"] = "I";
	_g.h["Ȉ"] = "I";
	_g.h["Ȋ"] = "I";
	_g.h["Ị"] = "I";
	_g.h["Į"] = "I";
	_g.h["Ḭ"] = "I";
	_g.h["Ɨ"] = "I";
	_g.h["J"] = "J";
	_g.h["Ⓙ"] = "J";
	_g.h["Ｊ"] = "J";
	_g.h["Ĵ"] = "J";
	_g.h["Ɉ"] = "J";
	_g.h["K"] = "K";
	_g.h["Ⓚ"] = "K";
	_g.h["Ｋ"] = "K";
	_g.h["Ḱ"] = "K";
	_g.h["Ǩ"] = "K";
	_g.h["Ḳ"] = "K";
	_g.h["Ķ"] = "K";
	_g.h["Ḵ"] = "K";
	_g.h["Ƙ"] = "K";
	_g.h["Ⱪ"] = "K";
	_g.h["Ꝁ"] = "K";
	_g.h["Ꝃ"] = "K";
	_g.h["Ꝅ"] = "K";
	_g.h["Ꞣ"] = "K";
	_g.h["L"] = "L";
	_g.h["Ⓛ"] = "L";
	_g.h["Ｌ"] = "L";
	_g.h["Ŀ"] = "L";
	_g.h["Ĺ"] = "L";
	_g.h["Ľ"] = "L";
	_g.h["Ḷ"] = "L";
	_g.h["Ḹ"] = "L";
	_g.h["Ļ"] = "L";
	_g.h["Ḽ"] = "L";
	_g.h["Ḻ"] = "L";
	_g.h["Ł"] = "L";
	_g.h["Ƚ"] = "L";
	_g.h["Ɫ"] = "L";
	_g.h["Ⱡ"] = "L";
	_g.h["Ꝉ"] = "L";
	_g.h["Ꝇ"] = "L";
	_g.h["Ꞁ"] = "L";
	_g.h["Ǉ"] = "LJ";
	_g.h["ǈ"] = "Lj";
	_g.h["M"] = "M";
	_g.h["Ⓜ"] = "M";
	_g.h["Ｍ"] = "M";
	_g.h["Ḿ"] = "M";
	_g.h["Ṁ"] = "M";
	_g.h["Ṃ"] = "M";
	_g.h["Ɱ"] = "M";
	_g.h["Ɯ"] = "M";
	_g.h["N"] = "N";
	_g.h["Ⓝ"] = "N";
	_g.h["Ｎ"] = "N";
	_g.h["Ǹ"] = "N";
	_g.h["Ń"] = "N";
	_g.h["Ñ"] = "N";
	_g.h["Ṅ"] = "N";
	_g.h["Ň"] = "N";
	_g.h["Ṇ"] = "N";
	_g.h["Ņ"] = "N";
	_g.h["Ṋ"] = "N";
	_g.h["Ṉ"] = "N";
	_g.h["Ƞ"] = "N";
	_g.h["Ɲ"] = "N";
	_g.h["Ꞑ"] = "N";
	_g.h["Ꞥ"] = "N";
	_g.h["Ǌ"] = "NJ";
	_g.h["ǋ"] = "Nj";
	_g.h["O"] = "O";
	_g.h["Ⓞ"] = "O";
	_g.h["Ｏ"] = "O";
	_g.h["Ò"] = "O";
	_g.h["Ó"] = "O";
	_g.h["Ô"] = "O";
	_g.h["Ồ"] = "O";
	_g.h["Ố"] = "O";
	_g.h["Ỗ"] = "O";
	_g.h["Ổ"] = "O";
	_g.h["Õ"] = "O";
	_g.h["Ṍ"] = "O";
	_g.h["Ȭ"] = "O";
	_g.h["Ṏ"] = "O";
	_g.h["Ō"] = "O";
	_g.h["Ṑ"] = "O";
	_g.h["Ṓ"] = "O";
	_g.h["Ŏ"] = "O";
	_g.h["Ȯ"] = "O";
	_g.h["Ȱ"] = "O";
	_g.h["Ö"] = "O";
	_g.h["Ȫ"] = "O";
	_g.h["Ỏ"] = "O";
	_g.h["Ő"] = "O";
	_g.h["Ǒ"] = "O";
	_g.h["Ȍ"] = "O";
	_g.h["Ȏ"] = "O";
	_g.h["Ơ"] = "O";
	_g.h["Ờ"] = "O";
	_g.h["Ớ"] = "O";
	_g.h["Ỡ"] = "O";
	_g.h["Ở"] = "O";
	_g.h["Ợ"] = "O";
	_g.h["Ọ"] = "O";
	_g.h["Ộ"] = "O";
	_g.h["Ǫ"] = "O";
	_g.h["Ǭ"] = "O";
	_g.h["Ø"] = "O";
	_g.h["Ǿ"] = "O";
	_g.h["Ɔ"] = "O";
	_g.h["Ɵ"] = "O";
	_g.h["Ꝋ"] = "O";
	_g.h["Ꝍ"] = "O";
	_g.h["Ƣ"] = "OI";
	_g.h["Ꝏ"] = "OO";
	_g.h["Ȣ"] = "OU";
	_g.h["P"] = "P";
	_g.h["Ⓟ"] = "P";
	_g.h["Ｐ"] = "P";
	_g.h["Ṕ"] = "P";
	_g.h["Ṗ"] = "P";
	_g.h["Ƥ"] = "P";
	_g.h["Ᵽ"] = "P";
	_g.h["Ꝑ"] = "P";
	_g.h["Ꝓ"] = "P";
	_g.h["Ꝕ"] = "P";
	_g.h["Q"] = "Q";
	_g.h["Ⓠ"] = "Q";
	_g.h["Ｑ"] = "Q";
	_g.h["Ꝗ"] = "Q";
	_g.h["Ꝙ"] = "Q";
	_g.h["Ɋ"] = "Q";
	_g.h["R"] = "R";
	_g.h["Ⓡ"] = "R";
	_g.h["Ｒ"] = "R";
	_g.h["Ŕ"] = "R";
	_g.h["Ṙ"] = "R";
	_g.h["Ř"] = "R";
	_g.h["Ȑ"] = "R";
	_g.h["Ȓ"] = "R";
	_g.h["Ṛ"] = "R";
	_g.h["Ṝ"] = "R";
	_g.h["Ŗ"] = "R";
	_g.h["Ṟ"] = "R";
	_g.h["Ɍ"] = "R";
	_g.h["Ɽ"] = "R";
	_g.h["Ꝛ"] = "R";
	_g.h["Ꞧ"] = "R";
	_g.h["Ꞃ"] = "R";
	_g.h["S"] = "S";
	_g.h["Ⓢ"] = "S";
	_g.h["Ｓ"] = "S";
	_g.h["ẞ"] = "S";
	_g.h["Ś"] = "S";
	_g.h["Ṥ"] = "S";
	_g.h["Ŝ"] = "S";
	_g.h["Ṡ"] = "S";
	_g.h["Š"] = "S";
	_g.h["Ṧ"] = "S";
	_g.h["Ṣ"] = "S";
	_g.h["Ṩ"] = "S";
	_g.h["Ș"] = "S";
	_g.h["Ş"] = "S";
	_g.h["Ȿ"] = "S";
	_g.h["Ꞩ"] = "S";
	_g.h["Ꞅ"] = "S";
	_g.h["T"] = "T";
	_g.h["Ⓣ"] = "T";
	_g.h["Ｔ"] = "T";
	_g.h["Ṫ"] = "T";
	_g.h["Ť"] = "T";
	_g.h["Ṭ"] = "T";
	_g.h["Ț"] = "T";
	_g.h["Ţ"] = "T";
	_g.h["Ṱ"] = "T";
	_g.h["Ṯ"] = "T";
	_g.h["Ŧ"] = "T";
	_g.h["Ƭ"] = "T";
	_g.h["Ʈ"] = "T";
	_g.h["Ⱦ"] = "T";
	_g.h["Ꞇ"] = "T";
	_g.h["Þ"] = "Th";
	_g.h["Ꜩ"] = "TZ";
	_g.h["U"] = "U";
	_g.h["Ⓤ"] = "U";
	_g.h["Ｕ"] = "U";
	_g.h["Ù"] = "U";
	_g.h["Ú"] = "U";
	_g.h["Û"] = "U";
	_g.h["Ũ"] = "U";
	_g.h["Ṹ"] = "U";
	_g.h["Ū"] = "U";
	_g.h["Ṻ"] = "U";
	_g.h["Ŭ"] = "U";
	_g.h["Ü"] = "U";
	_g.h["Ǜ"] = "U";
	_g.h["Ǘ"] = "U";
	_g.h["Ǖ"] = "U";
	_g.h["Ǚ"] = "U";
	_g.h["Ủ"] = "U";
	_g.h["Ů"] = "U";
	_g.h["Ű"] = "U";
	_g.h["Ǔ"] = "U";
	_g.h["Ȕ"] = "U";
	_g.h["Ȗ"] = "U";
	_g.h["Ư"] = "U";
	_g.h["Ừ"] = "U";
	_g.h["Ứ"] = "U";
	_g.h["Ữ"] = "U";
	_g.h["Ử"] = "U";
	_g.h["Ự"] = "U";
	_g.h["Ụ"] = "U";
	_g.h["Ṳ"] = "U";
	_g.h["Ų"] = "U";
	_g.h["Ṷ"] = "U";
	_g.h["Ṵ"] = "U";
	_g.h["Ʉ"] = "U";
	_g.h["V"] = "V";
	_g.h["Ⓥ"] = "V";
	_g.h["Ｖ"] = "V";
	_g.h["Ṽ"] = "V";
	_g.h["Ṿ"] = "V";
	_g.h["Ʋ"] = "V";
	_g.h["Ꝟ"] = "V";
	_g.h["Ʌ"] = "V";
	_g.h["Ꝡ"] = "VY";
	_g.h["W"] = "W";
	_g.h["Ⓦ"] = "W";
	_g.h["Ｗ"] = "W";
	_g.h["Ẁ"] = "W";
	_g.h["Ẃ"] = "W";
	_g.h["Ŵ"] = "W";
	_g.h["Ẇ"] = "W";
	_g.h["Ẅ"] = "W";
	_g.h["Ẉ"] = "W";
	_g.h["Ⱳ"] = "W";
	_g.h["X"] = "X";
	_g.h["Ⓧ"] = "X";
	_g.h["Ｘ"] = "X";
	_g.h["Ẋ"] = "X";
	_g.h["Ẍ"] = "X";
	_g.h["Y"] = "Y";
	_g.h["Ⓨ"] = "Y";
	_g.h["Ｙ"] = "Y";
	_g.h["Ỳ"] = "Y";
	_g.h["Ý"] = "Y";
	_g.h["Ŷ"] = "Y";
	_g.h["Ỹ"] = "Y";
	_g.h["Ȳ"] = "Y";
	_g.h["Ẏ"] = "Y";
	_g.h["Ÿ"] = "Y";
	_g.h["Ỷ"] = "Y";
	_g.h["Ỵ"] = "Y";
	_g.h["Ƴ"] = "Y";
	_g.h["Ɏ"] = "Y";
	_g.h["Ỿ"] = "Y";
	_g.h["Z"] = "Z";
	_g.h["Ⓩ"] = "Z";
	_g.h["Ｚ"] = "Z";
	_g.h["Ź"] = "Z";
	_g.h["Ẑ"] = "Z";
	_g.h["Ż"] = "Z";
	_g.h["Ž"] = "Z";
	_g.h["Ẓ"] = "Z";
	_g.h["Ẕ"] = "Z";
	_g.h["Ƶ"] = "Z";
	_g.h["Ȥ"] = "Z";
	_g.h["Ɀ"] = "Z";
	_g.h["Ⱬ"] = "Z";
	_g.h["Ꝣ"] = "Z";
	_g.h["a"] = "a";
	_g.h["ⓐ"] = "a";
	_g.h["ａ"] = "a";
	_g.h["ẚ"] = "a";
	_g.h["à"] = "a";
	_g.h["á"] = "a";
	_g.h["â"] = "a";
	_g.h["ầ"] = "a";
	_g.h["ấ"] = "a";
	_g.h["ẫ"] = "a";
	_g.h["ẩ"] = "a";
	_g.h["ã"] = "a";
	_g.h["ā"] = "a";
	_g.h["ă"] = "a";
	_g.h["ằ"] = "a";
	_g.h["ắ"] = "a";
	_g.h["ẵ"] = "a";
	_g.h["ẳ"] = "a";
	_g.h["ȧ"] = "a";
	_g.h["ǡ"] = "a";
	_g.h["ä"] = "a";
	_g.h["ǟ"] = "a";
	_g.h["ả"] = "a";
	_g.h["å"] = "a";
	_g.h["ǻ"] = "a";
	_g.h["ǎ"] = "a";
	_g.h["ȁ"] = "a";
	_g.h["â"] = "a";
	_g.h["ạ"] = "a";
	_g.h["ậ"] = "a";
	_g.h["ặ"] = "a";
	_g.h["ḁ"] = "a";
	_g.h["ą"] = "a";
	_g.h["ⱥ"] = "a";
	_g.h["ɐ"] = "a";
	_g.h["ɑ"] = "a";
	_g.h["ꜳ"] = "aa";
	_g.h["æ"] = "ae";
	_g.h["ǽ"] = "ae";
	_g.h["ǣ"] = "ae";
	_g.h["ꜵ"] = "ao";
	_g.h["ꜷ"] = "au";
	_g.h["ꜹ"] = "av";
	_g.h["ꜻ"] = "av";
	_g.h["ꜽ"] = "ay";
	_g.h["b"] = "b";
	_g.h["ⓑ"] = "b";
	_g.h["ｂ"] = "b";
	_g.h["ḃ"] = "b";
	_g.h["ḅ"] = "b";
	_g.h["ḇ"] = "b";
	_g.h["ƀ"] = "b";
	_g.h["ƃ"] = "b";
	_g.h["ɓ"] = "b";
	_g.h["c"] = "c";
	_g.h["ⓒ"] = "c";
	_g.h["ｃ"] = "c";
	_g.h["ć"] = "c";
	_g.h["ĉ"] = "c";
	_g.h["ċ"] = "c";
	_g.h["č"] = "c";
	_g.h["ç"] = "c";
	_g.h["ḉ"] = "c";
	_g.h["ƈ"] = "c";
	_g.h["ȼ"] = "c";
	_g.h["ꜿ"] = "c";
	_g.h["ↄ"] = "c";
	_g.h["d"] = "d";
	_g.h["ⓓ"] = "d";
	_g.h["ｄ"] = "d";
	_g.h["ḋ"] = "d";
	_g.h["ď"] = "d";
	_g.h["ḍ"] = "d";
	_g.h["ḑ"] = "d";
	_g.h["ḓ"] = "d";
	_g.h["ḏ"] = "d";
	_g.h["đ"] = "d";
	_g.h["ƌ"] = "d";
	_g.h["ɖ"] = "d";
	_g.h["ɗ"] = "d";
	_g.h["ꝺ"] = "d";
	_g.h["ǳ"] = "dz";
	_g.h["ǆ"] = "dz";
	_g.h["e"] = "e";
	_g.h["ⓔ"] = "e";
	_g.h["ｅ"] = "e";
	_g.h["è"] = "e";
	_g.h["é"] = "e";
	_g.h["ê"] = "e";
	_g.h["ề"] = "e";
	_g.h["ế"] = "e";
	_g.h["ễ"] = "e";
	_g.h["ể"] = "e";
	_g.h["ẽ"] = "e";
	_g.h["ē"] = "e";
	_g.h["ḕ"] = "e";
	_g.h["ḗ"] = "e";
	_g.h["ĕ"] = "e";
	_g.h["ė"] = "e";
	_g.h["ë"] = "e";
	_g.h["ẻ"] = "e";
	_g.h["ě"] = "e";
	_g.h["ȅ"] = "e";
	_g.h["ȇ"] = "e";
	_g.h["ẹ"] = "e";
	_g.h["ệ"] = "e";
	_g.h["ȩ"] = "e";
	_g.h["ḝ"] = "e";
	_g.h["ę"] = "e";
	_g.h["ḙ"] = "e";
	_g.h["ḛ"] = "e";
	_g.h["ɇ"] = "e";
	_g.h["ɛ"] = "e";
	_g.h["ǝ"] = "e";
	_g.h["f"] = "f";
	_g.h["ⓕ"] = "f";
	_g.h["ｆ"] = "f";
	_g.h["ḟ"] = "f";
	_g.h["ƒ"] = "f";
	_g.h["ꝼ"] = "f";
	_g.h["ﬀ"] = "ff";
	_g.h["ﬁ"] = "fi";
	_g.h["ﬂ"] = "fl";
	_g.h["ﬃ"] = "ffi";
	_g.h["ﬄ"] = "ffl";
	_g.h["g"] = "g";
	_g.h["ⓖ"] = "g";
	_g.h["ｇ"] = "g";
	_g.h["ǵ"] = "g";
	_g.h["ĝ"] = "g";
	_g.h["ḡ"] = "g";
	_g.h["ğ"] = "g";
	_g.h["ġ"] = "g";
	_g.h["ǧ"] = "g";
	_g.h["ģ"] = "g";
	_g.h["ǥ"] = "g";
	_g.h["ɠ"] = "g";
	_g.h["ꞡ"] = "g";
	_g.h["ᵹ"] = "g";
	_g.h["ꝿ"] = "g";
	_g.h["h"] = "h";
	_g.h["ⓗ"] = "h";
	_g.h["ｈ"] = "h";
	_g.h["ĥ"] = "h";
	_g.h["ḣ"] = "h";
	_g.h["ḧ"] = "h";
	_g.h["ȟ"] = "h";
	_g.h["ḥ"] = "h";
	_g.h["ḩ"] = "h";
	_g.h["ḫ"] = "h";
	_g.h["ẖ"] = "h";
	_g.h["ħ"] = "h";
	_g.h["ⱨ"] = "h";
	_g.h["ⱶ"] = "h";
	_g.h["ɥ"] = "h";
	_g.h["ƕ"] = "hv";
	_g.h["i"] = "i";
	_g.h["ⓘ"] = "i";
	_g.h["ｉ"] = "i";
	_g.h["ì"] = "i";
	_g.h["í"] = "i";
	_g.h["î"] = "i";
	_g.h["ĩ"] = "i";
	_g.h["ī"] = "i";
	_g.h["ĭ"] = "i";
	_g.h["ï"] = "i";
	_g.h["ḯ"] = "i";
	_g.h["ỉ"] = "i";
	_g.h["ǐ"] = "i";
	_g.h["ȉ"] = "i";
	_g.h["ȋ"] = "i";
	_g.h["ị"] = "i";
	_g.h["į"] = "i";
	_g.h["ḭ"] = "i";
	_g.h["ɨ"] = "i";
	_g.h["ı"] = "i";
	_g.h["j"] = "j";
	_g.h["ⓙ"] = "j";
	_g.h["ｊ"] = "j";
	_g.h["ĵ"] = "j";
	_g.h["ǰ"] = "j";
	_g.h["ɉ"] = "j";
	_g.h["k"] = "k";
	_g.h["ⓚ"] = "k";
	_g.h["ｋ"] = "k";
	_g.h["ḱ"] = "k";
	_g.h["ǩ"] = "k";
	_g.h["ḳ"] = "k";
	_g.h["ķ"] = "k";
	_g.h["ḵ"] = "k";
	_g.h["ƙ"] = "k";
	_g.h["ⱪ"] = "k";
	_g.h["ꝁ"] = "k";
	_g.h["ꝃ"] = "k";
	_g.h["ꝅ"] = "k";
	_g.h["ꞣ"] = "k";
	_g.h["l"] = "l";
	_g.h["ⓛ"] = "l";
	_g.h["ｌ"] = "l";
	_g.h["ŀ"] = "l";
	_g.h["ĺ"] = "l";
	_g.h["ľ"] = "l";
	_g.h["ḷ"] = "l";
	_g.h["ḹ"] = "l";
	_g.h["ļ"] = "l";
	_g.h["ḽ"] = "l";
	_g.h["ḻ"] = "l";
	_g.h["ſ"] = "l";
	_g.h["ł"] = "l";
	_g.h["ƚ"] = "l";
	_g.h["ɫ"] = "l";
	_g.h["ⱡ"] = "l";
	_g.h["ꝉ"] = "l";
	_g.h["ꞁ"] = "l";
	_g.h["ꝇ"] = "l";
	_g.h["ǉ"] = "lj";
	_g.h["m"] = "m";
	_g.h["ⓜ"] = "m";
	_g.h["ｍ"] = "m";
	_g.h["ḿ"] = "m";
	_g.h["ṁ"] = "m";
	_g.h["ṃ"] = "m";
	_g.h["ɱ"] = "m";
	_g.h["ɯ"] = "m";
	_g.h["n"] = "n";
	_g.h["�"] = "ss";
	_g.h["ⓝ"] = "n";
	_g.h["ｎ"] = "n";
	_g.h["ǹ"] = "n";
	_g.h["ń"] = "n";
	_g.h["ñ"] = "n";
	_g.h["ṅ"] = "n";
	_g.h["ň"] = "n";
	_g.h["ṇ"] = "n";
	_g.h["ņ"] = "n";
	_g.h["ṋ"] = "n";
	_g.h["ṉ"] = "n";
	_g.h["ƞ"] = "n";
	_g.h["ɲ"] = "n";
	_g.h["ŉ"] = "n";
	_g.h["ꞑ"] = "n";
	_g.h["ꞥ"] = "n";
	_g.h["л"] = "n";
	_g.h["ԉ"] = "n";
	_g.h["ǌ"] = "nj";
	_g.h["߀"] = "o";
	_g.h["o"] = "o";
	_g.h["ⓞ"] = "o";
	_g.h["ｏ"] = "o";
	_g.h["ò"] = "o";
	_g.h["ó"] = "o";
	_g.h["ô"] = "o";
	_g.h["ồ"] = "o";
	_g.h["ố"] = "o";
	_g.h["ỗ"] = "o";
	_g.h["ổ"] = "o";
	_g.h["õ"] = "o";
	_g.h["ṍ"] = "o";
	_g.h["ȭ"] = "o";
	_g.h["ṏ"] = "o";
	_g.h["ō"] = "o";
	_g.h["ṑ"] = "o";
	_g.h["ṓ"] = "o";
	_g.h["ŏ"] = "o";
	_g.h["ȯ"] = "o";
	_g.h["ȱ"] = "o";
	_g.h["ö"] = "o";
	_g.h["ȫ"] = "o";
	_g.h["ỏ"] = "o";
	_g.h["ő"] = "o";
	_g.h["ǒ"] = "o";
	_g.h["ȍ"] = "o";
	_g.h["ȏ"] = "o";
	_g.h["ơ"] = "o";
	_g.h["ờ"] = "o";
	_g.h["ớ"] = "o";
	_g.h["ỡ"] = "o";
	_g.h["ở"] = "o";
	_g.h["ợ"] = "o";
	_g.h["ọ"] = "o";
	_g.h["ộ"] = "o";
	_g.h["ǫ"] = "o";
	_g.h["ǭ"] = "o";
	_g.h["ø"] = "o";
	_g.h["ǿ"] = "o";
	_g.h["ɔ"] = "o";
	_g.h["ꝋ"] = "o";
	_g.h["ꝍ"] = "o";
	_g.h["ɵ"] = "o";
	_g.h["Œ"] = "oe";
	_g.h["œ"] = "oe";
	_g.h["ƣ"] = "oi";
	_g.h["ȣ"] = "ou";
	_g.h["ꝏ"] = "oo";
	_g.h["p"] = "p";
	_g.h["ⓟ"] = "p";
	_g.h["ｐ"] = "p";
	_g.h["ṕ"] = "p";
	_g.h["ṗ"] = "p";
	_g.h["ƥ"] = "p";
	_g.h["ᵽ"] = "p";
	_g.h["ꝑ"] = "p";
	_g.h["ꝓ"] = "p";
	_g.h["ꝕ"] = "p";
	_g.h["q"] = "q";
	_g.h["ⓠ"] = "q";
	_g.h["ｑ"] = "q";
	_g.h["ɋ"] = "q";
	_g.h["ꝗ"] = "q";
	_g.h["ꝙ"] = "q";
	_g.h["r"] = "r";
	_g.h["ⓡ"] = "r";
	_g.h["ｒ"] = "r";
	_g.h["ŕ"] = "r";
	_g.h["ṙ"] = "r";
	_g.h["ř"] = "r";
	_g.h["ȑ"] = "r";
	_g.h["ȓ"] = "r";
	_g.h["ṛ"] = "r";
	_g.h["ṝ"] = "r";
	_g.h["ŗ"] = "r";
	_g.h["ṟ"] = "r";
	_g.h["ɍ"] = "r";
	_g.h["ɽ"] = "r";
	_g.h["ꝛ"] = "r";
	_g.h["ꞧ"] = "r";
	_g.h["ꞃ"] = "r";
	_g.h["s"] = "s";
	_g.h["ⓢ"] = "s";
	_g.h["ｓ"] = "s";
	_g.h["ß"] = "s";
	_g.h["ś"] = "s";
	_g.h["ṥ"] = "s";
	_g.h["ŝ"] = "s";
	_g.h["ṡ"] = "s";
	_g.h["š"] = "s";
	_g.h["ṧ"] = "s";
	_g.h["ṣ"] = "s";
	_g.h["ṩ"] = "s";
	_g.h["ș"] = "s";
	_g.h["ş"] = "s";
	_g.h["ȿ"] = "s";
	_g.h["ꞩ"] = "s";
	_g.h["ꞅ"] = "s";
	_g.h["ẛ"] = "s";
	_g.h["t"] = "t";
	_g.h["ⓣ"] = "t";
	_g.h["ｔ"] = "t";
	_g.h["ṫ"] = "t";
	_g.h["ẗ"] = "t";
	_g.h["ť"] = "t";
	_g.h["ṭ"] = "t";
	_g.h["ț"] = "t";
	_g.h["ţ"] = "t";
	_g.h["ṱ"] = "t";
	_g.h["ṯ"] = "t";
	_g.h["ŧ"] = "t";
	_g.h["ƭ"] = "t";
	_g.h["ʈ"] = "t";
	_g.h["ⱦ"] = "t";
	_g.h["ꞇ"] = "t";
	_g.h["þ"] = "th";
	_g.h["ꜩ"] = "tz";
	_g.h["u"] = "u";
	_g.h["ⓤ"] = "u";
	_g.h["ｕ"] = "u";
	_g.h["ù"] = "u";
	_g.h["ú"] = "u";
	_g.h["û"] = "u";
	_g.h["ũ"] = "u";
	_g.h["ṹ"] = "u";
	_g.h["ū"] = "u";
	_g.h["ṻ"] = "u";
	_g.h["ŭ"] = "u";
	_g.h["ü"] = "u";
	_g.h["ǜ"] = "u";
	_g.h["ǘ"] = "u";
	_g.h["ǖ"] = "u";
	_g.h["ǚ"] = "u";
	_g.h["ủ"] = "u";
	_g.h["ů"] = "u";
	_g.h["ű"] = "u";
	_g.h["ǔ"] = "u";
	_g.h["ȕ"] = "u";
	_g.h["ȗ"] = "u";
	_g.h["ư"] = "u";
	_g.h["ừ"] = "u";
	_g.h["ứ"] = "u";
	_g.h["ữ"] = "u";
	_g.h["ử"] = "u";
	_g.h["ự"] = "u";
	_g.h["ụ"] = "u";
	_g.h["ṳ"] = "u";
	_g.h["ų"] = "u";
	_g.h["ṷ"] = "u";
	_g.h["ṵ"] = "u";
	_g.h["ʉ"] = "u";
	_g.h["v"] = "v";
	_g.h["ⓥ"] = "v";
	_g.h["ｖ"] = "v";
	_g.h["ṽ"] = "v";
	_g.h["ṿ"] = "v";
	_g.h["ʋ"] = "v";
	_g.h["ꝟ"] = "v";
	_g.h["ʌ"] = "v";
	_g.h["ꝡ"] = "vy";
	_g.h["w"] = "w";
	_g.h["ⓦ"] = "w";
	_g.h["ｗ"] = "w";
	_g.h["ẁ"] = "w";
	_g.h["ẃ"] = "w";
	_g.h["ŵ"] = "w";
	_g.h["ẇ"] = "w";
	_g.h["ẅ"] = "w";
	_g.h["ẘ"] = "w";
	_g.h["ẉ"] = "w";
	_g.h["ⱳ"] = "w";
	_g.h["x"] = "x";
	_g.h["ⓧ"] = "x";
	_g.h["ｘ"] = "x";
	_g.h["ẋ"] = "x";
	_g.h["ẍ"] = "x";
	_g.h["y"] = "y";
	_g.h["ⓨ"] = "y";
	_g.h["ｙ"] = "y";
	_g.h["ỳ"] = "y";
	_g.h["ý"] = "y";
	_g.h["ŷ"] = "y";
	_g.h["ỹ"] = "y";
	_g.h["ȳ"] = "y";
	_g.h["ẏ"] = "y";
	_g.h["ÿ"] = "y";
	_g.h["ỷ"] = "y";
	_g.h["ẙ"] = "y";
	_g.h["ỵ"] = "y";
	_g.h["ƴ"] = "y";
	_g.h["ɏ"] = "y";
	_g.h["ỿ"] = "y";
	_g.h["z"] = "z";
	_g.h["ⓩ"] = "z";
	_g.h["ｚ"] = "z";
	_g.h["ź"] = "z";
	_g.h["ẑ"] = "z";
	_g.h["ż"] = "z";
	_g.h["ž"] = "z";
	_g.h["ẓ"] = "z";
	_g.h["ẕ"] = "z";
	_g.h["ƶ"] = "z";
	_g.h["ȥ"] = "z";
	_g.h["ɀ"] = "z";
	_g.h["ⱬ"] = "z";
	_g.h["ꝣ"] = "z";
	$r = _g;
	return $r;
}(this));
Mots.jsReg = new EReg("\\ud83c[\\udf00-\\udfff]|\\ud83d[\\udc00-\\ude4f]|\\ud83d[\\ude80-\\udeff]","g");
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_crypto_Base64.BYTES = haxe_io_Bytes.ofString(haxe_crypto_Base64.CHARS);
haxe_io_FPHelper.i64tmp = new haxe__$Int64__$_$_$Int64(0,0);
haxe_io_FPHelper.helper = new DataView(new ArrayBuffer(8));
httpstatus_HttpStatusCode.Continue = 100;
httpstatus_HttpStatusCode.SwitchingProtocols = 101;
httpstatus_HttpStatusCode.Processing = 102;
httpstatus_HttpStatusCode.OK = 200;
httpstatus_HttpStatusCode.Created = 201;
httpstatus_HttpStatusCode.Accepted = 202;
httpstatus_HttpStatusCode.NonAuthoritativeInformation = 203;
httpstatus_HttpStatusCode.NoContent = 204;
httpstatus_HttpStatusCode.ResetContent = 205;
httpstatus_HttpStatusCode.PartialContent = 206;
httpstatus_HttpStatusCode.MultiStatus = 207;
httpstatus_HttpStatusCode.AlreadyReported = 208;
httpstatus_HttpStatusCode.IMUsed = 226;
httpstatus_HttpStatusCode.MultipleChoices = 300;
httpstatus_HttpStatusCode.MovedPermanently = 301;
httpstatus_HttpStatusCode.Found = 302;
httpstatus_HttpStatusCode.SeeOther = 303;
httpstatus_HttpStatusCode.NotModified = 304;
httpstatus_HttpStatusCode.UseProxy = 305;
httpstatus_HttpStatusCode.SwitchProxy = 306;
httpstatus_HttpStatusCode.TemporaryRedirect = 307;
httpstatus_HttpStatusCode.PermanentRedirect = 308;
httpstatus_HttpStatusCode.BadRequest = 400;
httpstatus_HttpStatusCode.Unauthorized = 401;
httpstatus_HttpStatusCode.PaymentRequired = 402;
httpstatus_HttpStatusCode.Forbidden = 403;
httpstatus_HttpStatusCode.NotFound = 404;
httpstatus_HttpStatusCode.MethodNotAllowed = 405;
httpstatus_HttpStatusCode.NotAcceptable = 406;
httpstatus_HttpStatusCode.ProxyAuthenticationRequired = 407;
httpstatus_HttpStatusCode.RequestTimeout = 408;
httpstatus_HttpStatusCode.Conflict = 409;
httpstatus_HttpStatusCode.Gone = 410;
httpstatus_HttpStatusCode.LengthRequired = 411;
httpstatus_HttpStatusCode.PreconditionFailed = 412;
httpstatus_HttpStatusCode.PayloadTooLarge = 413;
httpstatus_HttpStatusCode.URITooLong = 414;
httpstatus_HttpStatusCode.UnsupportedMediaType = 415;
httpstatus_HttpStatusCode.RangeNotSatisfiable = 416;
httpstatus_HttpStatusCode.ExpectationFailed = 417;
httpstatus_HttpStatusCode.ImATeapot = 418;
httpstatus_HttpStatusCode.MisdirectedRequest = 421;
httpstatus_HttpStatusCode.UnprocessableEntity = 422;
httpstatus_HttpStatusCode.Locked = 423;
httpstatus_HttpStatusCode.FailedDependency = 424;
httpstatus_HttpStatusCode.UpgradeRequired = 426;
httpstatus_HttpStatusCode.PreconditionRequired = 428;
httpstatus_HttpStatusCode.TooManyRequests = 429;
httpstatus_HttpStatusCode.RequestHeaderFieldsTooLarge = 431;
httpstatus_HttpStatusCode.UnavailableForLegalReasons = 451;
httpstatus_HttpStatusCode.InternalServerError = 500;
httpstatus_HttpStatusCode.NotImplemented = 501;
httpstatus_HttpStatusCode.BadGateway = 502;
httpstatus_HttpStatusCode.ServiceUnavailable = 503;
httpstatus_HttpStatusCode.GatewayTimeout = 504;
httpstatus_HttpStatusCode.HTTPVersionNotSupported = 505;
httpstatus_HttpStatusCode.VariantAlsoNegotiates = 506;
httpstatus_HttpStatusCode.InsufficientStorage = 507;
httpstatus_HttpStatusCode.LoopDetected = 508;
httpstatus_HttpStatusCode.NotExtended = 510;
httpstatus_HttpStatusCode.NetworkAuthenticationRequired = 511;
tink__$Chunk_EmptyChunk.EMPTY = new haxe_io_Bytes(new ArrayBuffer(0));
tink_Chunk.EMPTY = new tink__$Chunk_EmptyChunk();
tink_Stringly.SUPPORTED_DATE_REGEX = new EReg("^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2})(\\.\\d{3})?(Z|[\\+-]\\d{2}:\\d{2})$","");
tink_Url.SCHEME = 2;
tink_Url.PAYLOAD = 3;
tink_Url.AUTH = 6;
tink_Url.HOSTNAMES = 7;
tink_Url.PATH = 8;
tink_Url.QUERY = 10;
tink_Url.HASH = 12;
tink_core_Callback.depth = 0;
tink_core_Callback.MAX_DEPTH = 500;
tink_core_AlreadyDisposed.INST = new tink_core_AlreadyDisposed();
tink_core_Future.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(null));
tink_core_Future.NEVER_INST = new tink_core__$Future_FutureObject();
tink_core_Future.NEVER = tink_core_Future.NEVER_INST;
tink_core_Lazy.NOISE = new tink_core__$Lazy_LazyConst(null);
tink_core_Lazy.NULL = tink_core_Lazy.NOISE;
tink_core_Noise.Noise = null;
tink_core_ProgressValue.ZERO = (function($this) {
	var $r;
	var this1 = new tink_core_MPair(0,haxe_ds_Option.None);
	var this2 = this1;
	$r = this2;
	return $r;
}(this));
tink_core_Progress.INIT = tink_core_ProgressValue.ZERO;
tink_core_Promise.NOISE = new tink_core__$Future_SyncFuture(new tink_core__$Lazy_LazyConst(tink_core_Outcome.Success(null)));
tink_core_Promise.NEVER = tink_core_Promise.never();
tink_core__$Signal_Disposed.INST = new tink_core__$Signal_Disposed();
tink_http_ChunkedParser.LINEBREAK = tink_chunk_Seekable.ofBytes(haxe_io_Bytes.ofString("\r\n"));
tink_http_Fetch.cache = new haxe_ds_EnumValueMap();
tink_http_HeaderValue.DAYS = "Sun,Mon,Tue,Wen,Thu,Fri,Sat".split(",");
tink_http_HeaderValue.MONTHS = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");
tink_http_HeaderName.REFERER = "referer";
tink_http_HeaderName.HOST = "host";
tink_http_HeaderName.SET_COOKIE = "set-cookie";
tink_http_HeaderName.COOKIE = "cookie";
tink_http_HeaderName.CONTENT_TYPE = "content-type";
tink_http_HeaderName.CONTENT_LENGTH = "content-length";
tink_http_HeaderName.CONTENT_DISPOSITION = "content-disposition";
tink_http_HeaderName.CONTENT_RANGE = "content-range";
tink_http_HeaderName.ACCEPT = "accept";
tink_http_HeaderName.ACCEPT_ENCODING = "accept-encoding";
tink_http_HeaderName.TRANSFER_ENCODING = "transfer-encoding";
tink_http_HeaderName.RANGE = "range";
tink_http_HeaderName.LOCATION = "location";
tink_http_HeaderName.AUTHORIZATION = "authorization";
tink_http_HeaderName.ORIGIN = "origin";
tink_http_HeaderName.VARY = "vary";
tink_http_HeaderName.CACHE_CONTROL = "cache-control";
tink_http_HeaderName.EXPIRES = "expires";
tink_http_HeaderName.ACCESS_CONTROL_REQUEST_METHOD = "access-control-request-method";
tink_http_HeaderName.ACCESS_CONTROL_REQUEST_HEADERS = "access-control-request-headers";
tink_http_HeaderName.ACCESS_CONTROL_ALLOW_ORIGIN = "access-control-allow-origin";
tink_http_HeaderName.ACCESS_CONTROL_ALLOW_CREDENTIALS = "access-control-allow-credentials";
tink_http_HeaderName.ACCESS_CONTROL_EXPOSE_HEADERS = "access-control-expose-headers";
tink_http_HeaderName.ACCESS_CONTROL_MAX_AGE = "access-control-max-age";
tink_http_HeaderName.ACCESS_CONTROL_ALLOW_METHODS = "access-control-allow-methods";
tink_http_HeaderName.ACCESS_CONTROL_ALLOW_HEADERS = "access-control-allow-headers";
tink_http_HeaderName.USER_AGENT = "user-agent";
tink_http_HeaderParser.INVALID = tink_io_ParseStep.Failed(new tink_core_TypedError(422,"Invalid HTTP header",{ fileName : "tink/http/Header.hx", lineNumber : 312, className : "tink.http.HeaderParser", methodName : "INVALID"}));
tink_http_Method.GET = "GET";
tink_http_Method.HEAD = "HEAD";
tink_http_Method.OPTIONS = "OPTIONS";
tink_http_Method.POST = "POST";
tink_http_Method.PUT = "PUT";
tink_http_Method.PATCH = "PATCH";
tink_http_Method.DELETE = "DELETE";
tink_io__$Sink_Blackhole.inst = new tink_io__$Sink_Blackhole();
tink_io_SinkYielding.BLACKHOLE = tink_io__$Sink_Blackhole.inst;
tink_streams_Empty.inst = new tink_streams_Empty();
tink_io_Source.EMPTY = tink_streams_Empty.inst;
tink_io_Worker.EAGER = new tink_io__$Worker_EagerWorker();
tink_io_Worker.pool = [tink_io_Worker.EAGER];
tink_url_Path.root = "/";
tink_web_routing_Response.BINARY = "application/octet-stream";
App.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=app.js.map