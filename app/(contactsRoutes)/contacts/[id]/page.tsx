import { getContactById } from "@/libs/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ContactDetails from "./ContactDetails/ContactDetails";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const contact = await getContactById(id);

  return {
    title: `User: ${contact.name}`,
    description: `Detailed information about contact ${contact.name}`,
  };
}

export default async function Contact({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactDetails />
    </HydrationBoundary>
  );
}
