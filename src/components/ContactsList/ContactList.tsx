import type { Contact } from "../../types/types";
import ContactItem from "../ContactItem/ContactItem";

interface ContactListProps {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactListProps) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
}
