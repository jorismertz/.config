import { parse } from "https://deno.land/std@0.168.0/flags/mod.ts";
import { changeBrightness } from "../utils/change_brightness.ts";
import { config } from "../config.ts";
const { devices } = config;

const input = parse(Deno.args, {
  string: ["b", "brightness"],
});

const desiredBrightness = input.b || input.brightness || "50";

devices.forEach((device) => {
  changeBrightness(parseInt(desiredBrightness), device);
});
