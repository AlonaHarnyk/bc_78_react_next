import type { Contact } from "../../types/types";

interface ContactProps {
  contact: Contact;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
    </>
  );
}
