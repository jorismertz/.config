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

export default function LoadingState() {
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
