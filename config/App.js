const DatabaseProvider = require("tankman/framework/provider/DatabaseProvider")
const RouteProvider = require("tankman/framework/provider/RouteProvider")
const LogProvider = require("tankman/framework/provider/LogProvider")
const Test1Middleware = require("../app/http/middleware/Test1Middleware")
const Test2Middleware = require("../app/http/middleware/Test2Middleware")
const GenerateCommand = require("tankman/framework/command/GenerateCommand")
module.exports = {
    /**
     * Clusters of Tankman.js processes can be used to run multiple instances of http-server that can distribute workloads among their application threads.
     * The cluster module allows easy creation of child processes that all share server ports.
     */
    cluster: {
        enabled: true,
        process_max_count: 8
    },

    app: {
        middleware: {
            test1: Test1Middleware,
            test2: Test2Middleware
        },
        providers: [
            DatabaseProvider,
            RouteProvider,
            LogProvider,
        ],
        commands: [
            GenerateCommand
        ]
    },
    xss: {
        routerWhiteList: [],
        whiteField: [],
        options: {
            css: {},
            whiteList: {},
        }
    }
}

