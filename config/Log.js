const facades = require("tankman/framework/facades/Facades");
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
            default: {appenders: ["console", "app", "errors"], level: facades.env.isDebugger() ? "DEBUG" : "ERROR"},
            database: {appenders: ["console", "app", "errors"], level: facades.env.isDebugger() ? "DEBUG" : "ERROR"},
            http: {appenders: ["console", "access"], level: facades.env.isDebugger() ? "DEBUG" : "ERROR"}
        }
    },
}
