import { useQuery } from "@tanstack/react-query";
import { getContact } from "../../api/api";
import ContactsList from "../ContactsList/ContactList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function ContactsTab() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contact"],
    queryFn: () => getContact(),
  });
  return (
    <>
      {!isLoading && (
        <>
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
