import { css } from "uebersicht";

import styles from "./lib/styles/styles.jsx";
import Spaces from "./lib/components/spaces/index.jsx";
import SystemInfo from "./lib/components/SystemInfo.jsx";
import type { OutputData } from "./lib/types.js";
import catchParseError from "./lib/utils/catchParseError.jsx";
import Notifications from "./lib/components/Notifications.jsx";
import Spotify from "./lib/components/Spotify.jsx";
//import SmartHome from "./lib/components/SmartHome;

import LoadingState from "./lib/components/LoadingState.jsx";

const refreshInSeconds = 30;
export const className = css`
  ${styles}
`;
export const command =
  "~/.config/ubersicht/src/macosx-statusbar/lib/utils/data.fish";
export const refreshFrequency = 1000 * refreshInSeconds;

interface Props {
  output: string;
}

export const render = ({ output }: Props) => {
  // prevent default error popup from showing up with try catch
  try {
    const { spacesQuery, systemInfoQuery, windowsQuery, displayQuery } =
      JSON.parse(output) as OutputData;

    console.log(JSON.parse(output));

    return (
      <div className="widgets-wrapper">
        <Spaces data={{ spacesQuery, windowsQuery, displayQuery }} />
        <Notifications />
        <SystemInfo data={systemInfoQuery} />
        <Spotify />
      </div>
    );
  } catch (err) {
    // On every render JSON.parse will error because the data
    // isn't fetched yet. This prevents the error from showing up
    // Beware: this supresses Unexpected EOF errors.
    catchParseError(err);

    return <LoadingState />;
  }
};
