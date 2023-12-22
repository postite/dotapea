package cross;

using haxe.io.Path;
import haxe.io.Path;

typedef MSG={msg:String};

class Tools{

public static function mergeAnon<T,B>(ano1:T,ano2:B):T{

    for( a in Reflect.fields(ano2))
        Reflect.setField(ano1,a,Reflect.field(ano2,a));

    return ano1;
}


#if server
public static function removeRoot(s:String):String{
  var _s= StringTools.replace(s,Config.root,"");
  if( _s==s)
   _s= StringTools.replace(s,haxe.io.Path.normalize(Config.root),"");
  return Path.normalize(_s);
}

public static function addRoot(s:String):String{
    return (Config.root+"/"+s);
}

public static function addRelative(s:String):String{
    return Config.relativeRoot+s;
}


#end
#if client

public static function toggleFullScreen(?force=null) {
    trace ("fullscereen");
    untyped __js__('
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement || force) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen || force==false) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
  ');
}


#end







}