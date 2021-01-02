const express = require('express')
const app = express()
const boosters = require('./routes/boosters')

app.use('/boosters', boosters)

app.listen(5001, () => {
  console.log('Server starting on port 5001')
})

module.exports = app
