import { config } from "../config.jsx";
import { borderRadius, colors, filter, gapSize } from "./variables.jsx";

export const widgetStyles = `
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

  .widget-status-indicator {
    position: relative;
    border-radius: 50%;
    background: ${colors.Gold};
    width: .75rem;
    height: .75rem;
    align-self: center;
    animation: status-indicator 3s linear;
  }

  .widgets-wrapper {
    box-sizing: border-box;
    width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    height: 40px;
    flex-direction: ${
      config.general.flipStatusBarOrder ? "row-reverse" : "row"
    };
    justify-content: space-between;
    gap: ${gapSize};
    padding: 7px;
    padding-right: 13px;
  }

  .transparant-widget {
    background: transparent; 
    padding: .25rem;
    backdrop-filter: none;
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
`;
