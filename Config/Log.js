const {FC} = require("tankman/framework");
module.exports = {
    log: {
        appenders: {
            console:{ type: 'console' },
            access: {
                type: "dateFile",
                filename: "Storage/log/access.log",
                pattern: "-yyyy-MM-dd",
                category: "http"
            },
            app: {
                type: "file",
                filename: "Storage/log/app.log",
                pattern: "-yyyy-MM-dd",
                maxLogSize: 10485760,
                numBackups: 3,
                alwaysIncludePattern: true

            },
            errorFile: {
                type: "file",
                filename: "Storage/log/errors.log",
                pattern: "-yyyy-MM-dd",
                alwaysIncludePattern: true
            },
            errors: {
                type: "logLevelFilter",
                level: "ERROR",
                appender: "errorFile"
            }
        },
        categories: {
            default: {appenders: ["console","app", "errors"], level: "DEBUG"},
            http: {appenders: ["console","access"], level: "DEBUG"}
        }
    },
}
