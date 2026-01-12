import { Metadata } from "next";
import UsersHeader from "./components/UsersHeader/UsersHeader";

export const metadata: Metadata = {
  title: "Users",
  description: "Users management",
};

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
