import { run } from "uebersicht";

export function activateScene(sceneName) {
  try {
    run(`~/.config/scripts/home_assistant/dist/scene --scene ${sceneName}`);
  } catch (_error) {
    console.warn("Scene binary not found.");
  }
}

export function toggleLights() {
  run(`~/.config/scripts/home_assistant/dist/toggleLights`);
}
