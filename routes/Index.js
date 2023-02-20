const Fc = require("tankman/framework/Facades");
const HelloController = require("../app/http/controller/HelloController");
module.exports = () => {
    Fc.Route.Get("/", (ctx) => {
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>home page!</h1>';
    });
    Fc.Route.Get("/test/:id",  HelloController,"Index").Middleware(['test1','test2']);
    Fc.Route.Get("/404-page", (ctx) => {
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>NotFound Page,http-Code:404!</h1>';
    }).Name("404");
    FC.Route.Group("/one",function () {

    });
    Fc.Route.Redirect("/to/google", "https://google.com").Name("to.google")
};
