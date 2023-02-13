const DatabaseProvider = require("tankman/framework/provider/DatabaseProvider")
const RouteProvider = require("tankman/framework/provider/RouteProvider")
module.exports = {
    "app": {
        providers: [
            DatabaseProvider,
            RouteProvider,
        ]
    }
}

