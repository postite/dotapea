package  views;
import cross.NanoCast;
import haxe.macro.Compiler;
import tink.template.Html;
using Lambda;
import poscope.wire.IHead;

class Layout implements poscope.wire.ILayout{

    public var viewContent:Html;
    public  var footer:Html;
    public  var header:Html;
    public var head:Html;
    public  var menu:Html;
    public  var id:String;
    
    public function new(){
        
        this.footer=Footer.render();
        this.header=Header.render();
    }

    @:template("layout.tt")
    public function render():Html;
}


class Error{
    @:template('error')
    public static function render(err:String):Html;
}


class Head implements IHead{
    public function new(){
    }
  
  @:template('renderHead')
  public function render(scripts:Array<String>,styles:Array<String>,actions:String):Html;
  
  }

class Header {

    @:template('header')
    public static function render():Html;
    
    }

class Footer {

@:template('footer')
public static function render():Html;

}


class Menu {

@:template('menu')
public static function render(nav:Array<tink.core.Named<String>>):Html;

}

class Home {

    @:template('home')
    public static function render(data:String):Html;
}

class One {

    @:template('one')
    public static function render(nano:NanoCast):Html;
}



