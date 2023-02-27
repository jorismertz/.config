import { toggleLights, activateScene } from "../utils/homeAssistant.jsx";
import { ssid } from "../config.jsx";
import { React } from "uebersicht";

interface SceneComponentProps {
  color: string;
  name: string;
  key: string;
}

const SceneComponent = ({ color, name, key }: SceneComponentProps) => {
  return (
    <div
      className="smarthome-scene"
      onClick={() => activateScene(name)}
      style={{
        background: color,
      }}
    />
  );
};

const lightScenes = [
  { color: "rgb(248, 105, 0)", name: "orange" },
  { color: "rgb(157, 0, 255)", name: "purple" },
  { color: "rgb(214, 104, 255)", name: "lilac" },
  {
    color:
      "linear-gradient(230deg, rgba(248,105,0,1) 0%, rgba(248,105,0,1) 50%, rgba(248,105,0,0.5) 100%)",
    name: "sleepy",
  },
];

export default function SmartHome({ data }: { data: string }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [lightsOn, setLightsOn] = React.useState(false);

  if (data.trim() !== ssid) return null;

  React.useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 1e3 * 10); // seconds
    }
  }, [menuOpen]);

  return (
    <div className="widget-component smarthome-widget-component">
      <section className={`smart-home-menu ${menuOpen ? "opened" : "closed"}`}>
        <div className="smarthome-scenes">
          {lightScenes.map((scene) => (
            <SceneComponent
              color={scene.color}
              name={scene.name}
              key={scene.name}
            />
          ))}
        </div>
        <p
          className="pointer"
          style={{
            transform: lightsOn ? "rotate(90deg)" : "rotate(0deg)",
            transition: "all .2s ease-in-out 0s",
          }}
          onClick={() => {
            toggleLights();
            setLightsOn(!lightsOn);
          }}
        >
          􀥣
        </p>
      </section>
      <p style={{ fontSize: ".8rem" }} onClick={() => setMenuOpen(!menuOpen)}>
        􁓽
      </p>
    </div>
  );
}
