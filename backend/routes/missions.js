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
    var query = 'SELECT * FROM missions'
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
      'SELECT * FROM missions WHERE mission_id = $1',
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
    var query = `SELECT * FROM missions WHERE mission_name LIKE $1`
    const allBoosters = await pool.query(query, [name])
    res.json(camelcaseKeys(allBoosters.rows))
  } catch (err) {
    console.error(err.message)
  }
})

// get all by booster id
app.get('/findbybooster/:id', async (req, res) => {
  try {
    const { id } = req.params
    var query = 'SELECT * FROM missions WHERE booster_id = $1'
    const allMissions = await pool.query(query, [id])
    res.json(camelcaseKeys(allMissions.rows))
  } catch (err) {
    console.error(err.message)
  }
})

// POST ROUTE
app.post('/', async (req, res) => {
  try {
    const {
      missionName,
      launchDate,
      missionStatus,
      landingStatus,
      missionPatchSrc,
      boosterId,
    } = req.body
    const newBooster = await pool.query(
      'INSERT INTO missions(mission_name, launch_date, mission_status, landing_status, mission_patch_src, booster_id)' +
        ' VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [
        missionName,
        launchDate,
        missionStatus,
        landingStatus,
        missionPatchSrc,
        boosterId,
      ]
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
      'DELETE FROM missions WHERE mission_id = $1 RETURNING *',
      [id]
    )
    res.json('Mission deleted')
  } catch (err) {
    console.error(err.message)
  }
})

// PUT ROUTE
app.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const {
      missionName,
      launchDate,
      missionStatus,
      landingStatus,
      missionPatchSrc,
    } = req.body
    const updatedBooster = await pool.query(
      'UPDATE missions SET mission_name = $1, launch_date = $2, mission_status = $3, landing_status = $4, mission_patch_src = $5 WHERE mission_id = $6 RETURNING *',
      [
        missionName,
        launchDate,
        missionStatus,
        landingStatus,
        missionPatchSrc,
        id,
      ]
    )
    res.json(camelcaseKeys(updatedBooster))
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = app
