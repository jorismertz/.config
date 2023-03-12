import { config } from "../config.jsx";

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
    Text: config.colors.textColor === "light" ? obj.White : obj.Base,
  };
};

export const colors = getColors();
