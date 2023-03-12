export interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Display {
  id: number;
  uuid: string;
  index: number;
  frame: Frame;
  spaces: number[];
}

const childTypes = [
  "first_child",
  "second_child",
  "third_child",
  "fourth_child",
  "fith_child",
  "sixth_child",
  "seventh_child",
  "eighth_child",
  "ninth_child",
  "tenth_child",
  "none",
];

type SplitChild = (typeof childTypes)[number];

export type LayoutType = "bsp" | "float";

export interface Space {
  id: number;
  uuid: string;
  index: number;
  label: string;
  type: LayoutType;
  display: number;
  windows: number[];
  "first-window": number;
  "last-window": number;
  "has-focus": boolean;
  "is-visible": boolean;
  "is-native-fullscreen": boolean;
}

export interface Window {
  id: number;
  pid: number;
  app: string;
  title: string;
  frame: Frame;
  role: string;
  subrole: string;
  display: number;
  space: number;
  level: number;
  opacity: number;
  "split-type": "horizontal" | "vertical" | "none";
  "split-child": SplitChild;
  "stack-index": number;
  "can-move": boolean;
  "can-resize": boolean;
  "has-focus": boolean;
  "has-shadow": boolean;
  "has-border": boolean;
  "has-parent-zoom": boolean;
  "has-fullscreen-zoom": boolean;
  "is-native-fullscreen": boolean;
  "is-visible": boolean;
  "is-minimized": boolean;
  "is-hidden": boolean;
  "is-floating": boolean;
  "is-sticky": boolean;
  "is-topmost": boolean;
  "is-grabbed": boolean;
}

export interface SpacesProps {
  spacesQuery: Space[];
  windowsQuery: Window[];
  displayQuery: Display[];
}

export interface SystemInfoQueryProps {
  cpu: number;
  mem: number;
  disk: string;
  battery: number;
}

export interface OutputData extends SpacesProps {
  systemInfoQuery: SystemInfoQueryProps;
  ssid: string;
}

export interface Config {
  useLightText: boolean;
  homeSsid: string;
  flipStatusBarOrder: boolean;
  showCreateSpace: boolean;
  flipDisplayIndexes: boolean;
  overrideFlipDisplayIndexes: string[];
  mediaSiteNames: string[];
  prioritizedApps: string[];
  appIcons: Record<string, { icon: string; priority: number }>;
}
