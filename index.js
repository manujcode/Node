//This file is to be executed before writeFileSync.js
let fs = require('fs')
var obj = require('./writeFileSync')   //loading the user defined module / local module

var readLine = require('readline');  // this interface is used to read the data from the console

var r1 = readLine.createInterface({
    input : process.stdin,
    output: process.stdout
});

r1.question('Enter name', function(name){
    r1.question('Enter price', function(price){
        obj.writeCustomer(name,price)
    });
})
  
// function writeProducts(data){

//     fs.writeFileSync('backup_Product.json',data,{"mode":0o444,flag:'r'});

// }


//  function readProduct(){
//       let data = fs.readFileSync('product.json','utf-8')

// }




