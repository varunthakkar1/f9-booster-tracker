const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const camelcaseKeys = require('camelcase-keys')

app.use(cors())
app.use(express.json())

// ROUTES
app.get('/boosters', async (req, res) => {
  try {
    const parameters = req.query
    var query = 'SELECT * FROM boosters'
    parameters.name === `''` || parameters.name == undefined
      ? ''
      : (query = query + ` WHERE boosters.booster_name LIKE ${parameters.name}`)
    const allBoosters = await pool.query(query)
    res.json(camelcaseKeys(allBoosters.rows))
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/boosters/:id', async (req, res) => {
  try {
    const { id } = req.params
    const oneBooster = await pool.query(
      'SELECT * FROM boosters WHERE boosters.booster_id = $1',
      [id]
    )
    res.json(camelcaseKeys(oneBooster.rows))
  } catch (err) {
    console.error(err.message)
  }
})

app.post('/boosters', async (req, res) => {
  try {
    const { boosterName, description, imageSrc, imageCaption } = req.body
    const newBooster = await pool.query(
      'INSERT INTO boosters(booster_name, description, image_src, image_caption) VALUES ($1, $2, $3, $4) RETURNING *',
      [boosterName, description, imageSrc, imageCaption]
    )
    res.json(newBooster)
  } catch (err) {
    console.log(err.message)
  }
})

app.delete('/boosters/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteBooster = await pool.query(
      'DELETE FROM boosters WHERE boosters.booster_id = $1 RETURNING *',
      [id]
    )
    res.json('Booster deleted')
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5001, () => {
  console.log('Server starting on port 5001')
})
