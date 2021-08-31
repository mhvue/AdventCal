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
        //we are going to include our links and images 
        db.facts.findByPk(dayNum,{
            include:[
                {
                    model: db.links
                },
                {
                    model: db.images
                },
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
                    id:dayNum
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
                    id:dayNum
            }
        }).then(function(dbLike){
                res.json(dbLike)
        }).catch(function(error){
                console.log(error)
        });
    });

//get route here to display all likes, including the assoicated models. 
    app.get("/api/getLikes", function(req, res){
        db.facts.findAll({
            where: {
                likes: true
            },
            include:[
            {
                model: db.links
            },
            {
                model: db.images
            }
        ]
    }).then(function(likes){
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
            res.json(likeDb)
        }).catch(function(error){
          console.log(error)
        })
    });


// //change all likes from T to F ...still thinking about this one
    app.put("/api/removeAllLikes", function(req, res) {
        //console.log(req)
    //     db.facts.update({
    //         likes: false
    //     }, {
    //         where: {
    //             likes: true
    //         }
    //     }).then(function(db){
    //         console.log(db)
    //     }).catch(function(error){
    //         console.log(error)
    //     })

    // })
    db.facts.findAll({
        where: {
            likes: true
        },
}).then(function(likes){
    console.log(likes)
        res.json(likes)
    }).catch(function(error){
        console.log(error)
    });
 });

}
