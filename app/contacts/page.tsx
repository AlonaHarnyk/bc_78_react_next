import ContactsList from "@/components/ContactsList/ContactsList";
import { getContacts } from "@/libs/api";

export default async function Contacts() {
  const contacts = await getContacts();
  return <ContactsList contacts={contacts} />;
}
