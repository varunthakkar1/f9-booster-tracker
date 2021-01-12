# Falcon 9 Booster Tracker

This is a responsive web application built using PostgreSQL, Express, React and Node to log the boosters and missions of SpaceX's Falcon 9. This application allows users to search for, add, edit, and delete boosters and missions.

## Creating Database

First, the database must be created in PostgreSQL. Navigate to `/backend/database/db.sql` and use the SQL commands to create the database and tables. You can also manually create the database and tables with PgAdmin.

Next, create a `.env` file in the root directory with the following environment variables:

-PG_USER=your_postgres_username
-PG_PASSWORD=your_postgres_password
-PG_PORT=postgres_port
-PG_DATABASE_NAME=database_name

Once you have created the database and defined your environment variables, your backend will be able to make requests.

## Running Backend

Navigate to `/backend` and run `npm install` to install all of the dependencies. Then, run `node index` to start the server.

## Running Frontend

Navigate to `/frontend` and run `npm install` to install all of the dependencies. Then, run `npm start` to start the server.

## Screenshots

Please take a look at screenshots of the frontend in the `/screenshots` directory. There are several screenshots of both mobile and fullscreen views.

## Image Credits

Thank you to the [SpaceX Flickr](https://www.flickr.com/photos/spacex) and [Elonx.net](elonx.net) for the booster photos and mission patches.