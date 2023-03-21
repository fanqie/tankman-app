const facades = require("tankman/framework/facades/Facades");
const Controller = require("tankman/framework/http/controller/Controller");

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
        console.log(httpCtx.request.file("testfile"))
        httpCtx.response.jsonError({id: Number(id)})

    }

    async curl(httpCtx) {
        httpCtx.response.html(await facades.httpClient.post("https://baidu.com").send())
    }

    async List(httpCtx) {

        const tableRes = await facades.db.table("packages").where("id", 4).select()
        const viewRes = await facades.db.table("ls_version").where({package_id: 5}).select()
        // console.log("mysql->>>>", await facades.db.instance.get("mysql")("packages").select())
        // httpCtx.response.setBody(`<pre>${JSON.stringify(res)}</pre>`);
        httpCtx.response.jsonSuccess({
            table: tableRes,
            view: viewRes
        })
    }
}

module.exports = HelloController
