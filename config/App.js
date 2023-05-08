const DatabaseProvider = require("tankman/framework/provider/DatabaseProvider")
const RouteProvider = require("tankman/framework/provider/RouteProvider")
const ViewProvider = require("tankman/framework/provider/ViewProvider")
const LogProvider = require("tankman/framework/provider/LogProvider")
const HttpClientProvider = require("tankman/framework/provider/HttpClientProvider")
const Test1Middleware = require("../app/http/middleware/Test1Middleware")
const Test2Middleware = require("../app/http/middleware/Test2Middleware")
const GenerateCommand = require("tankman/framework/command/GenerateCommand")
const path = require("path");
const facades = require("tankman/framework/facades/Facades");
const PugTemplate = require("tankman/framework/template/PugTemplate")
// const ArtTemplate = require("tankman/framework/template/ArtTemplate")
const FileSessionAdapter=require("tankman/framework/http/httpSessionAdapater/FileSessionAdapter")
module.exports = {
    /**
     * Clusters of Tankman.js processes can be used to run multiple instances of http-server that can distribute workloads among their application threads.
     * The cluster module allows easy creation of child processes that all share server ports.
     */
    cluster: {
        enabled: true,
        process_max_count: 128
    },

    app: {
        middleware: {
            test1: Test1Middleware,
            test2: Test2Middleware
        },
        providers: [
            DatabaseProvider,
            RouteProvider,
            ViewProvider,
            LogProvider,
            HttpClientProvider,
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
    },

    //render("admin.dashboard",{}) equates render("admin/dashboard",{}), render file as views/admin/dashboard.tpl
    view: {
        // const PugTemplate = require("tankman/framework/template/PugTemplate")
        // const ArtTemplate = require("tankman/framework/template/ArtTemplate")
        // handler: ArtTemplate,//art|pug
        handler: PugTemplate,//art|pug
        dir: path.resolve(process.cwd(), 'views'),//absolutePath, default is views/
        cache: {
            // enable: facades.env.get("APP_ENV") === "production",
            enable: true,
            /**
             * '2 days'  // 172800000
             * '1d'      // 86400000
             * '10h'     // 36000000
             * '2.5 hrs' // 9000000
             * '2h'      // 7200000
             * '1m'      // 60000
             * '5s'      // 5000
             * '1y'      // 31557600000
             * '100'     // 100
             * '-3 days' // -259200000
             * '-1h'     // -3600000
             * '-200'    // -200
             */
            maxLife: '1h',//support  ms value,
        }
    },
    httpSession: {
        /**
         * No matter which one you choose, the default driver will be used directly,
         * so it is not recommended to choose the file type when the type is cache,
         * If you choose a file type, it will default to creating a session file, which is not suitable for distributed systems
         */
        handler:new FileSessionAdapter() ,//file,cache,database default path is: path.join(process.cwd(),"storage", ".temp", "session")
        life: {
            maxAge: '30s',
            autoRenew: true,//default：true
            renewTime: '15s',
        },
        cookieIdPrefix: "",
        gcIntervalTime: '1s'//The interval between expired session recycling
    },
    response:
        {
            json: {
                template: {
                    code: '#err_no',
                    data: '#data',
                    err_msg: '#err_msg',
                    time: '#time',
                },
                defaultErrNo: {
                    success: 200,
                    error: 1,
                },
            },

        }
}

