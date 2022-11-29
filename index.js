//import all the modules to be used
const createError = require('http-errors');
const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const route  = require('./routes/index');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const path = require('path');
const DB = require('./config/connnectDb');
const cookieParser = require('cookie-parser');

//connect to database
DB.connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//public folder
app.use(express.static(path.join(__dirname, 'public')))


app.use(expressEjsLayouts)
app.set('view engine', 'ejs')
app.set('layout','layout/defaultLayout.ejs')
//import all the routes
route(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error',{layout:false});
  });
  
//run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






