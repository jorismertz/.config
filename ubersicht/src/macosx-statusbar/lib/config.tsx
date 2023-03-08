// true = white, false = black
export const lightText = true;
// Some widgets will only show if you're connected to home SSID
export const ssid = "Kieffie";

export const showCreateSpace = false; // Show create space button

export const flipDisplayLayout = false; // If arrangement of displays is incorrect try flipping this

// If a display with this uuid is detected the display layout will be flipped
// This is usefull if you use multiple setups with differing layouts
export const overrideFlipUuids = [
  "7D96797D-687A-47D1-B429-16D53251C8C3",
  "82F30977-0293-4DA4-8BE8-E78B1E827592",
];

// These sites will trigger a special icon for entertainment windows
export const mediaSites = [
  "youtube",
  "hbo",
  "netflix",
  "amazon prime",
  "twitch",
];
// These apps will be prioritized over others in icon selection
export const prioritizedApps = ["iTerm2", "Spotify"];

// These are the icons that will be used for each app
// If the priority is set higher, it's icon will be prefered over others
export const appIcons = {
  "Brave Browser": { icon: "􀎭", priority: 1 },
  Spotify: { icon: "􀺹", priority: 2 },
  Code: { icon: "􀅫", priority: 3 },
  kitty: { icon: "􀆔", priority: 2 },
  Figma: { icon: "􀤑", priority: 2 },
  WhatsApp: { icon: "􀌥", priority: 2 },
  Messages: { icon: "􀌥", priority: 2 },
  empty: { icon: "􀥁", priority: 0 },
  media: { icon: "􁐇", priority: 4 },
};
