const path = require("path");

module.exports = {
    //render("admin.dashboard",{}) equates render("admin/dashboard",{}), render file as views/admin/dashboard.tpl
    view: { //view config
        // const PugTemplate = require("tankman/framework/template/PugTemplate")
        // const ArtTemplate = require("tankman/framework/template/ArtTemplate")
        // handler: ArtTemplate,//art|pug
        handler: require("tankman/framework/template/PugTemplate"),//art|pug default is art
        dir: path.resolve(process.cwd(), 'views'),//absolutePath, default is views/
        cache: { //cache config
            // enable: facades.env.get("APP_ENV") === "production",
            enable: true, //default is true
            /**
             * '2 days'  // 172800000
             * '1d'      // 86400000
             * '10h'     // 36000000
             * '2.5 hrs' // 9000000
             * '2h'      // 7200000
             * '1m'      // 60000
             * '5s'      // 5000
             * '1y'      // 31557600000
             * '100'     // 100
             * '-3 days' // -259200000
             * '-1h'     // -3600000
             * '-200'    // -200
             */
            maxLife: '1h',//support  ms value,
        }
    }
}

