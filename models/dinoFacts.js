module.exports = function(sequelize, DataTypes){
    const DinoFacts = sequelize.define("dinoFacts",{
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        facts: {
            text: DataTypes.STRING
        }
    });

    return DinoFacts;
}