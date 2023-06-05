const facades = require("tankman/framework/facades/Facades");
const path = require("path");
module.exports = {
    log: {
        appenders: {
            console: {type: 'console'},
            access: {
                type: "dateFile",
                filename: path.join(process.cwd(),  ".runtime", "log", "access.log"),
                pattern: "yyyy-MM-dd",
                category: "http"
            },
            app: {
                type: "file",
                filename: path.join(process.cwd(),  ".runtime", "log", "app.log"),
                pattern: "yyyy-MM-dd",
                maxLogSize: 10485760,
                numBackups: 3,
                alwaysIncludePattern: true

            },
            errorFile: {
                type: "file",
                filename: path.join(process.cwd(),  ".runtime", "log", "errors.log"),
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
