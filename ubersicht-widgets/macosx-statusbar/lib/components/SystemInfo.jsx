import { React } from "uebersicht";
import { gapSize } from "../styles/styles.jsx";

const render = ({ data }) => {
  const disk = data.disk.replace(",", ".").replace(/\s+/g, "");
  const mem = data.mem;
  const cpu = Math.floor(data.cpu);

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
      </p>
    </section>
  );
};

export default render;
