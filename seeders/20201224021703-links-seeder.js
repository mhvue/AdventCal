'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('dinoLinks', [{
        links: "https://www.amnh.org/explore/ology/paleontology/ask-a-scientist-about-dinosaurs",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        links: "https://pbskids.org/dinosaurtrain/games/fossilfinder.html",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        links: "https://www.amnh.org/explore/ology/paleontology/dress-up-a-t.-rex",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        links: "https://pbskids.org/dinosaurtrain/games/roarinrelay.html",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        links: "https://youtu.be/G3gXWDYpLAE",
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        links: "https://youtu.be/UrousrAIfYc",
        createdAt: new Date(),
        updatedAt: new Date(),
       
      },
      {
        links: "https://youtu.be/a73zEfwFN-s",
        createdAt: new Date(),
        updatedAt: new Date(),
     
      },
      {
        links: "https://youtu.be/5Ier8c9WFzE",
        createdAt: new Date(),
        updatedAt: new Date(),
     
      }
    ]);
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
