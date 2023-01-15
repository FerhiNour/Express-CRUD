var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose= require('mongoose')
require('dotenv').config()
const routerStudent=require('./routes/student.route')



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URI)
.then(()=>console.log('connected'))
.catch(err=>console.log(err.message))

app.use('/api',routerStudent)


module.exports = app;
