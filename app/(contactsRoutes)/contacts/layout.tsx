import { Metadata } from "next";
import ContactsHeader from "./components/ContactsHeader/ContactsHeader";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contacts management",
};

export default function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContactsHeader />
      {children}
    </>
  );
}
