import type { Config } from "./types";

export const config: Config = {
  colors: {
    textColor: "light",
  },
  display: {
    flipIndexes: false,
    overrideFlipUUIDs: [
      "7D96797D-687A-47D1-B429-16D53251C8C3",
      "82F30977-0293-4DA4-8BE8-E78B1E827592",
    ],
  },
  general: {
    homeSSID: "Kieffie",
    flipStatusBarOrder: true,
  },
  spaces: {
    showCreateButton: false,
    showSpaceIndex: true,
    icons: {
      mediaSiteNames: ["youtube", "hbo", "netflix", "amazon prime", "twitch"],
      prioritizedApps: ["iTerm2", "Spotify"],
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
    },
  },
};
