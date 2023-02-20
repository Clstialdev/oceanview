const PROJECTS = {
  domi: {
    name: "Domi Online",
    description: `DOMI Online is an MMORPG currently in development which aims to build upon the rich heritage provided by the many successful MMORPG titles which have created a thriving market for more than two decades.

Domi Online offers players an expansive medieval metaverse filled with forests, caves, and deserts among other varied and secret-filled areas open to discovery, adventure, and ultimate domination.
      
Featuring gameplay that incentivizes a player’s commitment to developing in-game skills and to increasing in-game status through an intricate levelling system, in a world featuring premier graphics and design, Domi Online ushers in a new era for first-person POV MMORPGs. An active community of gamers is the engine that drives the engagement and sustainability of Domi’s play-to-earn model into new realms of gaming experience. Domi Online offers players an expansive medieval metaverse filled with forests, caves, and deserts among other varied and secret-filled areas open to discovery, adventure, and ultimate domination. Featuring gameplay that incentivizes a player’s commitment to developing in-game skills and to increasing in-game status through an intricate levelling system, in a world featuring premier graphics and design, Domi Online ushers in a new era for first-person POV MMORPGs. An active community of gamers is the engine that drives the engagement and sustainability of Domi’s play-to-earn model into new realms of gaming experience.

DOMI Online looks to cater to various different players who expect different experiences from their MMORPGs, whether that is players who want to fully engross themselves in the gameplay to optimise their character as efficiently as possible, or players looking for a more hands-off experience which can reward more idle gameplay.

Working alongside a world-wide team, we are collaborating with people with the entire range of skillsets, from environment and characters artists to market experts and voice artists, and even chart-topping rock stars!
`,
    thingsDone: [
      "Hiring a world class team with developers, artists and sound engineers from all over the world",
      "Building core systems such as combat, skilling, movement, networking",
      "Project management on Jira",
      "Creating and maintain Games Design documentation with Notion",
      "Battle Design and implementation designed to scale with the player",
    ],
    rightSide: "DOMI Online is currently in development and accepting players eager to try the game out. For more information about the DOMI Online project, including how to sign up and get involved in the game, follow the link below.   ",
    banner: "banner.webp",
    images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"],
    bgFrom: "#272511",
    bgTo: "#151207",
    webLink: "https://domionline.io",
    
  },

  runescape: {
    name: "Runescape",
    description: `During my time at Jagex I was tasked with porting the long established MMORPG RuneScape to Android and iOS. Due to the age of the game and the vast amount of content within, this was a huge challenge! My hard work and diligence soon paid off however, and I was granted the position of team lead to ensure the project would be realised to its utmost potential.`,
    thingsDone: [
      "Converting the existing desktop focused system to support small screens with intuitive designs",
      "Ensuring all content is functional, compliant and accessible",
      "Building brand new systems to replace legacy code that was not platform independent",
      "Championing deprecating legacy systems",
      "Implementing numerous performance improvements that benefit both desktop and mobile",
      "Communicating with the players during the open beta, taking feedback, and resolving any critical issues",
    ],
    video: "https://youtu.be/AoWEgWU2ecI",
    banner: "banner.webp",
    images: ["0.webp","1.webp", "2.webp", "3.webp"],
    bgFrom: "#111827",
    bgTo: "#070d15",
  },

  novablast: {
    name: "Nova Blast",
    appstoreLink: "https://apps.apple.com/us/app/nova-blast/id1453246894",
    description: `This work was undertaken as a support role for Foilhat Games. Our mission was to update a game which they had already released to the Apple App Store with new content, as well as resolving some existing bugs and preparing the game for release for Android devices.
  
Working with Foilhat games was a very welcome experience! The company was able to provide the existing project with new game design ideas fully fleshed out and ready for implementation. We were easily able to update the existing project with brand new functionality to match the new game design. We were also responsible for updating the level design tools to include the new game elements and allow their team to continue to make more amazing content.
          
Foilhat Games were extremely happy with the results, providing us with a 5 star review and a hope to collaborate on more projects in the future.`,
    source: "Foilhat Games Website",
    banner: "banner.jpg",
    images: ["0.webp", "1.webp", "2.webp", "3.webp"],
    bgFrom: "#000000",
    bgTo: "#101010",
  },
  
  pocketfactory: {
    name: "Pocket Factory",
    appstoreLink: "https://apps.apple.com/us/app/pocket-factory/id1487471914",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.mojo.pocketfactoryidle",
    description: `For this project we collaborated with Mojo Games, who were keen to work with us after viewing our impressive history on UpWork and learning of our experience creating and maintaining complex systems at Jagex.
Here we worked alongside the Mojo Games team from the ground up, assisting with both the design and development of core gameplay mechanics and systems that would help bring the game to life. We also took responsibility for integrating adverts and in-app purchases. We have received very positive reviews from Mojo Games and look forward to working with them again in the future.`,
    banner: "banner.jpg",
    images: ["0.webp", "1.webp", "2.webp", "3.webp"],
    bgFrom: "#112527",
    bgTo: "#071615",
  },
  
  nub: {
    name: "Nub",
    description: `I was tasked from Inferna Games to help remake Nub from the ground up in Unity. Nub was originally released for the discontinued Ouya Android game console. As it was originally built as a native Java app its would be very hard to port it to iOS, Android and Steam so it was decided to remake it.
  
      Inferna Games is an indie game developer and creator of Nub, a retro-style pixel art game. Join Nub's adventure to escape an unknown foe. Enter a world of tricky puzzles, menacing robots, and a quest to save the niblets.`,
    banner: "0.webp",
    video: "https://www.youtube.com/watch?v=wLgIt0RIrZk",
    images: ["0.webp", "1.webp", "2.webp"],
    bgFrom: "#000000",
    bgTo: "#101010",
  },
  
  stoneyvocabbuilder: {
    name: "Vocab Builder",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=org.learnkehkimin.vb2",
    description: `I was approached by The Language Conservatory charity to help build a brand-new language learning app to target Native American languages. They had an existing database of words with an API to pull all the information in and it was a desirable to keep this functionality in the new app.
  
We built 9 minigames to help learn and reinforced the words they learnt.
      
Please look at The Language Conservatory to see their extraordinary work in making sure languages don’t go extinct.`,
    source: "https://languageconservancy.org/",
    banner: "banner.jpg",
    images: ["0.webp", "1.webp", "2.webp", "3.webp"],
    bgFrom: "#10261b",
    bgTo: "#07160d",
  },
  
  wordfunworld: {
    name: "Word Fun World",
    appstoreLink: "https://apps.apple.com/app/id977951003",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.Cambridge.WordFunWorld2",
    description: `Word Fun World is a game designed for mobile devices with the aim of teaching young children English as a primary language. The game was designed to be used by both eager young learners taking initiative with their language learning as well as a learning aid which would be used alongside traditional teaching.
    
World Fun World was commissioned by Cambridge University Press. We worked closely with Educational and Technical specialists at the institution to ensure that the final product would be and appropriate and effective learning tool for the target audience whilst also adhering to the exceptionally high standards already set by other Cambridge University Press products.
      
Our role was to work with the client to design and develop various mini-games which would be appropriate for the target audience whilst also achieving the educational aims for the project. We worked in collaboration with a number of artists from initial design all the way through full development.
      
Utilising Unity for rapid prototyping and deployment to multiple platforms, we were able to realise the clients vision for the game in just a few short months. The game went on to be a great success for Cambridge Unity Press, who soon returned to the company requesting further updates and features to improve upon the game even further.`,
    banner: "banner.jpg",
    video: "https://www.youtube.com/watch?v=TSy0vGhX1pk&t",
    images: ["0.webp", "1.webp", "2.webp", "3.webp"],
    bgFrom: "#10261b",
    bgTo: "#07160d",
    rightSide: "The Word Fun World project is now complete and is available for download on both the App Store and the Play Store at the links below.",
    
  },
  
  navigo: {
    name: "Navigo",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.fishinabottle.navigo", //URL was not found
    description: `Navigo is an ambitious game for android tablets which aims to assist children learning English, German, Spanish or Greek as a first language. The game was designed to be used alongside traditional learning to help reinforce the teaching while encouraging children to go above and beyond with a compelling storyline and engaging game mechanics.

We worked in collaboration with more than a dozen educational and technical institutions across Europe. We were responsible for processing the information received from various universities across Europe and using it to Design and create various different mini-games which would help to teach children core principles in language learning.

This project required us to go above and beyond the usual call of game development, working in close collaboration with multiple sources to design and create compelling and effective learning games contained within an appealing world.

The game was focus tested with various different age and learning groups throughout development, which provided inciteful feedback and allowed us to refine the our game designs to meet the needs of the target audience.

Ultimately all of this dedication paid off as the game received an award from the Serious Games Society in the Digital Game Competition as well as receiving glowing reviews from the focus testers and the schools themselves.
    
    `,
    banner: "2.webp",
    images: ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp"],
    thingsDone: [
      "Collaborating with Universities across Europe to ensure the designed games were meeting the appropriate learning criteria",
      "Game design and development of 15 unique mini-games",
      "Development of overworld functionality, including a hub world, NPC interactions, character customisation, and rogue-like generation of mini-games",
      "Comprehensive data collection on player performance to dynamically determine the difficulty of the content being taught to the player",
      "The game went on to win an award from the Serious Games Society in the Digital Games Competition",
    ],
    rightSide: "The testing phase for Navigo has now completed and is under review for further expansion. More information about the project as a whole can be found at the google play store link below. ",
    bgFrom: "#272111",
    bgTo: "#161108",
  },
  
  timerunner: {
    name: "Time Runner",
    appstoreLink: "https://apps.apple.com/us/app/empires-rise/id1578743218",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.oceanview.timeruner",
    description: `Our third self-published game. This game was an experiment in level generation based on chunks. We wanted to see if the time to build the system was worth it instead of building curated levels by hand. We found that the time is worth it and the benefit only gets better as you scale up the number of levels that use it.
  
Also, we wanted to use rigid bodies and physics as its always fun to make games with these!`,
    banner: "banner.jpg",
    video: "https://www.youtube.com/watch?v=RAtxr5MHdLc&t",
    images: ["0.webp", "1.webp"],
    bgFrom: "#101c26",
    bgTo: "#071014",
  },
  
  empiresrise: {
    name: "Empires Rise",
    appstoreLink: "https://apps.apple.com/us/app/empires-rise/id1546243739",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.oceanview.empiresrise",
    description: `Our first self-published game! Working on this project was a very rewarding experience, from initial design, throughout development and even the marketing campaign and monetisation.
  
Here at Ocean View Games we are long time fans of the turn-based strategy game genre, and being able to take all we have learnt from the various games out there and put our own spin on it was simultaneously exciting and daunting!
      
This project has cemented a love for our own projects and we will be taking all we have learnt here into our next big venture!
      
      `,
    banner: "banner.webp",
    video: "https://www.youtube.com/watch?v=miJqxbvxkew",
    images: ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp", "5.webp"],
  },
  
  whatsthat: {
    name: "What's That",
    appstoreLink: "https://apps.apple.com/us/app/what-is-that/id1551655212",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.oceanview.whatsthat",
    description: `Our second foray into the realm of self-published games. This game has been designed with the hyper casual audience in mind, a mantra that was the immediate priority from the initial design phase.
  
Our aim with this project was to take what we had learnt about the hyper casual mobile game market whilst working in the games development industry and build upon it to further understand what the audience needs from this kind of game.
      
This project was very illuminating for us in many ways and we’re looking forward to taking what we have learnt into future hyper casual games.
      
      `,
    banner: "banner.jpg",
    video: "https://www.youtube.com/watch?v=wrxrivCJVnE",
    images: ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp"],
    bgFrom: "#101c26",
    bgTo: "#071014",
  },
};

export default PROJECTS;

export type ProjectData = {
  name: string;
  appstoreLink?: string;
  playstoreLink?: string;
  webLink?: string;
  description: string;
  source?: string;
  banner: string;
  video?: string;
  images: Array<string>;
  thingsDone?: Array<string>;
  bgFrom?: string;
  bgTo?: string;
  rightSide?: string;
};
