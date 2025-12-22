import { useQuery } from "@tanstack/react-query";
import { getContact } from "../../api/api";
import ContactsList from "../ContactsList/ContactList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import AddContactForm from "../AddContactForm/AddContactForm";

export default function ContactsTab() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getContact(),
  });
  return (
    <>
      {!isLoading && (
        <>
          <AddContactForm />
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
