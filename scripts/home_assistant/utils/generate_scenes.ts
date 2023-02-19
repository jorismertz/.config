import { scenes } from "../scenes.ts";

const sceneKeys = Object.keys(scenes);

sceneKeys.forEach((key) => {
  const scene = scenes[key as keyof typeof scenes];
  console.log({ key, scene });

  Deno.writeTextFile(
    "./scenes/scene_" + key + ".ts",
    `import { activateScene } from "../utils/activate_scene.ts";
await activateScene("${key}");
  `
  );
});
