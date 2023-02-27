const Application = require("tankman/framework/boot/Application")

module.exports = ()=>{
    /**
     * @type Application
     */
   const app = new Application();
    app.bootTank();
    return app;
};
