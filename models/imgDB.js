module.exports = (sequelize, DataTypes) =>{
    const ImagesDB = sequelize.define("images", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        images: {
            type: DataTypes.BLOB
        }
    });

    //associate to dinoFacts  here
    //ImagesDB.associate = models => {
        //ImagesDB.hasMany(models.dinoFacts)
    //}

    return ImagesDB;
}