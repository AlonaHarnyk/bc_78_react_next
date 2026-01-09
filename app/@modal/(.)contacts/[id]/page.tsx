"use client";

import { getContactById } from "@/libs/api";
import css from "./page.module.css";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export default function ContactsModal() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const handleClick = () => router.back();
  const { data: contact } = useQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
    refetchOnMount: false,
  });
  return (
    <div className={css.modal}>
      <button className={css.onCloseBtn} onClick={handleClick}>
        X
      </button>
      {contact && (
        <>
          <h3>{contact.name}</h3>
          <p>{contact.number}</p>
        </>
      )}
    </div>
  );
}
