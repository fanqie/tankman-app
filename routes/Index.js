const path = require("path");
const HelloControllerPath = path.resolve(__dirname,"../app/http/controller/HelloController");

module.exports = (route) => {

    route.get("/", (httpCtx) => {
        httpCtx.response.html("home page");
    });
    route.get("/dbList", [HelloControllerPath, "List"]);
    route.post("/list/:id", (httpCtx, id) => {
        httpCtx.response.setBody(`<h1>home page!</h1>
<p>${httpCtx.request.post("value")}</p>
<p>${httpCtx.request.Get("id")}</p>
`);
    });

    route.post("/test/:id", [HelloControllerPath, "Index"]).middleware(['test1', 'test2']);
    route.get("/curl", [HelloControllerPath, "curl"]);

    route.get("/404-page", (httpCtx) => {
        httpCtx.response.html("404 Not Found Page");
    }).routeName("404");


    route.group("/one",
        function (route) {
            route.redirect("/to/github", "https://github.com").routeName("to.google")
        });
};
