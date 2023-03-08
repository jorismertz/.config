import { focusSpace, destroySpace } from "../../utils/yabai.jsx";
import { getSpaceIcon } from "../../utils/getSpaceIcon.jsx";
import { flipDisplayLayout } from "../../config.jsx";
import { Space, Display } from "../../types.js";
import { overrideFlipUuids } from "../../config.jsx";

interface Props {
  displayQuery: Display[];
  monitorAmount: number;
  key: number | string;
  windows: any;
  space: Space;
}

const SpaceComponent = ({
  space,
  monitorAmount,
  windows,
  displayQuery,
}: Props) => {
  let screenIndex = parseInt(window.location.pathname.split("/")[1]);
  if (monitorAmount > 1) screenIndex = monitorAmount + 1 - screenIndex;

  const overrideFlip = displayQuery.some((display) => {
    return overrideFlipUuids.includes(display.uuid);
  });

  const icon = getSpaceIcon(windows);

  let isCorrectDisplay = flipDisplayLayout
    ? space.display !== screenIndex
    : space.display === screenIndex;

  if (overrideFlip) isCorrectDisplay = !isCorrectDisplay;

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
        className={`space-component ${isVisible ? "visible-space" : ""}`}
        onContextMenu={() => destroySpace}
        onClick={() => focusSpace(space.index)}
        style={{
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
