const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const  route  = require('./routers/index');

//connect to database
connectDB.connectDB();

// Middleware
app.use(cors({
    origin:['http://localhost:3000','http://localhost:3001','http://192.168.1.110:3000'],
    credentials:true,
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    exposedHeaders: ["Set-Cookie"],
}));

app.use(cookieParser());
app.use(express.json());


//router
route(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



