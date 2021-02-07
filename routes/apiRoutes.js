// require my db 
const db = require("../models");
//require sequelize here 
const sequelize = require("sequelize");

module.exports = function(app){
//get that fact for the day to show 
    app.get("/api/fact/:id", function(req,res){
        //our id is going be our day number from front end 
        const dayNum = parseInt(req.params.id);
        //we are going to find the day by primary key in our table as our pk is same as our day number 
        db.facts.findByPk(dayNum,{
            include:[
                {model: db.links},
                {model: db.images},
                ]
        }).then(function(fact){
            res.json(fact);
        }).catch(function(error){
            console.log(error)
        });
    });


//add Likes to True 
    app.put("/api/likedFact/:id", function(req,res){
        const dayNum = parseInt(req.params.id);
         console.log("here" + dayNum)   
        db.facts.update(
            {
                likes:true
            },
            {
                where:{
                    id:req.params.id
            }
        }).then(function(dbLike){
                res.json(dbLike)
        }).catch(function(error){
                console.log(error)
        });
    });

// update Likes back to False
    app.put("/api/unlikedFact/:id", function(req,res){
        const dayNum = parseInt(req.params.id);
        console.log("hereAgain" + dayNum)   
        db.facts.update(
            {
                likes:false
            },
            {
                where:{
                    id:req.params.id
            }
        }).then(function(dbLike){
                res.json(dbLike)
        }).catch(function(error){
                console.log(error)
        });
    });

//get route here to display all likes 
    app.get("/api/getLikes", function(req, res){
//need to go to facts db and look for facts with the Likes column that is TRUE to show 
        db.facts.findAll({
            where: {
                likes: true
            }
        }).then(function(likes){
            console.log(likes)
            res.json(likes)
        }).catch(function(error){
            console.log(error)
        });
    });


//get like info from a specific fact
    app.get("/api/getFactLike/:id",function(req,res){
        const dayNum = parseInt(req.params.id);

        db.facts.findByPk(dayNum,
            {
            attributes: ["likes"]
        }).then(function(likeDb){
            console.log(likeDb)
            res.json(likeDb)
        }).catch(function(error){
            console.log(error)
        })
    });

}

