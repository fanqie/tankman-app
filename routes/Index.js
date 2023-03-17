const Facades = require("tankman/framework/facades/Facades");
const HelloController = require("../app/http/controller/HelloController");

module.exports = () => {
    Facades.Route.Get("/", (httpCtx) => {
        httpCtx.response.Html("home page");
    });
    Facades.Route.Get("/dbList", [HelloController, "List"]);
    Facades.Route.Post("/list/:id", (httpCtx, id) => {
        httpCtx.response.SetBody(`<h1>home page!</h1>
<p>${httpCtx.request.Post("value")}</p>
<p>${httpCtx.request.Get("id")}</p>
`);
    });

    Facades.Route.Post("/test/:id", [HelloController, "Index"]).Middleware(['test1', 'test2']);

    Facades.Route.Get("/404-page", (httpCtx) => {
        httpCtx.response.Html("404 Not Found Page");
    }).Name("404");


    Facades.Route.Group("/one",
        function (route) {
            route.Redirect("/to/github", "https://github.com").Name("to.google")
        });
};
