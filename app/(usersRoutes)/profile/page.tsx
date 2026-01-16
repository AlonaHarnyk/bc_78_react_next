"use client";

import { useAuthStore } from "@/stores/authStore";

export default function ProfilePage() {
  const user = useAuthStore((s) => s.user);

  return (
    <>
      <p>{user?.username}</p>
      <p>{user?.email}</p>
    </>
  );
}
