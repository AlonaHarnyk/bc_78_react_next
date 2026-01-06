import { getUserById } from "@/libs/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import UserDetails from "./UserDetails/UserDetails";

interface Props {
  params: Promise<{ id: string }>;
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
