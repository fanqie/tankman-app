const {Engine} = require("../tankman.js/framework/")
routes = require("./routes/Index")
const app = require("./Boostrap/App")

app.Use(routes)
const engine = new Engine(app)
engine.Run()
// FC.Log.Error("xxxxxxxxxxxxxxxxxxx")
// FC.Log.Error("xxxxxxxxxxxxxxxxxxx","http")
// console.log("--")
// const engine = new Engine(boostrap)
// console.log("》》》》",FC.DB)
// FC.DB("packages").select().then(res=>{
//     Facades.Log.Debug(res)
// }).catch(res=>{
//     console.error(res)
// })
// FC.DB.ConnectTo("mssql")("packages").select().then(res => {
//     Facades.Log.Warn(res)
// }).catch(res => {
//     console.error(res)
// })
