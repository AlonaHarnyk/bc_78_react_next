import type { User } from "../../types/types";
import UserItem from "../User/User";

interface Props {
  users: User[];
  onDelete: (id: string) => void;
}

export default function UserList({ users, onDelete }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserItem userData={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
