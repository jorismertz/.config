import { config } from "../config.ts";
import { scenes } from "../scenes.ts";

const names = Object.entries(scenes).map(([key]) => key);
const newConfig = { ...config, names };

console.log(names);

const stringified = JSON.stringify(newConfig, null, 2);
await Deno.writeTextFile(
  "/Users/jorismertz/.config/scripts/home_assistant/dist/config.json",
  stringified
);
console.log("done");
