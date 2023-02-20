const Middleware = require('tankman/framework/http/middleware/Middleware')
const FC=require("tankman/framework/Facades")
module.exports=class Test2Middleware extends Middleware{
    /**
     *
     * @param httpCtx {HttpContext}
     * @param next
     * @returns {Promise<void>}
     * @constructor
     */
     async  Handle(httpCtx,next){
         FC.Log.Info("before test2");
       await next();
         FC.Log.Info("after test2");
    }
}