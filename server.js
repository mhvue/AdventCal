require("dotenv").config();
const express = require("express");
//initialize express 
const app = express();
//connect to db here
// const db = require("./models")

var bodyParser = require("body-parser");
//connect to our port 
const port = process.env.PORT || 3000
//middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//routes here
  

app.listen(port, function() {
    console.log(
        `==> 🌎  Listening on ${port}'. Visit http://localhost:${port} in your browser.`,
    );
});
// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//     app.listen(PORT, function() {
//         console.log(
//             `==> 🌎  Listening on ${port}'. Visit http://localhost:${port} in your browser.`,
//             PORT,
//             PORT
//         );
//     });
// });

module.exports = app;