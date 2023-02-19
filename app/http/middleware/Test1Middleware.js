const Middleware = require('tankman/framework/http/middleware/Middleware')
const FC = require("tankman/framework/Facades")
module.exports = class Test1Middleware extends Middleware {
    async Handle(ctx, next) {
        FC.Log.Info("before")
        await next()
        FC.Log.Info("after")
    }
}