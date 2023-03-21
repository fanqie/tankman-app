const Middleware = require('tankman/framework/http/middleware/Middleware')
const Facades = require("tankman/framework/facades/Facades")
module.exports = class Test2Middleware extends Middleware {
    /**
     *
     * @param httpCtx {HttpContext}
     * @param next
     * @returns {Promise<void>}
     * @constructor
     */
    async Handle(httpCtx, next) {
        Facades.log.info("before test2");
        await next();
        Facades.log.info("after test2");

    }
};
