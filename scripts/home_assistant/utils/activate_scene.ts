import { config } from "../config.ts";
const { ip, token } = config;

import type { Scenes } from "../scenes.ts";
import { scenes } from "../scenes.ts";

const headers = {
  Authorization: "Bearer " + token,
};

export async function activateScene(sceneName: Scenes) {
  const scene = scenes[sceneName];
  await fetch(ip + "api/services/scene/turn_on", {
    headers,
    method: "POST",
    body: JSON.stringify({
      entity_id: scene.sceneEntityId,
    }),
  });
}
