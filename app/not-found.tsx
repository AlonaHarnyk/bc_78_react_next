import Link from "next/link";

export default function notFound() {
  return (
    <>
      <h2>Page not found</h2>
      <Link href="/">Go to Main</Link>
    </>
  );
}
