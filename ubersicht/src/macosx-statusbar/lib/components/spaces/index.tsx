import { mapWindowsToSpaces } from "../../utils/mapWindowsToSpaces.jsx";
import config from "../../config.jsx";
import { React } from "uebersicht";

import SpaceComponent from "./Space.jsx";
import CreateSpace from "./CreateSpace.jsx";
import { SpacesProps } from "../../types.js";

interface Props {
  data: SpacesProps;
}

const Spaces = ({ data }: Props) => {
  const { spacesQuery, windowsQuery, displayQuery } = data;

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
            displayQuery={displayQuery}
          />
        );
      })}
      {config.showCreateSpace && <CreateSpace monitorAmount={monitorAmount} />}
    </section>
  );
};

export default Spaces;
