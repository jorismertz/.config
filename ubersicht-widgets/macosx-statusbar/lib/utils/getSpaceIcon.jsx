import { appIcons, mediaSites } from "../config.jsx";

function isMedia(windowTitle) {
  const result = mediaSites.map((site) => {
    return windowTitle.toLowerCase().includes(site);
  });
  return result.filter((a) => a === true)[0];
}

export function getSpaceIcon(windows) {
  const sorted = windows.sort((a, b) => {
    const iconA = appIcons[a.app];
    const iconB = appIcons[b.app];

    if (!iconB && iconA) return -1;
    if (!iconA && iconB) return 1;
    if (!iconA && !iconB) return 0;

    if (iconA.priority > iconB.priority) return -1;
    if (iconA.priority < iconB.priority) return 1;
  });

  const prioritized = sorted[0];

  if (!prioritized) return;

  if (sorted.length === 0) return appIcons["empty"].icon;
  if (sorted.length === 1 && prioritized["is-native-fullscreen"]) {
    if (isMedia(prioritized.title)) return appIcons["media"].icon;
  }

  return appIcons[prioritized?.app]?.icon;
}
