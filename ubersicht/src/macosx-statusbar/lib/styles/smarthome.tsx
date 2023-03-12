import { gapSize } from "./variables.jsx";

export const smartHomeStyles = `
  .smart-home-menu.closed {
    display: none;
  }

  .smart-home-menu.opened {
    display: flex; 
  }

  .smarthome-widget-component {
    position: relative;
  }

  .smarthome-scenes {
    display: flex;
    gap: ${gapSize};
    align-items: center;
    margin-right: ${gapSize};
  }

  .smarthome-scene {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;
