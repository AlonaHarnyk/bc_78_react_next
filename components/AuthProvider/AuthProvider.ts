"use client";

import { checkSession, getMe } from "@/libs/api";
// import { checkSession, getMe } from "../lib/api";
import { useAuthStore } from "../../stores/authStore";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  useEffect(() => {
    const fetchUser = async () => {
      // Перевіряємо сесію
      const isAuthenticated = await checkSession();

      if (isAuthenticated) {
        // Якщо сесія валідна — отримуємо користувача
        const user = await getMe();
        console.log("fn getMe:", user);
        if (user) {
          setUser(user);
        }
      } else {
        // Якщо сесія невалідна — чистимо стан
        clearUser();
      }
    };
    fetchUser();
  }, [setUser, clearUser]);

  return children;
};

export default AuthProvider;
