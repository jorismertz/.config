import { borderRadius, colors } from "./variables.jsx";

export const notificationStyles = `
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
`;
