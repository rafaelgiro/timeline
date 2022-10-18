const spotlight: TimelineEvent = {
  backgroundCategory: "release",
  borderCategory: "champions",
  description:
    "Life is in the struggle, not the victory. Fight by instinct alone with Udyr, the Spirit Walker.",
  endDate: new Date("2022-09-20T00:00:00.000"),
  startDate: new Date("2022-09-10T00:00:00.000"),
  image: {
    url: "https://assets.5pots.com/file/cincopots/timeline/udyr-trailer.jpg",
    alt: "Udyr model from upfront with his eyes glowing",
  },
  name: "Gameplay trailer",
  url: "https://www.youtube.com/watch?v=kfyDoF658HA",
};

const skins: TimelineEvent = {
  backgroundCategory: "release",
  borderCategory: "skins",
  description: "Spirit Guard Udyr takes a new form on the rift!",
  endDate: new Date("2022-09-20T00:00:00.000"),
  startDate: new Date("2022-09-10T00:00:00.000"),
  image: {
    url: "https://assets.5pots.com/file/cincopots/timeline/udyr-skins.jpg",
    alt: "Spirit Guard Udyr's splash art on his Phoenix form",
  },
  name: "Spirit Guard Udyr",
  url: "https://www.youtube.com/watch?v=Ji_POnks-v4",
};

export const udyr: TimelineEvent = {
  champions: [{ championId: "Udyr", name: "Udyr" }],
  backgroundCategory: "pbe",
  borderCategory: "champions",
  description: "The Udyr champion update is now testing on the PBE!",
  endDate: new Date("2022-09-20T00:00:00.000"),
  startDate: new Date("2022-09-13T00:00:00.000"),
  image: {
    url: "https://assets.5pots.com/file/cincopots/timeline/udyr.jpg",
    alt: "Definitely not Udyr splash art with Udyr taking a selfie",
  },
  name: "Udyr",
  isFeatured: true,
  subEvents: [spotlight, skins],
};
