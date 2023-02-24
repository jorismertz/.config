// Ideas
// - Detect open website and check if it's a form of entertainment, change icon accordingly

import { css, React } from "uebersicht";

import styles from "./lib/styles/styles.jsx";
import Spaces from "./lib/components/spaces/index.jsx";
import SystemInfo from "./lib/components/SystemInfo.jsx";
//import SmartHome from "./lib/components/SmartHome.jsx";

// Refresh every 30 seconds to keep system usage up to date
const refreshInSeconds = 30;

export const className = css`
  ${styles}
`;

export const command = "~/.config/scripts/ubersicht_data.fish";
export const refreshFrequency = 1000 * refreshInSeconds;

export const render = ({ output }) => {
  try {
    output = JSON.parse(output);
    const { spacesQuery, systemInfoQuery, windowsQuery } = output;

    return (
      <div className="widgets-wrapper">
        <Spaces data={{ spacesQuery, windowsQuery }} />
        <SystemInfo data={systemInfoQuery} />
      </div>
    );
  } catch (err) {
    // prevent default error box from showing
    console.error(err);
    return (
      <div className="widgets-wrapper">
        <p style={{ color: "white" }}>error, see console.</p>
      </div>
    );
  }
};

//  <SmartHome data={ssid} />
