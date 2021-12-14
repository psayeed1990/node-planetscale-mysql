const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();

//require dotenv
require("dotenv").config();

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,

        dialect: "mysql",
    }
);

const connectPlanetScale = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

connectPlanetScale();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
