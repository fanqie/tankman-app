const FC=require("tankman/framework/Facades")
module.exports = class HelloTankMainController {
    constructor() {

    }

    Index(ctx) {
        FC.Log.Info("这里执行了")
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>Hello, TankMan!,time：'+new Date()+'</h1>';
    }
}
