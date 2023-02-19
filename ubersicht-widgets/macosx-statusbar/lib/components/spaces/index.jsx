import { mapWindowsToSpaces } from "../../utils/mapWindowsToSpaces.jsx";
import { showCreateSpace } from "../../config.jsx";
import { React } from "uebersicht";

import SpaceComponent from "./Space.jsx";
import CreateSpace from "./CreateSpace.jsx";

const Spaces = ({ data }) => {
  const { spacesQuery, windowsQuery } = data;

  // This saves us from having to run another yabai query.
  function getMonitorAmount() {
    let amnt = 0;
    spacesQuery.forEach((el) => {
      if (el.display > amnt) amnt = el.display;
    });
    return amnt;
  }

  const mapped = mapWindowsToSpaces(windowsQuery, spacesQuery);
  const monitorAmount = getMonitorAmount();

  return (
    <section className="spaces-widget-wrapper">
      {spacesQuery.map((space, index) => {
        const windowInfo = mapped[index];
        return (
          <SpaceComponent
            space={space}
            key={index}
            monitorAmount={monitorAmount}
            windows={windowInfo}
          />
        );
      })}
      {showCreateSpace && <CreateSpace monitorAmount={monitorAmount} />}
    </section>
  );
};

export default Spaces;
