const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')
const { check, validationResult} = require('express-validator')

//  @ route Get api/auth
//  Gett Logged in  user 
// Private 
router.get('/' ,auth, async(req, res ) =>{
 try {
   const user = await User.findById(req.user.id).select('-password');
   res.json(user);
 } catch (err) {
   console.error(err.message);
   res.status(500).send('Server Error')
 }
})
//  @ route Pose api/auth
//  Get Token 
// Public
router.post('/', [
  check('email', 'Please check you Email').isEmail(),
  check('password' , 'Password is required').exists()
] ,async(req, res ) =>{
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()})
  }
  const { email , password} = req.body

  try {
    let user = await User.findOne({email})

    if(!user) {
      return res.status(400).json({ msg: 'Invalid Credntials'})
    }

    const isMatch = await bcrypt.compare(password, user.password) 

    if(!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credntials' })
    }
    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get('jwtSecert'), {
      expiresIn: 36000
    }, (err, token) => {
      if(err) throw err;
      res.json({ token})
    })
  } catch(err) {
      console.error(err.message);
      res.status(500).send('Server Error')
  }

})

module.exports = router 