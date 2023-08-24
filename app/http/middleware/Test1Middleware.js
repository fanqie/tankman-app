const Middleware = require('tankman/framework/http/middleware/Middleware');
const Facades = require("tankman/framework/facades/Facades");
module.exports = class Test1Middleware extends Middleware {
    /**
     *
     * @param httpCtx {HttpContext}
     * @param next
     * @returns {Promise<void>}
     * @constructor
     */
    async handle(httpCtx, next) {
        Facades.log.info("before")
        await next()
        Facades.log.info("after")
    }
}
