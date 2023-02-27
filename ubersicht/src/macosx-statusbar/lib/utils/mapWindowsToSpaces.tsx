import type { Window, Space } from "../types";

export function mapWindowsToSpaces(windows: Window[], spaces: Space[]) {
  const windowsOnly = spaces.map((space) => space.windows);
  const mapped = windowsOnly.map((space) => {
    return space.map((window) => {
      return windows.find((el) => el.id === window);
    });
  });

  return mapped;
}
