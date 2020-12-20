//all the images  
module.exports = function(sequelize, DataTypes){
    const DinoImg = sequelize.define("dinoImg",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        images: {
            type: DataTypes.STRING
        }
    });

    return DinoImg;
}