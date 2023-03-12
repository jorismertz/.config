import { borderRadius, colors, gapSize, height } from "./variables.jsx";
import { config } from "../config.jsx";

export const spaceStyles = `
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

  .spaces-widget-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: ${
      config.general.flipStatusBarOrder ? "flex-end" : "flex-start"
    };
    align-items: center;
    width: 100%;
    height: 100%;
    padding-right: 1rem;
    border-radius: 0 0.5rem 0 0;
    gap: ${gapSize};
  }

  .space-index {
    position: absolute;
    color: ${colors.Text};
    font-size: 10px;
    top: -5px;
    display: ${config.spaces.showSpaceIndex ? "block" : "none"};
  }
  
  .space-index.notif-badge {
    right: -2px;
    font-size: 12px
  }

  space-component > .add-icon {
    fontWeight: 700;
    fontSize: .75rem;
  }

  .space-component.visible-space {
    background: ${colors.widgetBackground};
  } 

  .space-component > .add-icon {
    fontWeight: 700;
    fontSize: .75rem;
  }
`;
