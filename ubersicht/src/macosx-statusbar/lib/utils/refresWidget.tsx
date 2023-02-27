import { run } from "uebersicht";

export function refreshWidget() {
  run(
    `osascript -e 'tell application id "tracesOf.Uebersicht" to refresh widget id "status-bar-index-jsx"'`
  );
}
