// const variables

const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const dal = require('./dal');
const bodyParser = require('body-parser')
const newData = require("./array.js")
const completedItems = require("./completedArray")

// this is for my completed list

// const moveToComplete = require("./completedList")

// end here

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
    res.render('todo', {
        newData: dal.pendingItems(), 
        completedItems: dal.completedItems()})

})

app.post ("/", function(req, res){
    newData.push({id: (newData.length + 1), 
    task: req.body.todo,
    completed: false});
    console.log(newData);
    res.redirect('/')
})

app.post ("/delete/:id", function (req, res){
    dal.removeItem(req.params.id)
    res.redirect("/")
})



// setting up port

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('This application is up and running, bro.')
})









