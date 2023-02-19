export function mapWindowsToSpaces(windows, spaces) {
  spaces = spaces.map((space) => space.windows);
  const mapped = spaces.map((space) => {
    return space.map((window) => {
      return windows.find((el) => el.id === window);
    });
  });

  return mapped;
}
