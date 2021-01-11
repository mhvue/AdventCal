//as of 1/3/2021: want to change this it is a template for facts table 

module.exports = (sequelize, DataTypes)=> {
    const FactsDB = sequelize.define("facts",{
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: true
        },
        factsInfo: {
            type: DataTypes.STRING
        },
        // linkId: {
        //     //fk in Links
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }
        //incoporate pk as as the fk for images here 
    });

    //associations 
    FactsDB.associate = models =>{
        FactsDB.belongsTo(models.links)
    }
    FactsDB.associate = models => {
        FactsDB.belongsTo(models.images)
    }

    return FactsDB;
}