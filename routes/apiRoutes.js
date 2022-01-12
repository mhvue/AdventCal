// require my db 
const db = require("../models");
//require sequelize here 
const sequelize = require("sequelize");

module.exports = (app) => {
//get that fact for the day to show 
    app.get("/api/fact/:id", (req,res) => {
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
        }).then((fact) => {
            res.json(fact);
        }).catch((error) => {
            console.log(error)
        });
    });


//add Likes to True 
    app.put("/api/likedFact/:id", (req,res) => {
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
        }).then((dbLike) => {
                res.json(dbLike)
        }).catch((error) => 
        {
                console.log(error)
        });
    });

// update Likes back to False
    app.put("/api/unlikedFact/:id", (req,res) => {
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
        }).then((dbLike) => {
                res.json(dbLike)
        }).catch((error) => {
                console.log(error)
        });
});

//get route here to display all likes, including the assoicated models. 
    app.get("/api/getLikes", (req, res) => {
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
    }).then((likes) => {
            res.json(likes)
        }).catch((error) => {
            console.log(error)
        });
    });


//get like info from a specific fact
    app.get("/api/getFactLike/:id",(req,res) => {
        const dayNum = parseInt(req.params.id);

        db.facts.findByPk(dayNum,
            {
             attributes: ["likes"]
        }).then((likeDb) => {
            res.json(likeDb)
        }).catch((error) => {
          console.log(error)
        })
    });


// remove from Likes - change likes back to false 
    app.put("/api/removeLikes/:id", (req, res) => {
        const dayNum = parseInt(req.params.id)
        console.log(dayNum)
        //console.log(req)
        db.facts.update(
            {
                likes:false
            },
            {
                where:{
                    id:dayNum
            }
        }).then((dbLike) => {
                res.json(dbLike)
        }).catch((error) => {
                console.log(error)
        });
})


}
