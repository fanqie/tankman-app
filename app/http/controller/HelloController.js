const Facades = require("tankman/framework/facades/Facades");
const Controller = require("tankman/framework/http/controller/Controller");
const app = require("../../../boostrap/App");
module.exports = class HelloController extends Controller {
    constructor() {
        super();
    }

    /**
     * @param httpCtx {HttpContext}
     * @constructor
     */
    Index(httpCtx) {
        Facades.Log.Info("这里执行了")
        console.log(httpCtx.request.File("testfile"))
        httpCtx.response.SetBody('<h1>Hello, TankMan!,time：' + new Date() + '</h1>');
    }

    async List(httpCtx) {
        const res = await Facades.Db("packages").select()
        // console.log("mysql->>>>", await Facades.Db.instance.Get("mysql")("packages").select())
        // httpCtx.response.SetBody(`<pre>${JSON.stringify(res)}</pre>`);
        httpCtx.response.JsonSuccess(res)
    }
}
