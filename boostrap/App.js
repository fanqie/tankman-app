const Application = require("tankman/framework/boot/Application");
/**
 * @type Application
 */
const app = new Application();
app.boot(require("../config/index"));

module.exports = app
