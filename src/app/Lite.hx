package server.app;



import cross.NanoCast;

//import auth.User;

import cross.Config;


// @:tables(Eyeql,EyeTag,EyeTagMap,GalImage,EyeGalMap)
// class Db extends tink.sql.Database {}


// after
@:tables(
   
   NanoCast
   // Sketch,
   // Sketcher,
   // SessionJoinSketch,
   // SketcherJoinSketch
   
   )


interface Def extends tink.sql.DatabaseDefinition {}

#if server
typedef Db = tink.sql.Database<Def>;
#end

class Lite{

   public static var db:Db;

   static public function connect(){

      // //mysql
      // var driver = new tink.sql.drivers.MySql({
      //    host:Config.sql_host,
      //    user: Config.sql_user,
      //    password: Config.sql_mdp,
      //    port:Config.sql_port
      //  });
      //var db = new Db(Config.sql_db, driver);
      //lite
     
      var driver = new tink.sql.drivers.Sqlite();
      db = new Db('${Config.root}/nanocast.db', driver);
       return db;
     }


     

}




