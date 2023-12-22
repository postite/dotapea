package cross;
import tink.sql.Types;

typedef NanoCast ={
    @:autoincrement @:primary @:unique @:optional
    final id:Id<NanoCast>;
    final url:VarChar<255>;
    final title:VarChar<255>;
    final orig_url:Null<VarChar<255>>;
    final description:Null<TinyText>;
    final duration:Null<tink.sql.Types.TinyInt>;
}