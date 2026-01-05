import Link from "next/link";
import css from "./UsersHeader.module.css";

export default function UsersHeader() {
  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link href="/">Back To Home</Link>
      </li>
      <li className={css.navItem}>
        <Link href="/users">List of Users</Link>
      </li>
      <li className={css.navItem}>
        <Link href="/users/add">Add User</Link>
      </li>
    </ul>
  );
}
