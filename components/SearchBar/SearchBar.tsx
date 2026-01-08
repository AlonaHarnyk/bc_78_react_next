"use client";

import { useRouter } from "next/navigation";

interface Props {
  category: string;
}

export default function SearchBar({ category }: Props) {
  const router = useRouter();

  const handleSubmit = (data: FormData) => {
    const searchText = data.get("search") as string;

    if (searchText.trim().length > 0) {
      router.push(`/contacts/search/${category}/${searchText}`);
    }
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="search" />
      <button>Search contact</button>
    </form>
  );
}
