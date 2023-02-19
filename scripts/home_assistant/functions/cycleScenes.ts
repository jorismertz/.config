import { activateScene } from "../utils/activate_scene.ts";
import type { Scenes } from "../scenes.ts";
import { sceneNames } from "../scenes.ts";

const storeFile = "/tmp/scene_cycle_store.temp";
function incrementStore(index: number) {
  return Deno.writeTextFile(storeFile, (index + 1).toString());
}

try {
  const store = await Deno.readTextFile(storeFile);
  console.log("store", store);

  const lastSceneIndex = parseInt(store);

  if (lastSceneIndex === sceneNames.length - 1) {
    await Deno.writeTextFile(storeFile, "0");
    activateScene(sceneNames[0] as Scenes);
  } else {
    activateScene(sceneNames[lastSceneIndex + 1] as Scenes);
    incrementStore(lastSceneIndex);
  }
} catch (_err) {
  console.log("Unable to read store file");
  console.log("Creating a new one. rerun script to use");
  await Deno.writeTextFile(storeFile, "0");
}
