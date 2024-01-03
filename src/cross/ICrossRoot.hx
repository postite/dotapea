package cross;
import tink.template.Html;

import cross.Tools.MSG;

import tink.Url;
interface ICrossRoot{

    @:post
    public function save(body:{text:String,id:String}):Promise<Noise>;

}