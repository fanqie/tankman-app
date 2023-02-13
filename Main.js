const {Engine} = require("../tankman.js/framework/")
const User = require("./app/Http/models/Packages")
const app = require("./Boostrap/App")
const Fc = require("tankman/framework/Facades");
const {FC} = require("tankman/framework");

// const engine = new Engine(boostrap)
// console.log("》》》》",FC.DB)
// FC.DB("packages").select().then(res=>{
//     console.log(res)
// }).catch(res=>{
//     console.error(res)
// })

FC.DB.ConnectTo("mssql")("packages").select().then(res=>{
    console.log(res)
}).catch(res=>{
    console.error(res)
})
