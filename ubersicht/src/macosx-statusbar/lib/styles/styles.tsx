import { globalStyles } from "./globals.jsx";
import { spaceStyles } from "./spaces.jsx";
import { widgetStyles } from "./widget.jsx";
import { spotifyStyles } from "./spotify.jsx";
import { smartHomeStyles } from "./smarthome.jsx";
import { notificationStyles } from "./notifications.jsx";

import { css } from "uebersicht";

const combineStylesheets = (css: string[]) => css.join("\n");

const combined = combineStylesheets([
  globalStyles,
  spaceStyles,
  widgetStyles,
  spotifyStyles,
  smartHomeStyles,
  notificationStyles,
]);

const styles = css`
  ${combined}
`;

export default styles;
