const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));

var Data = []

app.get('/',function(req,res){
    res.render('index');
});

app.get('/form',function(req,res){
    res.render('form');
});

app.post('/submit',function(req,res){
    Data.push(req.body);
    console.log(req.body);
    res.redirect('/')
})

app.listen(port,'0.0.0.0',function(err){
    if (err){
        console.log(err);
        return;
    }

    console.log("Yay!! Express server is running");
});