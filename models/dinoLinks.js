//all the links for youtube vidoes, games..etc 

//as of 1/3/2021: want to change this it is a template for links table 
module.exports = (sequelize, DataTypes)=>{
    const DinoLinks = sequelize.define("dinoLinks",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: true
        },
        links: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    DinoLinks.associate = models =>{
        DinoLinks.hasMany(models.dinoFacts)
    }

    return DinoLinks;
}


