const express = require("express");
const hbs = require("hbs");
const path = require("path");

var app = express();


hbs.registerPartials(path.join(__dirname,'views','partials'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/about', (request, response)=>{
    response.render('mainPage.hbs',{
        title:"About Page",
        message:'this is about page'
    });
});

app.get('/user/:id', (req, res)=>{
    var id = req.params.id;
    res.render('mainPage.hbs',{
        title:"USER PAGE",
        message: 'this USER ' +res.status+' page'
    });
});
app.get('/goods/:id/:count', (req, res)=>{
    var id = req.param('id');
    var count = req.param('count');
    if (id == 'phone'){
        res.status(404).json({message:"gorgeous error"});
    }
    else
        res.status(200).json({message:"congratulation!"});
    
});


app.get('/joke', (req, res)=>{
    var id = req.query.id;
    var rating = req.query.rating;

    if (id == undefined || rating == undefined){
        res.status(404).json({message:"check url"});
    }
    else
        res.status(200).json({message:"congratulation!"});
    
});


app.listen(3000, ()=>{console.log("Server has started!")})