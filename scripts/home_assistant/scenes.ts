export const scenes = {
  daylight: {
    sceneEntityId: "scene.daylight",
  },
  orange: {
    sceneEntityId: "scene.orange",
  },
  lilac: {
    sceneEntityId: "scene.lilac",
  },
  purple: {
    sceneEntityId: "scene.purple",
  },
  sleepy: {
    sceneEntityId: "scene.sleepy",
  },
};

export const sceneNames = Object.keys(scenes);
export type Scenes = keyof typeof scenes;
