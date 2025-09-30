let express = require('express')
let router = express.Router()


router.get(
    '/stud/:username',(req,res)=>{
        console.log("i am in")
        let userName = req.params.username;
        
        if(userName==='danil'){
            res.send('user name is danil')
        }
        else{
             res.send('user.name is not danil')
        }
    }
)

router.post('/prof/:username',(req,res)=>{
    let username = req.params.username;
    if(username){
        res.send(`username is ${username}`)
    }
    else{
        res.send("user name is not present")
    }
})

router.post(
    '/emp',(req,res)=>{
        res.send("Hey you are new here")
    }
)

module.exports=router