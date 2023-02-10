const PROJECTS = {
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
  source: string;
  banner: string;
  images: Array<string>;
};
