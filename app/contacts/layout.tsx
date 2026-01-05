import ContactsHeader from "./components/ContactsHeader/ContactsHeader";

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
