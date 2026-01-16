"use client";

import { registerUser } from "@/libs/api";
import { UserData } from "@/libs/types";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const userData = Object.fromEntries(formData) as unknown as UserData;
    const user = await registerUser(userData);

    if (user) {
      setUser(user);
      router.push("/profile");
    }
  };

  return (
    <form action={handleSubmit}>
      <label>
        Enter your email
        <input name="email" type="email" />
      </label>
      <label>
        Enter password
        <input name="password" type="password" />
      </label>
      <button>Register</button>
    </form>
  );
}
