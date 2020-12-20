//all the links for youtube vidoes, games..etc 
module.exports = function(sequelize, DataTypes){
    const DinoLinks = sequelize.define("dinoLinks",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        links: {
            type: DataTypes.STRING
        }
    });

    return DinoLinks;
}