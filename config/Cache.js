const facades = require("tankman/framework/facades/Facades");
const RedisAdapter = require("tankman/framework/cache/adapter/RedisAdapter");
const FileCacheAdapter = require("tankman/framework/cache/adapter/FileCacheAdapter");
// new FileCacheAdapter(facades.env.get("CACHE_DRIVE", ".runtime/cache.json"))
module.exports = {
    cache: new RedisAdapter({
        port: facades.env.get("REDIS_PORT", 6379),
        host: facades.env.get("REDIS_HOST", "127.0.0.1"),
        username: facades.env.get("REDIS_USERNAME", ""),
        password: facades.env.get("REDIS_PASSWORD", null),
        db: 0,
    })
}
