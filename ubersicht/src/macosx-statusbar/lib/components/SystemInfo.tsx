import { React } from "uebersicht";
import { gapSize } from "../styles/styles.jsx";
import type { SystemInfoQueryProps } from "../types.js";

interface Props {
  data: SystemInfoQueryProps;
}

const render = ({ data }: Props) => {
  const disk = data.disk.replace(",", ".").replace(/\s+/g, "");
  const mem = data.mem;
  const cpu = Math.floor(data.cpu);
  const battery = data.battery + "%";

  return (
    <section className="widget-component">
      <p
        style={{
          display: "flex",
          gap: gapSize,
        }}
      >
        <span className="label">CPU: </span>
        {cpu}%<span className="label">MEM: </span>
        {mem}%<span className="label">DISK: </span>
        {disk}
        <span className="label">BAT: </span>
        {battery}
      </p>
    </section>
  );
};

export default render;
