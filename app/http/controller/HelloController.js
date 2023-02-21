const Facades = require("tankman/framework/facades/Facades");
module.exports = class HelloTankMainController {
    constructor() {

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
