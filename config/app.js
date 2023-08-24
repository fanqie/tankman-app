// Desc: Application configuration file
// const facades = require("tankman/framework/facades/Facades");
const path = require("path");
const FileSessionAdapter = require("tankman/framework/http/httpSessionAdapater/FileSessionAdapter");
// const RedisAdapter = require("tankman/framework/cache/adapter/RedisAdapter");
// const RedisSessionAdapter = require("tankman/framework/http/httpSessionAdapater/RedisSessionAdapter")

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

