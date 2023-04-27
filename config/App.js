const DatabaseProvider = require("tankman/framework/provider/DatabaseProvider")
const RouteProvider = require("tankman/framework/provider/RouteProvider")
const TemplateProvider = require("tankman/framework/provider/TemplateProvider")
const LogProvider = require("tankman/framework/provider/LogProvider")
const HttpClientProvider = require("tankman/framework/provider/HttpClientProvider")
const Test1Middleware = require("../app/http/middleware/Test1Middleware")
const Test2Middleware = require("../app/http/middleware/Test2Middleware")
const GenerateCommand = require("tankman/framework/command/GenerateCommand")
const path = require("path");
module.exports = {
    /**
     * Clusters of Tankman.js processes can be used to run multiple instances of http-server that can distribute workloads among their application threads.
     * The cluster module allows easy creation of child processes that all share server ports.
     */
    cluster: {
        enabled: false,
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
            TemplateProvider,
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
    templateEngine: {
        default: "art",//art|pug
        suffix: ".tpl",//.pug|.art|.html|.xxx
        dir: path.resolve(process.cwd(), "views"),//absolutePath, default is views/
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

