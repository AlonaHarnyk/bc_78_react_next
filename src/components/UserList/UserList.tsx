import type { User } from "../../types/types";
import UserItem from "../User/User";

interface Props {
  users: User[];
}

export default function UserList({ users }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserItem userData={user} />
        </li>
      ))}
    </ul>
  );
}
