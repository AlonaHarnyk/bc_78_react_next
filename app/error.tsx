"use client";

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
    </>
  );
}
