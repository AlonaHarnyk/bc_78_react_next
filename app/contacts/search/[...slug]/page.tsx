import ContactsList from "@/components/ContactsList/ContactsList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getContacts } from "@/libs/api";

interface Props {
  params: Promise<{ slug: string[] }>;
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
