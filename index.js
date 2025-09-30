var express = require('express')
var app = express();
const morgan = require("morgan");
const {createWriteStream} = require("fs");
let {join} = require('path')
const logFile = join(__dirname, "blogchefNew.log");   // create the log file in the current project directory

app.set('view engine','pug')
app.set('views', './views')
 
 
/*--------------Morgan module ------------------*/
app.use(morgan(":method - :url - :date - :response-time ms"));  // morgan template
app.use(
  morgan(":method -:url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
//---------------- end ------------------------//
// const products = ['Watch', 'Oven', 'Microwave', 'Phone', 'tablet', 'Laptop', 'pen drive']
// const clothing = ['Jeans', 'Tshirts', 'Coats', 'Jackets', 'caps', 'mufler']

app.get('/index', (req,res)=>{
  res.render('index')
})

app.get('/welcome', (req,res)=>{
    res.render('welcome')
  })

app.get('/register', (req,res)=>{
    res.render('register')
  })

app.listen(8080, ()=>{
    console.log(' The server has started on port no 8080..')
})


// app.listen(3000,()=>{
//     console.log("server started success")
// })













// ==================

//   Doctype
//   html
//      head
//         title Exploring the Pug template
//      body
//         h1#myHeading This is a pug template
//         p.firstParagraph I love this template!!!