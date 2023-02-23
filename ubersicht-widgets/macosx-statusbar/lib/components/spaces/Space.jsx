import { focusSpace, destroySpace } from "../../utils/yabai.jsx";
import { colors } from "../../styles/styles.jsx";
import { getSpaceIcon } from "../../utils/getSpaceIcon.jsx";

import { React } from "uebersicht";

const SpaceComponent = ({ space, monitorAmount, windows }) => {
  let screenIndex = parseInt(window.location.pathname.split("/")[1]);
  if (monitorAmount > 1) screenIndex = monitorAmount + 1 - screenIndex;

  const icon = getSpaceIcon(windows);

  const isCorrectDisplay = space.display === screenIndex;
  const isFullscreen = space["is-native-fullscreen"];
  const isVisible = space["is-visible"];

  const hasIcon = icon !== undefined;

  return (
    <section
      style={{
        position: "relative",
        display: isCorrectDisplay ? "block" : "none",
      }}
    >
      <div
        className="space-component"
        onContextMenu={() => destroySpace(space.index)}
        onClick={() => focusSpace(space.index)}
        style={{
          background: isVisible ? colors.HighlightHigh : "rgba( 60, 60, 60, 0)",
          display: isCorrectDisplay ? "grid" : "none",
        }}
      >
        <p
          style={{
            textShadow: !isVisible ? "0px 3px 5px rgba(0,0,0,.3)" : "none",
          }}
        >
          {icon || space.index}
        </p>
      </div>
      <p className="space-index">{hasIcon ? space.index : ""}</p>
      <div
        style={{
          display: isFullscreen && isCorrectDisplay ? "block" : "none",
        }}
        className="indicator"
      />
    </section>
  );
};

export default SpaceComponent;
