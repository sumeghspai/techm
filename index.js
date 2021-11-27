const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));

app.get('/',function(req,res){
    res.render('index');
})

app.listen(port,'0.0.0.0',function(err){
    if (err){
        console.log(err);
        return;
    }

    console.log("Yay!! Express server is running");
});