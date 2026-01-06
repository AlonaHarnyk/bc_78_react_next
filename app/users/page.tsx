import UsersList from "@/components/UsersList/UsersList";
import { getUsers } from "@/libs/api";

export default async function Users() {
  const users = await getUsers();
  return (
    <>
      <UsersList users={users} />
    </>
  );
}
