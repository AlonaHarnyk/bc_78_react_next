import { Contact } from "@/libs/types";
import Link from "next/link";

interface Props {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: Props) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <Link href={`/contacts/${contact.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
}
