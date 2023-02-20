const Fc = require("tankman/framework/Facades");
const HelloController = require("../app/http/controller/HelloController");
module.exports = () => {
    Fc.Route.Get("/", (httpCtx) => {
        httpCtx.response.SetBody('<h1>home page!</h1>');
    });
    Fc.Route.Get("/test/:id",  HelloController,"Index").Middleware(['test1','test2']);
    Fc.Route.Get("/404-page", (httpCtx) => {
        httpCtx.response.SetBody('<h1>NotFound Page,http-Code:404!</h1>');
    }).Name("404");

    Fc.Route.Group("/one",function (route) {
        route.Redirect("/to/github", "https://github.com").Name("to.google")
    });
};
