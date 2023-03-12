import { describe, it, expect } from "vitest";
import { z } from "zod";
import fs from "fs";

const data = fs.readFileSync(
  "/Users/jorismertz/.config/ubersicht/src/macosx-statusbar/tests/data.json",
  "utf-8"
);

const dataSchema = z.object({
  spacesQuery: z.array(z.object({})),
  windowsQuery: z.array(z.object({})),
  displayQuery: z.array(z.object({})),
  systemInfoQuery: z.object({
    cpu: z.number(),
    mem: z.number(),
    disk: z.string(),
  }),
  ssid: z.string(),
  wallpaper_path: z.string(),
  spotify: z.object({
    status: z.string(),
    artist: z.string(),
    album: z.string(),
    track: z.string(),
    position: z.array(z.string()),
  }),
});

describe("Data provided by shell", () => {
  it("should not be empty", () => {
    expect(data).not.toBe("");
  });
  it("should be a valid JSON", () => {
    expect(() => JSON.parse(data)).not.toThrow();
  });
  it("should match the schema", () => {
    expect(() => dataSchema.parse(JSON.parse(data))).not.toThrow();
  });
});
