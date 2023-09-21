const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();
app.set('view engine', 'ejs');

const items = ["Buy Food","Make Food","Eat Food"]; // In JS u can make array constant and push into it but u cannot assign it to new value
let workItems = [];

app.use(bodyParser.urlencoded({extended :true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    
    let day = date.getDay();
    res.render("list",{listTitle: day,newListItems: items});   // You must have views folder and list.ejs in that folder
})

app.post("/",function(req,res){

    let item = req.body.newItem;

    if(req.body.list === "Work"){ // here list comes from the name of submit button
        workItems.push(item);
        res.redirect("/work");

    }    
    else{
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work",function(req,res){
    res.render("list",{listTitle :"Work List",newListItems:workItems})
})

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);

    res.redirect("/work");
})

app.listen(3000,function(){
    console.log("Port started running");
});