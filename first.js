let express = require('express')

let app = express()

app.use('/cartify',require('./cartify'))
app.use('/user' ,require('./users'))
// app.get


app.listen(3000,()=>{
console.log("server runing successfully")
})