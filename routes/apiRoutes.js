//going to contain my GET for facts
// require my db 
const db = require("../models");
//require sequelize here 
const sequelize = require("sequelize");

module.exports = function(app){
    //get one at time per day click
    app.get("/api/fact/:id", function(req,res){
        const dayNum = parseInt(req.params.id);
       // console.log(dayNum)
        //find by pk as pk will rep the day number
        // db.facts.findByPk(dayNum).then(function(fact){
        //     console.log(fact)
        //     res.json(fact);
        // });

        //testing out below
        db.facts.findByPk(dayNum,{
            include:[
                {model: db.links},
                {model: db.images}
                ]
        }).then(function(fact){
            console.log(fact)
            res.json(fact);
        }).catch(function(error){
            console.log(error)
        });
    });
}

//add a Like, comment option (via post)