import { run } from "uebersicht";
import { refreshWidget } from "./refresWidget.jsx";

export function createSpace() {
  run("/opt/homebrew/bin/yabai -m space --create");
  refreshWidget();
}

export function destroySpace() {
  run("/opt/homebrew/bin/yabai -m space --destroy");
  refreshWidget();
}

export function focusDisplay(display: number) {
  run(`/opt/homebrew/bin/yabai -m display --focus ${display}`);
}

export function focusSpace(space: number) {
  run(`/opt/homebrew/bin/yabai -m space --focus ${space}`);
}
