import { parse } from "https://deno.land/std@0.168.0/flags/mod.ts";
import { activateScene } from "../utils/activate_scene.ts";
import { Scenes } from "../scenes.ts";
import { sceneNames } from "../scenes.ts";

const storeFile = "/tmp/scene_change_store.temp";

function incrementStore(index: number) {
  return Deno.writeTextFile(storeFile, (index + 1).toString());
}

function decrementStore(index: number) {
  return Deno.writeTextFile(storeFile, (index - 1).toString());
}

const input = parse(Deno.args, {
  string: ["d", "direction"],
});

const directions = ["left", "right"] as const;
type ValidDirections = typeof directions[number];
type Direction = string | undefined;

const unparsedInput: Direction = input.d || input.direction;
if (!unparsedInput) throw new Error("No direction provided");
if (!directions.includes(unparsedInput as ValidDirections))
  throw new Error("Invalid direction provided");

const direction = unparsedInput as ValidDirections;

try {
  let store = await Deno.readTextFile(storeFile);
  if (isNaN(parseInt(store))) {
    store = "0";
  }
  console.log("store", store);

  const lastSceneIndex = parseInt(store);

  switch (direction) {
    case "left":
      if (lastSceneIndex <= 0) {
        const sceneamnt = sceneNames.length - 1;
        await Deno.writeTextFile(storeFile, sceneamnt.toString());
        activateScene(sceneNames[sceneamnt] as Scenes);
      } else {
        activateScene(sceneNames[lastSceneIndex - 1] as Scenes);
        decrementStore(lastSceneIndex);
      }
      break;
    case "right":
      if (lastSceneIndex >= sceneNames.length - 1) {
        await Deno.writeTextFile(storeFile, "0");
        activateScene(sceneNames[0] as Scenes);
      } else {
        activateScene(sceneNames[lastSceneIndex + 1] as Scenes);
        incrementStore(lastSceneIndex);
      }
      break;
  }
} catch (_err) {
  console.log("Unable to read store file");
  console.log("Creating a new one. rerun script to use");
  await Deno.writeTextFile(storeFile, "0");
}
