import { config } from "../config.ts";
const { ip, token } = config;

const headers = {
  Authorization: "Bearer " + token,
};

export async function decreaseBrightness(amount = 20) {
  await fetch(ip + "api/services/light/turn_on", {
    headers,
    method: "POST",
    body: JSON.stringify({
      entity_id: "light.all",
      brightness_step_pct: -amount,
    }),
  });
}

// increase function
export async function increaseBrightness(amount = 20) {
  await fetch(ip + "api/services/light/turn_on", {
    headers,
    method: "POST",
    body: JSON.stringify({
      entity_id: "light.all",
      brightness_step_pct: amount,
    }),
  });
}

export async function changeBrightness(brightness: number, entityId: string) {
  if (brightness > 100) brightness = 100;
  if (brightness < 0) brightness = 0;

  await fetch(ip + "api/services/light/turn_on", {
    headers,
    method: "POST",
    body: JSON.stringify({
      entity_id: entityId,
      brightness: brightness * 2.55,
    }),
  });
}
