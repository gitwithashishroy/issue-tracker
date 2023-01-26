const express = require('express') ;
const app = express() ; 
const dotenv = require('dotenv') ; 
dotenv.config() ;
const db = require('./config/mongoose') ; 
const bodyParser = require('body-parser');
const expressLayouts = require("express-ejs-layouts");

const port = process.env.PORT || 8000 ; 


// support parsing of application/json type post data
app.use(bodyParser.json());

app.use(express.urlencoded());

// extract style and script from subpages into layouts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//  use of static file
app.use(express.static("./assets"));

//use layouts and footer and header
app.use(expressLayouts);



// use view engine to view html file
app.set("view engine", "ejs");
app.set("views", "./views");

// control all route from route folder
app.use('/' , require('./routes')) ; 

app.listen(port , (err)=>{
    if(err){
        console.log(`Error in running the server :${port}`)
    }
    console.log(`server is running on the port : ${port}`); 
}) ; 

