//as of 1/3/2021: want to change this it is a template for facts table 

module.exports = (sequelize, DataTypes)=> {
    const DinoFacts = sequelize.define("dinoFacts",{
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: true
        },
        facts: {
            type: DataTypes.STRING
        },
        dinoLinkId: {
            //fk in dinoLinks
            type: DataTypes.INTEGER,
            allowNull: true
        },
        //incoporate pk as as the fk for images here 
    });

    DinoFacts.associate = models =>{
        DinoFacts.belongsTo(models.dinoLinks)
    }

    return DinoFacts;
}