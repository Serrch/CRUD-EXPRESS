const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

//Settings
app.set('port', 5000);
app.set('views', path.join(__dirname,'views'));
app.set('views engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) =>{
    res.locals.message = null;
    res.locals.type = null;
    next();
});


//routes
app.use(require('./routes/index'));


//Static
app.use(express.static(path.join(__dirname, 'public')));

//404 handler
app.use((req, res, next) => {
    res.status(404).send('404 Not found');
});


module.exports = app;