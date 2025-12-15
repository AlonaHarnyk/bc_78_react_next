import type { UserType } from "../types";
import User from "../User/User";

interface Props {
  users: UserType[];
  onDelete: (id: string) => void;
}

export default function UserList({ users, onDelete }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User userData={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
