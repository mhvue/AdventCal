const path = require("path");

module.exports = function(app){
    //load the calendar
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../index.html"));
    });
}