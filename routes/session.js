const path = require("path");
const SessionController = require( "../app/http/controller/SessionController.js");

module.exports = (route) => {

    route.group("/session",
        function (route) {
            route.get("/", [SessionController, "store"]);
            route.get("/show", [SessionController, "show"]);
        });
};
