const Middleware = require('tankman/framework/Middleware/Middleware')
module.exports=class Test2Middleware extends Middleware{
     async  Handle(ctx,itNext){
        console.log("before test2")
       await itNext.next()
        console.log("after test2")
    }
}