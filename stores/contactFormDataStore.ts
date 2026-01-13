import { ContactData } from "@/libs/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ContactFormDataStore {
  data: ContactData;
  setContact: (contact: ContactData) => void;
  clearContact: () => void;
}

const initialValue: ContactData = { name: "", number: "" };

export const useContactFormDataStore = create<ContactFormDataStore>()(
  persist(
    (set) => ({
      data: initialValue,
      setContact: (contact: ContactData) => set({ data: contact }),
      clearContact: () => set({ data: initialValue }),
    }),
    {
      name: "contact-data",
      partialize(state) {
        return { data: state.data };
      },
    }
  )
);
