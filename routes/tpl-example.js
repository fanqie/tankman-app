const path = require("path");
const TplExampleController = path.resolve(__dirname, "../app/http/controller/TplExampleController");

module.exports = (route) => {

    route.group("/tpl",
        function (route) {
            route.get("userinfo", [TplExampleController, "userInfo"])
        });
};
