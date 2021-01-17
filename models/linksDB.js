//all the links for youtube vidoes, games..etc 
module.exports = (sequelize, DataTypes)=>{
    const LinksDB = sequelize.define("links",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: true
        },
        linksInfo: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    //associations to facts model
    LinksDB.associate = models =>{
        LinksDB.hasOne(models.facts,{foreignKey: "linkId"})
    }

    return LinksDB;
}


