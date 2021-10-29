const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const ejs = require('ejs');


app.use(express.static("public"));
var session = require('express-session');

// var cookieParser = require('cookie-parser');


// SET VIEW ENGINE
// app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', 'views');

// console.log(session);
const homeRoute = require("./routes/home");
const rentRoute = require("./routes/rent");
const buyRoute = require("./routes/buy");
const sellRoute = require("./routes/sell");
const viewPropertyRoute = require("./routes/viewProperty");
const loginpageRoute = require("./routes/loginpage");

app.use("/", homeRoute);
app.use("/rent", rentRoute);
app.use("/buy", buyRoute);
app.use("/sell", sellRoute);
app.use("/viewProperty", viewPropertyRoute);
app.use("/loginpage", loginpageRoute);

// const mysqlConnection = require('./config/database');


// app.use(cookieParser());






// app.use(session({
//     secret: 'worksheetswelove',
//     resave: true,
//     saveUninitialized: true,
//     maxAge: Date.now() + (30 * 86400 * 1000)
// })); // session secret



// USE BODY-PARSER MIDDLEWARE
app.use(express.urlencoded({ extended: false }));



app.use(express.json());




app.listen('3000', () => {
    console.log("server started on port 3000");
});

module.exports = app;


