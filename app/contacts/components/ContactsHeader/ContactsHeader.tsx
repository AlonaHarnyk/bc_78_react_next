import Link from "next/link";
import css from "./ContactsHeader.module.css";

export default function ContactsHeader() {
  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link href="/">Back To Home</Link>
      </li>
      <li className={css.navItem}>
        <Link href="/contacts">List of Contacts</Link>
      </li>
      <li className={css.navItem}>
        <Link href="/contacts/add">Add Contact</Link>
      </li>
    </ul>
  );
}
