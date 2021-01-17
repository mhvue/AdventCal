
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
        }
    });

    //associations to links and images model
    FactsDB.associate = models =>{
        FactsDB.belongsTo(models.links)
    
        FactsDB.belongsTo(models.images)
    }

    return FactsDB;
}