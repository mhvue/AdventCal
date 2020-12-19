//all the images  
module.exports = function(sequelize, DataTypes){
    const DinoImg = sequelize.define("dinoImg",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        images: {
            text: DataTypes.STRING
        }
    });

    return DinoImg;
}