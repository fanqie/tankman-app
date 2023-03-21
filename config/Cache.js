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

        },
        //pg for PostgreSQL, CockroachDB and Amazon Redshift, pg-native for PostgreSQL with native C++ bindings (requires PostgresSQL installed to link against)
        pg: {
            client: 'pg',
            connection: {
                port: facades.env.get("DB_PORT", 5432),
                host: facades.env.get("DB_HOST", ""),
                user: facades.env.get("DB_USERNAME", ""),
                database: facades.env.get("DB_DATABASE", ""),
                password: facades.env.get("DB_PASSWORD", ""),
            },
            pool: {
                max: 5,
                min: 0,
            },
            acquireConnectionTimeout: 10000,
            migrations: {
                tableName: 'migrations'
            }
        },
        //tedious for MSSQL(Sql Server)
        mssql: {
            client: 'mssql',
            connection: {
                port: Number(facades.env.get("DB_PORT", 1433)),
                server: facades.env.get("DB_HOST", "."),
                user: facades.env.get("DB_USERNAME", "sa"),
                database: facades.env.get("DB_DATABASE", ""),
                password: facades.env.get("DB_PASSWORD", ""),
                driver: "msnodesqlv8",
                options: {
                    trustedConnection: true,

                }
            },

            pool: {
                max: 5,
                min: 0,
            },
            acquireConnectionTimeout: 10000,
            migrations: {
                tableName: 'migrations'
            }
        },
        //oracledb for Oracle Database
        oracledb: {
            client: 'oracledb',
            connection: {
                port: facades.env.get("DB_PORT", 1521),
                host: facades.env.get("DB_HOST", ""),
                user: facades.env.get("DB_USERNAME", ""),
                database: facades.env.get("DB_DATABASE", ""),
                password: facades.env.get("DB_PASSWORD", ""),
            },
            pool: {
                max: 5,
                min: 0,
            },
            acquireConnectionTimeout: 10000,
            migrations: {
                tableName: 'migrations'
            }

        },
        //sqlite3 for SQLite3
        sqlite3: {
            client: 'sqlite3',
            connection: {
                filename: "file:memDb1?mode=memory&cache=shared",
                flags: ['OPEN_URI', 'OPEN_SHAREDCACHE']
            }
        },

    },
}
