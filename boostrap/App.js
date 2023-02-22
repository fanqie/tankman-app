const Application = require("tankman/framework/boot/Application")
/**
 * @type Application
 */
app = new Application();

app.bootTank();
module.exports = app;
