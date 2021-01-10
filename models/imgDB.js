module.exports = (sequelize, DataTypes) =>{
    const ImagesDB = sequelize.define("images", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        images: {
            type: DataTypes.STRING
        }
    });

    //associate to dinoLinks here
    ImagesDB.associate = models => {
        ImagesDB.hasOne(models.dinoFacts)
    }


    return ImagesDB;
}