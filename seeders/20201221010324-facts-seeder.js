'use strict';

module.exports = {
  //up is to put them into out db
  up: (queryInterface, Sequelize) => {
    //we are going to inset a lot of data to our db(so name of db, not table)
      return queryInterface.bulkInsert('dinoFacts', [{
        facts: "Dinosaurs ruled the Earth for over 160 million years <br> Watch to learn more!",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  
  },

  //down is to delete things out of our db 
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
