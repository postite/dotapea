package cross;

import tink.url.Host;
import tink.Url;
using Std;
class Config{
  static var num=haxe.Resource.getString("res").parseInt();

//static var configSwitch=['192.168.1.34','localhost'];
public static var localPort=8080;
public static var localIP='localhost';//atchoum

public static var local:Bool= false;
   // public static var localIP='10.3.141.251'; //murmurspot
//public static var localIP='localhost'; //localhost
 // public static var localIP=configSwitch[num];
 #if nodejs
 public static var PORT:Int  #if server =untyped (process.env.PORT) #end;
 public static var IP:String   #if server =untyped (process.env.IP) #end;
 #end
  #if server
    //public static  var PORT=#if sys untyped (process.env.ALWAYSDATA_HTTPD_PORT) #else 8100  #end;
//     public static  var PORT:Int=untyped (process.env.ALWAYSDATA_HTTPD_PORT) ;
//  //public static  var IOPORT=5700;
//    // public static  var IP= #if sys untyped (process.env.ALWAYSDATA_HTTPD_IP) #else  '127.1.88.138' #end;
//     public static  var IP= untyped (process.env.ALWAYSDATA_HTTPD_IP) ;
 
  public static var root='./';
  public static var localroot='./www';//
  public static var relativeRoot='/';//

  public static var host:tink.url.Host; //localhost:3200
  public static var url:tink.Url; //http://localhost:3200
  public static var domain:Url= "http://postapi.postite.com";//http://oz.postite.com

  public static var dumpPath="/memoz"; //+plus root


  public static var sql_host="mysql-postite.alwaysdata.net";
  public static var sql_port=3306;
  public static var sql_user="postite";
  public static var sql_mdp="paglop";
  public static var sql_db="postite_weare";

  public static var local_sql_host="localhost";
  public static var local_sql_port=3306;
  public static var local_sql_user="root";
  public static var local_sql_mdp="";
  public static var local_sql_db="whearepainters";



  #else
  
  public static  var PORT:Int ;
  public static  var IP:String ;
  
   public static var root='./';
   public static var localroot='./www';
 
   public static var host:tink.url.Host; //localhost:3200
   public static var url:tink.Url; //http://localhost:3200
   public static var domain:Url; //oz.postite.com





  #end


  public static function toString(){
        return '
            url=$url,
            host=$host,
            domain=$domain,
            root=$root
          ';
  }

  }