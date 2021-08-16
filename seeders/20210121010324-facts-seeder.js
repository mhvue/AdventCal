'use strict';

module.exports = {
  //up is to put them into our db
  up: (queryInterface, Sequelize) => {
    //we are going to inset a lot of data to our db in the that table
      return queryInterface.bulkInsert("facts", [{
        factsInfo: "Dinosaurs ruled the Earth for over 160 million years <br> Watch to learn more!",
        imageId: 14,
        linkId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "A person who studies dinosaurs is known as a paleontologist. Click on link to learn from a paleontogist:",
        imageId: 14,
        linkId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        factsInfo: "Birds' ancestors are dinosaurs. Back then, some dinosuars have feathers",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "The name dinosaur means 'frighteningly big lizard",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Dinosaur footprints have been found all over the world!",
        imageId: 13,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Dreadnoughtus was the largest dinosaur.",
        imageId: 11,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        factsInfo: "Velociraptors is pronounce 'vell-os-eeraptor' Let's watch to learn more:",
        imageId: 14,
        linkId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        factsInfo: "Triceratops had nose horns they used for defence.",
        imageId: 1,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "T. Rex had quite a large brain for a dinosaur.",
        imageId: 14,
        linkId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Theropods means beast foot. It is a group of dinosaurs that has 3 toes for each leg and very short arms. For example: T-Rex",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Sauropods are a group of dinosaurs that have long necks, long tails, and they walked on all four feet.",
        imageId: 12,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Some dinosarus run as fast as 25 miles per minute! Want to play a game racing the dinosaurs?",
        imageId: 14,
        linkId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "First dinosaur bones discovered 1677 by Robert Plot -https://www.discovery.com/science/First-Dinosaur-Fossil-Name",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Dinosaurs extinct about 65 million years ago -https://www.kids-dinosaurs.com/dinosaur-extinction.html",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "The smallest meat eating dinosaurs are Hesperonychus.",
        imageId: 2,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Allosaurus existed before T.Rex. It's also very big dinosaurs that many other dinosaurs were scared of. No dinsoaurs hunted it...it's like a cousin to the T.Rex",
        imageId: 3,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Brachiosaurus name means 'arm-reptiles. Stay tune for tomorrow to learn more about these guys!",
        imageId: 4,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Let's learn more about the Brachiosaurus! (click to yesterday's date for the picture)",
        imageId: 14,
        linkId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Bone of a Ceratosaurus. Most of the time, they ate fish and crocodiles. Makes sense as they were good swimmers!",
        imageId: 5,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Bone of a Triceratops. They have a total of 985 bones!",
        imageId: 6,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Joke: What did the dinosaur say when the volacano exploded?..... Answer: Have a Lava-ly day!",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "This is a Heterodontonsaurus. The name means different tooth lizard.",
        imageId: 8,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Fossils are remains of ancient animals. It helps us learn about them. Let's play a fossil game!",
        imageId: 14,
        linkId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Here is the Heterodontonsaurus fossil",
        imageId: 7,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Mery Christmas!!<br> Did dinosaurs live in the cold too? yes! there are some bones found in the Arctic.",
        imageId: 14,
        linkId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "The smallest dinosuar is Lesothosaurus, which is the size of big chickens. -https://www.scholastic.com/teachers/articles/teaching-content/dinosaurs-smallest-largest/",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Guess how tall T. Rex was? <br> He was 12 feet tall. -https://www.scholastic.com/teachers/articles/teaching-content/dinosaurs-smallest-largest/",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Did dinosaur lay eggs?Yes they did! Dinosaurs lay about 3-5 eggs. Sometime more.",
        imageId: 14,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "The Stegosaurus had a brain the size of a walnut and is considered a dumb dinosaur.",
        imageId: 9,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "The oldest dinosaur is Saltopus. It lived for 245 million years ago.",
        imageId: 10,
        linkId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        factsInfo: "Need one more dinofact.",
        imageId: 14,
        linkId: 9,
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
