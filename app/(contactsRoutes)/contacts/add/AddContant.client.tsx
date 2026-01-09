"use client";

import AddContactForm from "@/components/AddContactForm/AddContactForm";
import { addContact } from "@/libs/api";
import { ContactData } from "@/libs/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddContactClient() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: ContactData) => addContact(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: () => {
      console.log("error");
    },
  });

  return <AddContactForm onSubmit={mutate} />;
}
