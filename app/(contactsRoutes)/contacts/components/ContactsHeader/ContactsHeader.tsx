import Link from "next/link";
import css from "./ContactsHeader.module.css";

export default function ContactsHeader() {
  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link href="/">Back To Home</Link>
      </li>
      <li className={css.navItem}>
        {/* <Link href="/contacts">List of Contacts</Link> */}
        <ul>
          <li>
            <Link href="/contacts/search/all">All Contacts</Link>
          </li>
          <li>
            <Link href="/contacts/search/with-job">Contacts with job</Link>
          </li>
          <li>
            <Link href="/contacts/search/without-job">
              Contacts without job
            </Link>
          </li>
        </ul>
      </li>
      <li className={css.navItem}>
        <Link href="/contacts/add">Add Contact</Link>
      </li>
    </ul>
  );
}
