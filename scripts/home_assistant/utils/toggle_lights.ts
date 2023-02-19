import { config } from "../config.ts";
const { ip, token, devices } = config;

const headers = {
  Authorization: "Bearer " + token,
};

export async function toggleLights() {
  await fetch(ip + "api/services/light/toggle", {
    headers,
    method: "POST",
    body: JSON.stringify({
      entity_id: devices,
    }),
  });
}
