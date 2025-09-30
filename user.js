let fs = require('fs')
function user1(){
       console.log("user 1 stated")
    let data = fs.readFileSync('backup_product.json','utf-8');
    console.log("==========")
    console.log(data)
    
    console.log("user 1 ended")
}

function user2(){
    console.log("user 2 stated")
    fs.readFile('backup_product.json','utf-8',(err,data)=>{
         console.log('testing')
        if(err){
            console.log("myError",err)
        }
        else{
            console.log(data)
        }
        
    });
    
    console.log("user 2 ended")

}

function user3(){
    console.log("user 3 stated")
    fs.readFile('backup_product.json','utf-8',(err,data)=>{
        if(err){
            console.log("myError",err)
        }
        else{
            console.log(data)
        }
        
    });
    
    console.log("user 3 ended")

}



user1();



user2()




user3();
  console.log("all user called")

fs.unlink('backup_Product.json',(err)=>{
    if(err){
        console.log("error is --->",err)
    }
    else{
        console.log("backup_product.json file is deleted successfully")
    }
})