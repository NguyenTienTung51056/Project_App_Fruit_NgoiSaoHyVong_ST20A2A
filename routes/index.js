const productRouter = require('./product');
const cartRouter = require('./cart');

function route(app) {
    app.use('/',productRouter)
    app.use('/cart',cartRouter)
}

module.exports = route;