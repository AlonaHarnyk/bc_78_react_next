import UsersList from "@/components/UsersList/UsersList";
import { getUsers } from "@/libs/api";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "List of users",
  description: "Page for showing list of users",
};

export default async function Users() {
  const users = await getUsers();
  return (
    <>
      <Image src="/users.jpg" alt="Banch of users" width={320} height={240} />
      <UsersList users={users} />
    </>
  );
}
