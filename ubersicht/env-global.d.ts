export {};

interface GeoLocation {
  getCurrentPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback,
    options?: PositionOptions
  ): void;
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback,
    options?: PositionOptions
  ): number;
  clearWatch(watchId: number): void;
}

declare global {
  interface Window {
    geolocation: GeoLocation;
  }
}
