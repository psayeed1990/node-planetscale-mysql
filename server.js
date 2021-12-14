const Sequelize = require("sequelize");
const express = require("express");
const fs = require("fs");
const app = express();

//require dotenv
require("dotenv").config();

const mysql = require("mysql");
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USERNAME,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         dialect: "mysql",
//         // ssl: {
//         //     ca: fs.readFileSync("/etc/ssl/certs/ca-certificates.crt"),
//         // },
//         dialectOptions: {
//             ssl: {
//                 rejectUnauthorized: false,
//             },
//         },
//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000,
//         },
//     }
// );

app.get("/", async (req, res) => {
    // try {
    //     await sequelize.authenticate();
    //     res.send("Connection has been established successfully.");
    // } catch (error) {
    //     console.log(error);
    //     res.send("Unable to connect to the databas");
    connection.query(
        "SELECT 1 + 1 AS solution",
        function (error, results, fields) {
            if (error) throw error;
            console.log("The solution is: ", results[0].solution);
        }
    );
    res.send("connected");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
