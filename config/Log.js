const {Facades} = require("tankman/framework/Index");
module.exports = {
    log: {
        appenders: {
            console: {type: 'console'},
            access: {
                type: "dateFile",
                filename: "storage/log/access.log",
                pattern: "yyyy-MM-dd",
                category: "http"
            },
            app: {
                type: "file",
                filename: "storage/log/app.log",
                pattern: "yyyy-MM-dd",
                maxLogSize: 10485760,
                numBackups: 3,
                alwaysIncludePattern: true

            },
            errorFile: {
                type: "file",
                filename: "storage/log/errors.log",
                pattern: "yyyy-MM-dd",
                alwaysIncludePattern: true
            },
            errors: {
                type: "logLevelFilter",
                level: "ERROR",
                appender: "errorFile"
            }
        },
        categories: {
            default: {appenders: ["console", "app", "errors"], level: Facades.Env.IsDebugger() ? "DEBUG" : "ERROR"},
            database: {appenders: ["console", "app", "errors"], level: Facades.Env.IsDebugger() ? "DEBUG" : "ERROR"},
            http: {appenders: ["console", "access"], level: Facades.Env.IsDebugger() ? "DEBUG" : "ERROR"}
        }
    },
}
