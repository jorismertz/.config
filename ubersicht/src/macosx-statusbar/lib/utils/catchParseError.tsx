export default function catchParseError(err: unknown) {
  const isErr = err instanceof Error;
  if (isErr && err.message.includes("Unexpected EOF")) return;
  else console.error(err);
}
