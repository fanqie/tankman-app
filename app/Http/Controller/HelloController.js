module.exports = class HelloTankMainController {
    constructor() {
    }

    Index(ctx) {
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>Hello, TankMan!</h1>';
    }
}
