"use client";

import { getUserById } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import css from "./page.module.css";

export default function Modal() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      <div className={css.modal}>
        <button className={css.onCloseBtn} onClick={handleClose}>
          X
        </button>
        {user && (
          <>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>
              Is user online:
              <span>{user.isOnline ? "Yes" : "No"}</span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
