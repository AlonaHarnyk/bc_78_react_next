import type { UserType } from "../types";
import User from "../User/User";

interface Props {
  users: UserType[];
}

export default function UserList({ users }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User userData={user} />
        </li>
      ))}
    </ul>
  );
}
