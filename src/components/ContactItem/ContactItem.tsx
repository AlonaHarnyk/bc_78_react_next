import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Contact } from "../../types/types";
import { deleteContact } from "../../api/api";

interface ContactProps {
  contact: Contact;
}

export default function Contact({ contact }: ContactProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: string) => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: () => {
      console.log("Error");
    },
  });
  const handleDeleteContact = () => {
    mutate(contact.id);
  };

  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={handleDeleteContact}>Delete contact</button>
    </>
  );
}
