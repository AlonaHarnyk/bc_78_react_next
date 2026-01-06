"use client";

import { useQuery } from "@tanstack/react-query";

export default function ContactDetails() {
  const { data: contact } = useQuery({});

  return;
  <>
    <p>{contact.name}</p>
    <p>{contact.number}</p>
  </>;
}
