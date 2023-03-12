import config from "../config.jsx";
import { Window } from "../types.js";
const { mediaSiteNames: mediaSites, appIcons } = config;

function isMedia(windowTitle: string) {
  const result = mediaSites.map((site) => {
    return windowTitle.toLowerCase().includes(site);
  });
  return result.filter((a) => a === true)[0];
}

export function getSpaceIcon(windows: Window[]) {
  // Sort windows by priority
  const sorted = windows.sort((a: Window, b: Window) => {
    const iconA = appIcons[a.app as keyof typeof appIcons];
    const iconB = appIcons[b.app as keyof typeof appIcons];

    if (!iconB && iconA) return -1;
    if (!iconA && iconB) return 1;
    if (!iconA && !iconB) return 0;

    if (iconA.priority > iconB.priority) return -1;
    if (iconA.priority < iconB.priority) return 1;
    return 0;
  });

  const prioritized = sorted[0];

  if (!prioritized) return;

  // Prevents sticky windows from cluttering up the bar
  if (prioritized["is-floating"]) return;

  // give empty spaces their own icon,
  // this needs to be updated to account for minimized windows
  if (sorted.length === 0) return appIcons["empty"].icon;
  // If a window is fullscreen we check for a configured title match and give it it's own icon
  if (sorted.length === 1 && prioritized["is-native-fullscreen"]) {
    if (isMedia(prioritized.title)) return appIcons["media"].icon;
  }

  return appIcons[prioritized?.app as keyof typeof appIcons]?.icon;
}
