const UpLoProvider = require("tankman/framework/provider/UpLoProvider")
const DatabaseProvider = require("tankman/framework/provider/DatabaseProvider")
const RouteProvider = require("tankman/framework/provider/RouteProvider")
module.exports = {
    "app": {
        providers: [
            UpLoProvider,
            DatabaseProvider,
            RouteProvider,
        ]
    }
}

