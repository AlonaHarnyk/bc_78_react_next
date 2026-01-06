"use client";

import { getContactById } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ContactDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: contact } = useQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {contact && (
        <>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </>
      )}
    </>
  );
}
