import UsersHeader from "./components/UsersHeader/UsersHeader";

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UsersHeader />
      {children}
    </>
  );
}
