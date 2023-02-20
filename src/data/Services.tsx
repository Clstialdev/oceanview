const SERVICES = {
  gamedesign: {
    name: "Game Design Consulting",
    description: `One of the most important aspects of a successful game is a coherent and compelling game design. As a video game agency we provide consultancy and iteration for game design as standard so you can feel confident that the end result will be one that it sure to attract your desired audience.

We work closely with our collaborators to ensure their vision aligns with their audience expectations and project scope. We give guidance where we see fit and help you develop a prototype of your game, through rapid development in the Unity engine.
    
As a video game agency we have worked with a diverse set of projects and this experience gives us an edge in the market.`,
    offering: [
      "Consultancy for effective game design",
      "Iterative game design and development to find the perfect implementation",
      "Audience focused design to find the most compelling product for your audience",
      "Experience with a wide range of audiences, from pre-school education to hard-core gaming",
    ],
    banner: "banner.webp",
    // images: ["1.webp", "2.webp", "3.webp"],
    bgFrom: "#272511",
    bgTo: "#151207",
  },
  mobile: {
    name: "Mobile Development",
    description: `Developing for mobile devices comes with many unique challenges when compared to PC game development, from creating unique user interfaces to optimising for a wide range of devices with different capabilities. As experienced Unity developers we can leverage the tools available to create an appealing final product without impacting the end user experience.

Unity powers over 70% of the top mobile games and our team specializes and is certified in Unity you can rely on our experience in bringing your ideas to life.`,
    offering: [
      "Development for both iOS and Android",
      "Utilisation of optimised assets for improved performance.",
      "A focus on optimisation techniques for the best performance",
      "Implementation of intuitive UI for the best mobile experience",
    ],
    banner: "banner.webp",
    // images: ["1.webp", "2.webp", "3.webp"],
    // bgFrom: "#272511",
    // bgTo: "#151207",
  },
  monetization: {
    name: "Game Monetization",
    description: `You have a vision of a great game, everything is set, game launches and you have to pay the bills. Video game monetization is an important factor in all games, and this can either make or break your game. With Ocean View Games we've got 10 years experience with game design and development, we have seen and heard it all. You can rely on our experience and guidance.

There are many approaches to monetising a game, from micro-transactions and advertising revenue to fully bundled purchasable products, and even NFTs! Within our years as Unity developers, we have worked with all of these approaches, and have worked with our collaborators to ensure that the chosen approach to monetisation is the best for their product and their audience.`,
    offering: [
      "Experience with ad integration and mediation for all mobile platforms",
      "Experience with the Unity in-built in-app purchasing service",
      "Experience using multiple advert SDKs to maximise revenue",
      "Integration with back-end systems for integration of NFTs",
      "Deployment to Apple, Android and Steam store fronts",
    ],
    banner: "banner.webp",
    // images: ["1.webp", "2.webp", "3.webp"],
    bgFrom: "#10261b",
    bgTo: "#07160d",
  },
  gamedevelopment: {
    name: "Unity Game Development",
    description: `A good video game agency needs to have video game developers with a specialty, and ours is Unity! We work closely with our collaborators to realise the vision they have for their projects and present the final product in an optimised and polished format using the wide range of tools available through Unity.

Another benefit of Unity is a video game can be developed rapidly based on initial ideas. With multiplatform support out of the box.
    
To prove our Unity development expertise we have taken the Unity Certification program and passed as expert programmers`,
    offering: [
      "Video game development for PC and mobile",
      "Certified Unity Developers",
      "Integration with back-end systems",
      "Integrated animation systems",
      "Rapid development of initial ideas to determine the winning formula",
    ],
    banner: "banner.webp",
    // images: ["1.webp", "2.webp", "3.webp"],
    bgFrom: "#111827",
    bgTo: "#070d15",
  },
};

export default SERVICES;

export type ServiceData = {
  name: string;
  description: string;
  banner: string;
  video?: string;
  images?: Array<string>;
  offering?: Array<string>;
  bgFrom?: string;
  bgTo?: string;
};
