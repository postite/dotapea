package app;

#if nodejs
import js.Syntax;
import js.node.Process;
#end
import tink.http.containers.*;
import tink.http.Response;
import tink.web.routing.*;
import cross.Config;
import tink.core.Error;
import tink.http.middleware.Static;
import tink.http.middleware.*;
import tink.http.middleware.Html;
import tink.http.Request.IncomingRequestHeader;
using tink.io.Source;
import tink.http.middleware.CrossOriginResourceSharing;
#if php
import tink.http.containers.PhpContainer;
#end

class Server {
	static function main() {
		
	
		#if nodejs
		// new Process().env.get(NODE_DEBUG)="http";
		// Syntax.code("process.env.NODE_DEBUG = 'http'");

		var here = js.node.Os.hostname().Log("here");
		if (~/local|murmur|192.168.1|10.3.141/.match(here)) {
			// Compiler.define("local",true);
			Config.local = true;
			Config.PORT = Config.localPort;
			Config.IP = Config.localIP;
			Config.root = Config.localroot;
			Config.domain = Config.url;

			Config.sql_host = Config.local_sql_host;
			Config.sql_port = Config.local_sql_port;
			Config.sql_user = Config.local_sql_user;
			Config.sql_mdp = Config.local_sql_mdp;
			Config.sql_db = Config.local_sql_db;
		}

		var host:tink.url.Host = new tink.url.Host(Config.IP, Config.PORT);

		var server = js.node.Http.createServer();
		var container = new NodeContainer(server);
		#end

		// var router= new Router<server.app.UserSession,Root>(new Root());
		//     var router = new Router<Root>(new Root());

	

		var router = new Router<Root>(new Root());

		var handler:tink.http.Handler = function(req) {
			return router.route(Context.ofRequest(req)).recover(OutgoingResponse.reportError);
		}

		
     	handler = handler.applyMiddleware(new CrossOriginResourceSharing(CorsProcessor.regex(~/.*/, true)));
		handler = handler.applyMiddleware(new Static('./statics', '/'));
		handler = handler.applyMiddleware(new Static('./uploads', '/uploads'));
		handler = handler.applyMiddleware(new Static('./md', '/'));
		handler = handler.applyMiddleware(new Static('./mdnav', '/mdnav'));
		

		#if nodejs
		server.listen(Config.PORT, Config.IP);
		#end
		container.run(handler);
	}

   
}
