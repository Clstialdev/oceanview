const PROJECTS = {
  domi: {
    name: "Domi Online",
    description: `Currently David is the Lead Game Developer and Adam as a senior developer. Together we are building Domi Online

Domi Online offers players an expansive medieval metaverse filled with forests, caves, and deserts among other varied and secret-filled areas open to discovery, adventure, and ultimate domination.
    
Featuring gameplay that incentivizes a player’s commitment to developing in-game skills and to increasing in-game status through an intricate levelling system, in a world featuring premier graphics and design, Domi Online ushers in a new era for first-person POV MMORPGs. An active community of gamers is the engine that drives the engagement and sustainability of Domi’s play-to-earn model into new realms of gaming experience. Domi Online offers players an expansive medieval metaverse filled with forests, caves, and deserts among other varied and secret-filled areas open to discovery, adventure, and ultimate domination. Featuring gameplay that incentivizes a player’s commitment to developing in-game skills and to increasing in-game status through an intricate levelling system, in a world featuring premier graphics and design, Domi Online ushers in a new era for first-person POV MMORPGs. An active community of gamers is the engine that drives the engagement and sustainability of Domi’s play-to-earn model into new realms of gaming experience.`,
    thingsDone: [
      "Hiring a world class team with developers, artists and sound engineers from all over the world",
      "Building core systems such as combat, skilling, movement, networking",
      "Project management on Jira",
      "Documentation creation on Notion",
    ],
    banner: "banner.jpg",
    images: ["1.webp", "2.webp", "3.webp"],
  },

  runescape: {
    name: "Domi Online",
    description: `During my time at Jagex I was tasked with porting the long established MMORPG RuneScape to Android and iOS. Due to the age of the game and the vast amount of content within, this was a huge challenge! My hard work and diligence soon paid off however, and I was granted the position of team lead to ensure the project would be realised to its utmost potential.`,
    thingsDone: [
      "Converting the existing desktop focused system to support small screens with intuitive designs",
      "Ensuring all content is functional, compliant and accessible",
      "Building brand new systems to replace legacy code that was not platform independent",
      "Championing deprecating legacy systems",
      "Implementing numerous performance improvements that benefit both desktop and mobile",
      "Communicating with the players during the open beta, taking feedback, and resolving any critical issues",
    ],
    video: "https://www.youtube.com/1648afc1-2fbf-4338-837a-7a380ef494b4",
    banner: "banner.jpg",
    images: ["1.webp", "2.webp", "3.webp"],
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
  },
};

export default PROJECTS;

export type ProjectData = {
  name: string;
  appstoreLink?: string;
  description: string;
  source?: string;
  banner: string;
  video?: string;
  images: Array<string>;
  thingsDone?: Array<string>;
};
