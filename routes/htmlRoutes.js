const path = require("path");

module.exports = (app) => {
    //load the calendar
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
}