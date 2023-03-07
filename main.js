
const Engine = require("../tankman.js/framework/http/Engine");

const app = require("./boostrap/App");
// app()
const engine = new Engine(app);
engine.Run();
// FC.log.Error("xxxxxxxxxxxxxxxxxxx")
// FC.log.Error("xxxxxxxxxxxxxxxxxxx","http")
// console.log("--")
// const engine = new http(boostrap)
// console.log("》》》》",FC.DB)

// app().DB.ConnectTo("mssql")("packages").select().then(res => {
//     Facades.log.Warn(res)
// }).catch(res => {
//     console.error(res)
// })
