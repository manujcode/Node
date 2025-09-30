let express = require('express')

let router = express.Router()


router.get('/home',(req,res)=>{
    console.log("test .......................")
          res.send("this is home page")
    }
)
router.get(
    '/login',(req,res)=>{
          res.send("this is login page")
    }
)

module.exports = router