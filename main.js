let express = require('express' )

let app = express();

let yatriEx = require('./yatri.js')

app.use('/student',yatriEx)

app.use('/professor',yatriEx)

app.use('/employee',yatriEx)


   


app.listen(3000,()=>{
    console.log("server connected sss")

})
