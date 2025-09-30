const  fs = require('fs')
const { encode } = require('querystring')
let file = 'product.json'


function load_data(){

  
let costumer = fs.readFileSync(file,{encode:'utf-8'})

return  JSON.parse(costumer)

} 

 function writeData(name ,price){
      
    console.log('we are starting with writeData() method....');
    var customers = load_data();  // array in which we are pulling the recrods from customer.json
    customers.push({
        "name": name,      // here we are pushing the inputs given by user into the exiting array
        "price": price
    });
   let t= fs.writeFileSync(file,JSON.stringify(customers));
    // t.close(1);
}


module.exports={
    load: load_data,
    writeCustomer: writeData
}
   