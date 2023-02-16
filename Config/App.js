const DatabaseProvider = require("tankman/framework/provider/DatabaseProvider")
const RouteProvider = require("tankman/framework/provider/RouteProvider")
const LogProvider = require("tankman/framework/provider/LogProvider")
module.exports = {
    /**
     * Clusters of Tankman.js processes can be used to run multiple instances of http-server that can distribute workloads among their application threads.
     * The cluster module allows easy creation of child processes that all share server ports.
     */
    cluster:{
        enabled:true,
        process_max_count:8
    },
    app: {
        providers: [
            DatabaseProvider,
            RouteProvider,
            LogProvider,
        ]
    }
}

