import { lightText } from "../config.jsx";
export const filter = "blur(5rem) saturate(2)";
export const height = "1.5rem";
export const gapSize = ".5rem";
export const borderRadius = ".2rem";

const getColors = () => {
  const obj = {
    Base: "hsl(246deg 24% 17%)",
    White: "hsl(245deg 50% 91%)",
    Surface: "hsl(248deg 24% 20%)",
    Overlay: "hsl(248deg 21% 26%)",
    Muted: "hsl(249deg 12% 47%)",
    Subtle: "hsl(248deg 15% 61%)",
    Love: "hsl(343deg 76% 68%)",
    Gold: "hsl(35deg 88% 72%)",
    Rose: "hsl(2deg 66% 75%)",
    Pine: "hsl(197deg 48% 47%)",
    Foam: "hsl(189deg 43% 73%)",
    Iris: "hsl(267deg 57% 78%)",
    HighlightLow: "hsl(245deg 22% 20%)",
    HighlightMed: "hsl(247deg 16% 30%)",
    HighlightHigh: "hsl(249deg 15% 38%)",
    widgetBackground: "rgba(205, 205, 205, 55%)",
  };
  return {
    ...obj,
    Text: lightText ? obj.White : obj.Base,
  };
};

export const colors = getColors();

const styles = `
.widget-status-indicator {
  position: relative;
  border-radius: 50%;
  background: ${colors.Gold};
  width: .75rem;
  height: .75rem;
  align-self: center;
  animation: status-indicator 3s linear;
}

.label {
  font-weight: 700;
}

.loading-block {
  height: 100%;
  background: ${colors.widgetBackground};
  border-radius: ${borderRadius};
  animation: loadingGlint 1.5s ease-in-out infinite;
  animation-direction: alternate;
}

@keyframes loadingGlint {
  0% {
    background: ${colors.widgetBackground};
  }
  50% {
    background: rgba(155, 155, 155, 0.55);
  }
  100% {
    background: ${colors.widgetBackground};
  }
}

.space-index {
  position: absolute;
  color: ${colors.Text};
  font-size: 10px;
  top: -5px;
}

.space-index.notif-badge {
  right: -2px;
  font-size: 12px
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "SF Pro", sans-serif;
    -webkit-user-select: none;
    cursor: default;
  }
  .widgets-wrapper {
    box-sizing: content-box;
    width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    height: 40px;
    flexc-direction: row;
    justify-content: space-between;
    gap: ${gapSize};
    padding: 7px;
    padding-right: 13px;
  }

  .spaces-widget-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-right: 1rem;
    border-radius: 0 0.5rem 0 0;
    gap: ${gapSize};
  }

  .widgets-wrapper {
    box-sizing: border-box;
  }

  .widget-component {
    background: ${colors.widgetBackground};
    position: relative;
    height: auto;
    border-radius: ${borderRadius};
    display: flex;
    color: ${colors.Text};
    backdrop-filter: ${filter};
    padding: .25rem .75rem;
    gap: ${gapSize};
    align-items: center;
  }

  .space-component.visible-space {
    background: ${colors.widgetBackground};
  } 

  .transparant-widget {
    background: transparent; 
    padding: .25rem;
    backdrop-filter: none;
  }

  .notifications {
    position: relative;
  }

  .notifications::after {
    background: ${colors.Pine};
    width: 6px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0px;
    right: -3px;
  }

  .notification-entry {
   color: ${colors.White};
   background: ${colors.widgetBackground};
   display: grid;
   height: 100%;
   position: relative;
    place-items: center;
    aspect-ratio: 1/1;
    border-radius: ${borderRadius};
  }

  .notification-entry .badge {
    position: absolute;
    top: -7px;
    right: -7px;
    font-size: 12px;
    background: ${colors.Love};
    width: 15px;
    aspect-ration: 1/1;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }

  .space-component {
    font-size: 1rem;
    position: relative;
    margin-left: ${gapSize};
    height: ${height};
    aspect-ratio: 1/1;
    place-items: center;
    color: ${colors.Text};
    cursor: pointer;
    border-radius: ${borderRadius};
    display: grid;
    transition: background 0.2s ease-in-out;
    padding: 0.2rem;
  }

  space-component > .add-icon {
    fontWeight: 700;
    fontSize: .75rem;
  }

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

  .hidden {
    display: none !important;
  }

  .pointer {
    cursor: pointer;
  }

  .indicator {
    --size: 6px;
    width: var(--size);
    aspect-ratio: 1/1;
    right: calc(var(--size) / 2 * -1);
    top: calc(var(--size) / 2 * -1);
    border-radius: 50%;
    position: absolute;
    background: ${colors.Gold};
  }
`;

export default styles;
