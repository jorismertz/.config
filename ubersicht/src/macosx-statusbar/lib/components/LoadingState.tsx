import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function LoadingBlock({ size }: { size: number }) {
  return (
    <section
      className="loading-block"
      style={{
        aspectRatio: `${size} / 1`,
      }}
    ></section>
  );
}

export default function LoadingState({ children }: Props) {
  return (
    <div className="widgets-wrapper">
      <section className="spaces-widget-wrapper">
        <LoadingBlock size={1} />
        <LoadingBlock size={1} />
        <LoadingBlock size={1} />
      </section>
      <section
        className="spaces-widget-wrapper"
        style={{
          justifyContent: "end",
          paddingRight: "0",
        }}
      >
        <LoadingBlock size={12} />
      </section>
    </div>
  );
}
