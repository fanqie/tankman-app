
const Engine = require("tankman/framework/http/Engine");
const app = require("./boostrap/App");
const engine = new Engine(app);
engine.run();
