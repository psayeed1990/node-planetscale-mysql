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

        dialect: "mysql",
        ssl: {
            rejectUnauthorized: false,
        },
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
        define: {
            timestamps: false,
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    }
);

app.get("/", async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send("Connection has been established successfully.");
    } catch (error) {
        console.log(error);
        res.send("Unable to connect to the databas");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
