CREATE DATABASE booster_tracker;

CREATE TABLE boosters(
    booster_id SERIAL PRIMARY KEY,
    booster_name NOT NULL VARCHAR(10),
    description NOT NULL VARCHAR(300),
    image_source NOT NULL VARCHAR(100),
    image_caption VARCHAR(50)
)

CREATE TABLE missions(
    mission_id SERIAL PRIMARY KEY,
    mission_name NOT NULL VARCHAR(40),
    launch_date NOT NULL VARCHAR(40),
    landing_status NOT NULL VARCHAR(40),
    mission_status NOT NULL VARCHAR(40),
    booster_id NOT NULL INTEGER
)