const Middleware = require('tankman/framework/Middleware/Middleware')
module.exports=class Test1Middleware extends Middleware{
     async  Handle(ctx,itNext){
        console.log("before")
       await itNext.next()
        console.log("after")
    }
}