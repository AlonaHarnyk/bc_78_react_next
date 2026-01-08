import Link from "next/link";
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.container}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link href="/contacts/search/all">Contacts</Link>
        </li>
        <li className={css.navItem}>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}
