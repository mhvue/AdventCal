require("dotenv").config();
const express = require("express");
//initialize express 
const app = express();
//connect to db here
const db = require("./models")

//connect to our port 
const port = process.env.PORT || 3000
//middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.json());
app.use(express.static("./public"));

//routes here
//api route here
require("./routes/apiRoutes")(app)
//html here
require("./routes/htmlRoutes")(app); 

var syncOptions = { force: false};

if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(port, function() {
        console.log(
            `==> 🌎  Listening on ${port}'. Visit http://localhost:${port} in your browser.`
        );
    });
});

module.exports = app;