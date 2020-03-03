const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const bcrypt = require('bcryptjs')
const { check, validationResult} = require('express-validator')
//  @ route Post api/user


router.post('/',
[
  check('name', 'name is required').trim().not().isEmpty(),
  check('email', 'Please Enter a Email' ).isEmail(),
  check('password', 'Please Enter a password with 6 charcters').isLength({min: 6 })
]
,async(req, res ) =>{
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()})
  }

   const {name, email, password} = req.body

   try {
     let user = await User.findOne({ email})

     if(user) {
       return res.status(400).json({ msg: 'User Already Exisit'})
     }

     user = new User({
       name, 
       email, 
       password
     })

     const salt = await bcrypt.genSalt(10)

     user.password = await bcrypt.hash(password, salt)

    

     await user.save();
     res.send('user saved')
   } catch (error) {
     console.log(error.message)
     res.status(500).send("Server Error")
     
   }
})

module.exports = router 