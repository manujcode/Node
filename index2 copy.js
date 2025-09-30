
let fs = require('fs')

function writeProducts(data){

    fs.writeFileSync('backup_Product.json',data,{"mode":0o444,flag:'w'});

}


 function readProduct(){
      let data = fs.readFileSync('product.json','utf-8')
      writeProducts(data)

}

readProduct()