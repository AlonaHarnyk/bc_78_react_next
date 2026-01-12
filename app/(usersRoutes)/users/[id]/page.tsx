import { getUserById } from "@/libs/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import UserDetails from "./UserDetails/UserDetails";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const user = await getUserById(id);

  return {
    title: `User: ${user.name}`,
    description: `Detailed information about user ${user.name}`,
  };
}

export default async function User({ params }: Props) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserDetails />
    </HydrationBoundary>
  );
}
