const productRouter = require('./product');
const cartRouter = require('./cart');
const userRouter = require('./user.routers')

function route(app) {
    app.use('/',productRouter)
    app.use('/cart',cartRouter)
    app.use('/user',userRouter)
}

module.exports = route;