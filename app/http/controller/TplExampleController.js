const facades = require("tankman/framework/facades/Facades");
const Controller = require("tankman/framework/http/controller/Controller");

class TplExampleController extends Controller {
    constructor() {
        super();
    }

    userInfo(httpCtx) {
        const data = {
            avatar: 'https://avatars.githubusercontent.com/u/466966?v=4',
            username: 'John Doe',
            email: 'john@example.com',
            birthday: '1990-01-01',
            gender: 'male',
            country: 'China',
            github: 'https://github.com/fanqie',
            blog: 'https://my.oschina.net/youa',
        };
        httpCtx.response.view("example.user-profile",data)
    }
    
   
}

module.exports = TplExampleController
