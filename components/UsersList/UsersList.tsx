import { User } from "@/libs/types";
import Link from "next/link";

interface Props {
  users: User[];
}

export default function UsersList({ users }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>Name:{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}
