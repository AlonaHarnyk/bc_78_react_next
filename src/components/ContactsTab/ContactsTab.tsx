import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../api/api";
import ContactsList from "../ContactsList/ContactList";
import SearchContactForm from "../SearchContactForm/SearchContactForm";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import AddContactForm from "../AddContactForm/AddContactForm";
import { useDebouncedCallback } from "use-debounce";

export default function ContactsTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contacts", searchQuery],
    queryFn: () => getContacts(searchQuery),
  });

  const handleSearch = useDebouncedCallback((query: string) => {
    setSearchQuery(query);
  }, 500);
  return (
    <>
      {!isLoading && (
        <>
          <AddContactForm />
          <SearchContactForm
            searchQuery={searchQuery}
            onChange={handleSearch}
          />
          {data && data.length !== 0 ? (
            <ContactsList contacts={data} />
          ) : (
            <p>No Contacts</p>
          )}
        </>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}
