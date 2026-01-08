import ContactsList from "@/components/ContactsList/ContactsList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getContacts } from "@/libs/api";

export default async function Contacts() {
  const contacts = await getContacts();
  return (
    <>
      <SearchBar />
      <ContactsList contacts={contacts} />
    </>
  );
}
