import axios from "axios";
import { Contact, ContactData, User } from "./types";

const nextServer = axios.create({
  baseURL: "http:/localhost:3000/api",
});

interface GetContactsProps {
  search?: string;
  hasWork?: boolean;
}

export async function getContacts({
  search,
  hasWork,
}: GetContactsProps): Promise<Contact[]> {
  const res = await nextServer.get<Contact[]>("/contacts", {
    params: { search, hasWork },
  });
  return res.data;
}

export async function getContactById(id: string): Promise<Contact> {
  const res = await nextServer.get<Contact>(`/contacts/${id}`);
  return res.data;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await nextServer.get<User[]>("/users");

  return data;
}

export async function getUserById(id: string): Promise<User> {
  const res = await nextServer.get<User>(`/users/${id}`);
  return res.data;
}

export async function addContact(contact: ContactData): Promise<Contact> {
  const { data } = await nextServer.post<Contact>("/contacts", contact);

  return data;
}
