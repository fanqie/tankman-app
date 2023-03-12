const Facades = require("tankman/framework/facades/Facades");
const Controller = require("tankman/framework/http/controller/Controller");
const app = require("../../../boostrap/App");

class HelloController extends Controller {
    constructor() {
        super();
    }

    /**
     * @param httpCtx {HttpContext}
     * @param id {int}
     * @function
     */
    Index(httpCtx, id) {
        console.log(httpCtx.request.File("testfile"))
        httpCtx.response.JsonError({id:Number(id)})

    }

    async List(httpCtx) {
        const res = await Facades.Db("packages").select()
        // console.log("mysql->>>>", await Facades.Db.instance.Get("mysql")("packages").select())
        // httpCtx.response.SetBody(`<pre>${JSON.stringify(res)}</pre>`);
        httpCtx.response.JsonSuccess(res)
    }
}

module.exports = HelloController
