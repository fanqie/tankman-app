const Engine = require("../tankman.js/framework/http/Engine");

const app = require("./boostrap/App");


const engine = new Engine(app);
engine.Run();
// FC.log.Error("xxxxxxxxxxxxxxxxxxx")
// FC.log.Error("xxxxxxxxxxxxxxxxxxx","http")
// console.log("--")
// const engine = new http(boostrap)
// console.log("》》》》",FC.DB)
// FC.DB("packages").select().then(res=>{
//     Facades.log.Debug(res)
// }).catch(res=>{
//     console.error(res)
// })
// FC.DB.ConnectTo("mssql")("packages").select().then(res => {
//     Facades.log.Warn(res)
// }).catch(res => {
//     console.error(res)
// })
