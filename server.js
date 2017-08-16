// const variables

const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const dal = require('./dal');
const bodyParser = require('body-parser')
let updatedToDoList = [];

// setting up mustache basics

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// set up public folder for css  

app.use(express.static('public'));

// set up bodyParser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes

app.get ("/", function(req, res){
    res.render('todo');
})

app.post ("/", function(req, res){
    let updatedTodo = req.body
    updatedToDoList.push(updatedTodo);
    res.render('todo')
    console.log(updatedToDoList)
})

// setting up port

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('This application is up and running, bro.')
})

