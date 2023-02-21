const Middleware = require('tankman/framework/http/middleware/Middleware');
const Facades = require("tankman/framework/Facades");
module.exports = class Test1Middleware extends Middleware {
    /**
     *
     * @param httpCtx {HttpContext}
     * @param next
     * @returns {Promise<void>}
     * @constructor
     */
    async Handle(httpCtx, next) {
        Facades.Log.Info("before")
        await next()
        Facades.Log.Info("after")
    }
}
