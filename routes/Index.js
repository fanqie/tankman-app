const Fc = require("tankman/framework/Facades")
const HelloController = require("../app/Http/Controller/HelloController")
module.exports = () => {
    const helloController = new HelloController()
    Fc.Route.Get("/", helloController.Index)
    Fc.Route.Get("/test/:id", (ctx) => {
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>Hello, TankMan!</h1>';
    })
    Fc.Route.Get("/404-page", (ctx) => {
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>NotFound Page,Http-Code:404!</h1>';
    }).Name("404")
    Fc.Route.Redirect("/re", "https://baidu.com").Name("re")
}
