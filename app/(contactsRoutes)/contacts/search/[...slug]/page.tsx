import ContactsList from "@/components/ContactsList/ContactsList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getContacts } from "@/libs/api";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const generateCategoty = (): string => {
    if (slug[0] === "all") {
      return "all";
    }

    if (slug[0] === "with-job") {
      return "employed";
    }

    return "unemployed";
  };

  return {
    title: "List of contacts",
    description: `Page for showing ${generateCategoty()} contacts`,
  };
}

export default async function SearchPage({ params }: Props) {
  const { slug } = await params;
  const hasWork = slug[0] === "all" ? undefined : slug[0] === "with-job";
  const contacts = await getContacts({ search: slug[1], hasWork });
  return (
    <>
      <SearchBar category={slug[0]} />
      <ContactsList contacts={contacts} />
    </>
  );
}
