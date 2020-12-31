//all the links for youtube vidoes, games..etc 
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


//want to use the pk as the fk for the dinoFacts table