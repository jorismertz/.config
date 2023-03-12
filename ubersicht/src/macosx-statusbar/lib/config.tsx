import type { Config } from "./types";

const config: Config = {
  // Whether to use white or black text.
  useLightText: true,
  // Some widgets can use this to determine whether you're connected to your home network
  homeSsid: "Kieffie",
  // Show + button to create a new space
  showCreateSpace: false,
  // flip display indexes for multi monitor setups
  flipDisplayIndexes: false,
  // If a display with one of the UUIDs is connected your flipDisplayLayout setting will be reversed
  // This can be useful if you use multiple setups with different layouts.
  overrideFlipDisplayIndexes: [
    "7D96797D-687A-47D1-B429-16D53251C8C3",
    "82F30977-0293-4DA4-8BE8-E78B1E827592",
  ],
  // These are used to determine whether a browser window is playing media
  mediaSiteNames: ["youtube", "hbo", "netflix", "amazon prime", "twitch"],
  // These app names will be prioritized over others when picking an icon for a space
  prioritizedApps: ["iTerm2", "Spotify"],
  // Configure app icons and their priorities here.
  appIcons: {
    "Brave Browser": { icon: "􀎭", priority: 1 },
    Spotify: { icon: "􀺹", priority: 2 },
    Code: { icon: "􀅫", priority: 3 },
    kitty: { icon: "􀆔", priority: 2 },
    Figma: { icon: "􀤑", priority: 2 },
    WhatsApp: { icon: "􀌥", priority: 2 },
    Messages: { icon: "􀌥", priority: 2 },
    empty: { icon: "􀥁", priority: 0 },
    media: { icon: "􁐇", priority: 4 },
  },
};

export default config;
