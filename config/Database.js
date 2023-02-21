const DatabaseProvider = require("tankman/framework/Provider/DatabaseProvider");
const RouteProvider = require("tankman/framework/Provider/RouteProvider");
const {Facades} = require("tankman/framework/Facades");
module.exports = {
    "database": {
        default: Facades.Env.Get("DB_CONNECTION", "mysql"),
        //mysql for MySQL or MariaDB
        mysql: {
            client: 'mysql',
            connection: {
                port: Facades.Env.Get("DB_PORT", 3306),
                host: Facades.Env.Get("DB_HOST", ""),
                user: Facades.Env.Get("DB_USERNAME", ""),
                database: Facades.Env.Get("DB_DATABASE", ""),
                password: Facades.Env.Get("DB_PASSWORD", ""),
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
                port: Facades.Env.Get("DB_PORT", 5432),
                host: Facades.Env.Get("DB_HOST", ""),
                user: Facades.Env.Get("DB_USERNAME", ""),
                database: Facades.Env.Get("DB_DATABASE", ""),
                password: Facades.Env.Get("DB_PASSWORD", ""),
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
                port: Number(Facades.Env.Get("DB_PORT", 1433)),
                server: Facades.Env.Get("DB_HOST", "."),
                user: Facades.Env.Get("DB_USERNAME", "sa"),
                database: Facades.Env.Get("DB_DATABASE", ""),
                password: Facades.Env.Get("DB_PASSWORD", ""),
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
                port: Facades.Env.Get("DB_PORT", 1521),
                host: Facades.Env.Get("DB_HOST", ""),
                user: Facades.Env.Get("DB_USERNAME", ""),
                database: Facades.Env.Get("DB_DATABASE", ""),
                password: Facades.Env.Get("DB_PASSWORD", ""),
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
