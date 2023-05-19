// Desc: Application configuration file
// const facades = require("tankman/framework/facades/Facades");
const path = require("path");
// const RedisAdapter = require("tankman/framework/cache/adapter/RedisAdapter");
// const RedisSessionAdapter = require("tankman/framework/http/httpSessionAdapater/RedisSessionAdapter")
const FileSessionAdapter = require("tankman/types/http/httpSessionAdapater/FileSessionAdapter");

module.exports = {
    cluster: {
        enabled: true,
        process_max_count: 128
    },
    kernel: {
        providers: [
            require("tankman/framework/provider/DatabaseProvider"),
            require("tankman/framework/provider/RouteProvider"),
            require("tankman/framework/provider/ViewProvider"),
            require("tankman/framework/provider/LogProvider"),
            require("tankman/framework/provider/CacheProvider"),
            require("tankman/framework/provider/HttpClientProvider"),
        ],
        commands: [
            require("tankman/framework/command/GenerateCommand")
        ],
        /**
         * Clusters of Tankman.js processes can be used to run multiple instances of http-server that can distribute workloads among their application threads.
         * The cluster module allows easy creation of child processes that all share server ports.
         */
        middleware: {   //middleware config
            test1: require("../app/http/middleware/Test1Middleware"),
            test2: require("../app/http/middleware/Test2Middleware")
        },
        globalMiddlewares: [ //global middlewares
            {
                handler: require("tankman/framework/http/middleware/CorsMiddleware"),
                options: {
                    // regexp: /^api\/.*$/, //match api/*
                    // regexp: /^admin\/users\/.*$/, //match admin/users/*
                    regexp: /[\s\S]*/, //match all
                    // except: /^api\/map\/.*$/, //except api/map/*
                    except: [], //except /except/index
                    allowHeaders: "X-Requested-With,Content-Type,Authorization,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken",
                }
            }
        ]
    },
    xss: {
        routerWhiteList: [], // router white list
        whiteField: [], // white field
        options: {
            css: {},
            whiteList: {},
        }
    },

    //render("admin.dashboard",{}) equates render("admin/dashboard",{}), render file as views/admin/dashboard.tpl
    view: { //view config
        // const PugTemplate = require("tankman/framework/template/PugTemplate")
        // const ArtTemplate = require("tankman/framework/template/ArtTemplate")
        // handler: ArtTemplate,//art|pug
        handler: require("tankman/framework/template/PugTemplate"),//art|pug default is art
        dir: path.resolve(process.cwd(), 'views'),//absolutePath, default is views/
        cache: { //cache config
            // enable: facades.env.get("APP_ENV") === "production",
            enable: true, //default is true
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
        handler: new FileSessionAdapter(),//file,cache,database default path is: path.join(process.cwd(),"storage", ".temp", "session")
        // handler: new RedisSessionAdapter(new RedisAdapter({
        //     port: facades.env.get("REDIS_PORT", 6379),
        //     host: facades.env.get("REDIS_HOST", "127.0.0.1"),
        //     username: facades.env.get("REDIS_USERNAME", ""),
        //     password: facades.env.get("REDIS_PASSWORD", null),
        //     db: 0,
        // })),
        life: {
            maxAge: '30m',
            autoRenew: true,//default：true
            renewTime: '15m',
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

