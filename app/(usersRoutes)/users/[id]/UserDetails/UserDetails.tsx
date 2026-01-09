"use client";

import { getUserById } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {user && (
        <>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>
            Is user online:
            <span>{user.isOnline ? "Yes" : "No"}</span>
          </p>
        </>
      )}
    </>
  );
}
