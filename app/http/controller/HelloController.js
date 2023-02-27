const Facades = require("tankman/framework/facades/Facades");
const Controller = require("tankman/framework/http/controller/Controller");
module.exports = class HelloController extends Controller{
    constructor() {
        super();
    }

    /**
     * @param httpCtx {HttpContext}
     * @constructor
     */
    Index(httpCtx) {
        Facades.Log.Info("这里执行了")
        httpCtx.response.SetBody('<h1>Hello, TankMan!,time：'+new Date()+'</h1>');
    }
}
