import { scenes } from "../scenes.ts";
import type { Scenes } from "../scenes.ts";
import { activateScene } from "../utils/activate_scene.ts";
import { parse } from "https://deno.land/std@0.168.0/flags/mod.ts";

const flags = parse(Deno.args, {
  string: ["scene"],
});

function exit(message: string) {
  console.error(message);
  Deno.exit(1);
}

const scene = flags.scene;
if (!scene) exit("No scene provided");

const sceneMatch = scenes[scene as keyof typeof scenes] || null;
if (!sceneMatch) exit("Invalid scene provided");

await activateScene(scene as Scenes);
