const express = require('express')
const router = express.Router()

//  @ route Get api/contact
//  Get all users contact
// Private 
router.get('/' ,(req, res ) =>{
  res.send('Get all contact ')
})


module.exports = router 