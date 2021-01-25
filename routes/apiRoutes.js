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
        // console.log("here" + dayNum)   
        db.facts.update(
            {
                likes:true
            },
            {
                where:{
                    id:req.params.id
            }
        }).then(function(dbLike){
                console.log(dbLike)
                res.json(dbLike)
        }).catch(function(error){
                console.log(error)
        });
    });
}

