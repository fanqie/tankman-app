const DatabaseProvider = require("tankman/framework/provider/DatabaseProvider")
const RouteProvider = require("tankman/framework/provider/RouteProvider")
const LogProvider = require("tankman/framework/provider/LogProvider")
module.exports = {
    "app": {
        providers: [
            DatabaseProvider,
            RouteProvider,
            LogProvider,
        ]
    }
}

