// require my db 
const db = require("../models");
//require sequelize here 
const sequelize = require("sequelize");

module.exports = function(app){
    
    app.get("/api/fact/:id", function(req,res){
        //our id is going be our day number from front end 
        const dayNum = parseInt(req.params.id);

        //we are going to find the day by primary key in our table as our pk is samea as our day number 
        db.facts.findByPk(dayNum,{
            include:[
                {model: db.links},
                {model: db.images}
                ]
        }).then(function(fact){
            res.json(fact);
        }).catch(function(error){
            console.log(error)
        });
    });

//add a Like via PUT
    app.put("/api/likedFact/:id", function(req,res){
        const dayNum = parseInt(req.params.id);
        console.log("here" + dayNum)    //success! got req.params.id working 

        //upate via sequelize methods 
    })
}

