module.exports = (sequelize, DataTypes) =>{
    const ImagesDB = sequelize.define("images", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        imagesInfo: {
            type: DataTypes.STRING
        }
    });

    //associate to facts model 
    ImagesDB.associate = models => {
        ImagesDB.hasOne(models.facts)
    }


    return ImagesDB;
}