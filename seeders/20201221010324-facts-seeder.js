'use strict';

module.exports = {
  //up is to put them into out db
  up: (queryInterface, Sequelize) => {
    //we are going to inset a lot of data to our db in the that table
      return queryInterface.bulkInsert('dinoFacts', [{
        facts: "Dinosaurs ruled the Earth for over 160 million years <br> Watch to learn more!",
       // dinoLinkId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "A person who studies dinosaurs is known as a paleontologist. Click on link to learn from a paleontogist:",
       // dinoLinkId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        facts: "Birds' ancestors are dinosaurs. Back then, some dinosuars have feathers",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "The name dinosaur means 'frighteningly big lizard",
      //  dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Dinosaur footprints have been found all over the world!",
       // dinoLinkId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Dreadnoughtus was the largest dinosaur.",
      //  dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        facts: "Velociraptors is pronounce 'vell-os-eeraptor' Let's watch to learn more:",
       // dinoLinkId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        facts: "Triceratops had nose horns they used for defence.",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "T. Rex had quite a large brain for a dinosaur.",
        //dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "That help T.Rex see and smell-it may have even had telescopic vision. Want to color a T-Red?",
       // dinoLinkId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Sauropods are a group of dinosaurs that have long necks, long tails, and they walked on all four feet.",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Some dinosarus run as fast as 25 miles per minute! Want to play a game racing the dinosaurs?",
       // dinoLinkId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "First dinosaur bones discovered 1677 by Robert Plot -https://www.discovery.com/science/First-Dinosaur-Fossil-Name",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Dinosaurs extinct about 65 million years ago -https://www.kids-dinosaurs.com/dinosaur-extinction.html",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "The smallest meat eating dinosaurs are Hesperonychus.",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Allosaurus existed before T.Rex. It's also very big dinosaurs that many other dinosaurs were scared of. No dinsoaurs hunted it...it's like a cousin to the T.Rex",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Brachiosaurus name means 'arm-reptiles. Stay tune for tomorrow to learn more about these guys!",
        //dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Let's learn more about the Brachiosaurus! (click to yesterday's date for the picture)",
       // dinoLinkId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Bone of a Ceratosaurus. Most of the time, they ate fish and crocodiles. Makes sense as they were good swimmers!",
      //  dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Bone of a Triceratops. They have a total of 985 bones!",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Joke: What did the dinosaur say when the volacano exploded?..... Answer: Have a Lava-ly day!",
        //dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "This is a Heterodontonsaurus. The name means different tooth lizard.",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Fossils are remains of ancient animals. It helps us learn about them. Let's play a fossil game!",
        //dinoLinkId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Here is the Heterodontonsaurus fossil",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Mery Christmas!!<br> Did dinosaurs live in the cold too? yes! there are some bones found in the Arctic.",
       // dinoLinkId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "The smallest dinosuar is Lesothosaurus, which is the size of big chickens. -https://www.scholastic.com/teachers/articles/teaching-content/dinosaurs-smallest-largest/",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Guess how tall T. Rex was? <br> He was 12 feet tall. -https://www.scholastic.com/teachers/articles/teaching-content/dinosaurs-smallest-largest/",
       // dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "Did dinosaur lay eggs?Yes they did! Dinosaurs lay about 3-5 eggs. Sometime more.",
        //dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "The Stegosaurus had a brain the size of a walnut and is considered a dumb dinosaur.",
        //dinoLinkId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        facts: "The oldest dinosaur is Saltopus. It lived for 245 million years ago.",
        //dinoLinkId: null,
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
