#!/usr/bin/env node
/**
 * npm link
 */
const args = process.argv.slice(2)
const app = require("../boostrap/App");
if (args.length > 0) {
    const commandName = args[0]
    if (app.commandHandles.has(commandName)) {
        app.commandHandles.get(commandName).parse().handle(args.slice(1))
        process.exit(0)
    }
} else {
    console.log("-----------commands----------")
    app.commandHandles.forEach((command, key) => {

        console.log(key,"\t", command.getDesc())
        console.log(command.help())
    })

    // throw new error("Undefined Command")
}
