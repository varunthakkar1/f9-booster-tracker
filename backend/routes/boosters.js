const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('../database/db')
const camelcaseKeys = require('camelcase-keys')

app.use(cors())
app.use(express.json())

// GET ROUTES
// get all
app.get('/', async (req, res) => {
  try {
    var query = 'SELECT * FROM boosters'
    const allBoosters = await pool.query(query)
    res.json(camelcaseKeys(allBoosters.rows))
  } catch (err) {
    console.error(err.message)
  }
})

// get one
app.get('/:id', async (req, res) => {
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

// get one by name
app.get('/find/:name', async (req, res) => {
  try {
    const { name } = req.params
    const allBoosters = await pool.query(
      `SELECT * FROM boosters WHERE boosters.booster_name LIKE $1`,
      [name]
    )
    res.json(camelcaseKeys(allBoosters.rows))
  } catch (err) {
    console.error(err.message)
  }
})

// POST ROUTE
app.post('/', async (req, res) => {
  try {
    const { boosterName, description, imageSrc, imageCaption } = req.body
    const newBooster = await pool.query(
      'INSERT INTO boosters(booster_name, description, image_src, image_caption) VALUES ($1, $2, $3, $4) RETURNING *',
      [boosterName, description, imageSrc, imageCaption]
    )
    res.json(newBooster)
  } catch (err) {
    console.error(err.message)
  }
})

// DELETE ROUTE
app.delete('/:id', async (req, res) => {
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

// PUT ROUTE
app.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { boosterName, description, imageSrc, imageCaption } = req.body
    const updatedBooster = await pool.query(
      'UPDATE boosters SET booster_name = $1, description = $2, image_src = $3, image_caption = $4 WHERE booster_id = $5 RETURNING *',
      [boosterName, description, imageSrc, imageCaption, id]
    )
    res.json(camelcaseKeys(updatedBooster))
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = app
