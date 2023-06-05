const path = require("path");
const TplExampleController = require("../app/http/controller/TplExampleController");

module.exports = (route) => {

    route.group("/tpl",
        function (route) {
            route.get("userinfo", [TplExampleController, "userInfo"])
        });
};
