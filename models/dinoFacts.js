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
        }
    });

    DinoFacts.associate = models =>{
        DinoFacts.belongsTo(models.dinoLinks)
    }

    return DinoFacts;
}