const approve = require('./middleware/approve'),
    approval = require('./middleware/approval'),
    reference = require('./middleware/reference'),
    test = require('./middleware/test')

module.exports = [
    {
        route: "/aprovacao",
        handle: approval
    },
    {
        route: "/referencia",
        handle: reference
    },
    {
        route: "/testar",
        handle: test
    },
    {
        route: "/aprovar",
        handle: approve
    }
];

console.log('rotas:', module.exports);