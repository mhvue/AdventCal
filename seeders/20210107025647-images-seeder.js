"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("images", [{
        imagesInfo: "./images/triceratops.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/Hesperonychus.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/Allosaurus.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/Brachiosaurus.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/skeleton-ceratosaurus.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/skeleton-triceratops.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/fossils-heterodontosauruss.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/Heterodontosaurus.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/Stego.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/Saltopus.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/Dreadnoughtus.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/Sauropods.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: "./images/dinosaur-footprint.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagesInfo: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete("People", null, {});
    */
  }
};
