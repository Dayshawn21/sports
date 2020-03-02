const express = require('express')
const router = express.Router()

//  @ route Get api/auth
//  Gett Logged in  user 
// Private 
router.get('/' ,(req, res ) =>{
  res.send('Get logged in user ')
})
//  @ route Pose api/auth
//  Get Token 
// Public
router.post('/' ,(req, res ) =>{
  res.send('Loggin in User')
})

module.exports = router 