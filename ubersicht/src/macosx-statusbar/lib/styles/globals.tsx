import { colors } from "./variables.jsx";

export const globalStyles = `
  .label {
    font-weight: 700;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "SF Pro", sans-serif;
    -webkit-user-select: none;
    cursor: default;
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
