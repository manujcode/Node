let express = require('express')
let router =  express.Router()
let routeEaxample = require('./router.js')

router.use('/yatri/profile',routeEaxample)


module.exports= router;