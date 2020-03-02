const express = require('express')
const app = express()
const mongoose = require('mongoose')





app.get('/', (req, res) => res.json({ msg : "Sport API"}))


app.use('/api/user', require('./routes/user'))
app.use('/api/contact', require('./routes/contact'))
app.use('/api/auth', require('./routes/auth'))



app.listen(5000, () => console.log("server started "))