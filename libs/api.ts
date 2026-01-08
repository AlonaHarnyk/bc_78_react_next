import axios from "axios";
import { Contact, ContactData, User } from "./types";

axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api";

interface GetContactsProps {
  search?: string;
  hasWork?: boolean;
}

export async function getContacts({
  search,
  hasWork,
}: GetContactsProps): Promise<Contact[]> {
  // console.log(search);
  // console.log(hasWork);
  const res = await axios.get<Contact[]>("/contacts", {
    params: { search, hasWork },
  });
  return res.data;
}

export async function getContactById(id: string): Promise<Contact> {
  const res = await axios.get<Contact>(`/contacts/${id}`);
  return res.data;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await axios.get<User[]>("/users");

  return data;
}

export async function getUserById(id: string): Promise<User> {
  const res = await axios.get<User>(`/users/${id}`);
  return res.data;
}

export async function addContact(contact: ContactData): Promise<Contact> {
  const { data } = await axios.post<Contact>("/contacts", contact);

  return data;
}
