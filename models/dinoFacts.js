module.exports = function(sequelize, DataTypes){
    const DinoFacts = sequelize.define("dinoFacts",{
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        facts: {
            type: DataTypes.STRING
        }
    });

    return DinoFacts;
}