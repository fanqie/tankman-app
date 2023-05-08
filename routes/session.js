const path = require("path");
const SessionController = path.resolve(__dirname, "../app/http/controller/SessionController.js");

module.exports = (route) => {

    route.group("/session",
        function (route) {
            route.get("/", [SessionController, "store"]);
            route.get("/show", [SessionController, "show"]);
        });
};
