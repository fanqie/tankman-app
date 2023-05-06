const facades = require("tankman/framework/facades/Facades");
module.exports = {
    "cache": {
        default: facades.env.get("CACHE_DRIVE", "file"),
        //mysql for MySQL or MariaDB
        file: {
            saveFile: facades.env.get("CACHE_DRIVE", ".runtime/cache.json")
        },
        redis: {
            client: 'mysql',
            connection: {
                port: facades.env.get("DB_PORT", 3306),
                host: facades.env.get("DB_HOST", ""),
                user: facades.env.get("DB_USERNAME", ""),
                database: facades.env.get("DB_DATABASE", ""),
                password: facades.env.get("DB_PASSWORD", ""),
            },
            pool: {
                min: 2,
                max: 10,
            },
            acquireConnectionTimeout: 10000,

        }
    },
}
