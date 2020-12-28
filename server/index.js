const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');

app.use(cors());
app.use(express.json());

// ROUTES
app.get("/boosters", async(req, res) => {
    try {
        const allBoosters = await pool.query("SELECT * FROM boosters");
        res.json(allBoosters.rows);
    }
    catch (err) {
        console.error(err.message)
    }
})

app.post("/boosters", async(req, res) => {
    try {
        console.log(req.body);
        const { boosterId, boosterName, description, imageSrc, imageCaption } = req.body;
        const newBooster = await pool.query(
            "INSERT INTO boosters(booster_id, booster_name, description, image_source, image_caption) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [boosterId, boosterName, description, imageSrc, imageCaption]
        );

        res.json(newBooster);
    }
    catch (err) {
        console.log(err.message);
    }
})

app.listen(5001, () => {
    console.log("Server starting on port 5001");
})