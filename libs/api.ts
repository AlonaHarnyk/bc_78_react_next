import axios from "axios";
import { Contact, ContactData, User, UserData } from "./types";

const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
});

interface GetContactsProps {
  search?: string;
  hasWork?: boolean;
}

interface CheckSessionRequest {
  success: boolean;
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

export async function addContact(contact: ContactData): Promise<Contact> {
  const { data } = await nextServer.post<Contact>("/contacts", contact);

  return data;
}

export async function registerUser(userData: UserData) {
  const { data } = await nextServer.post<User>("/auth/register", userData);
  return data;
}

export async function getMe() {
  const { data } = await nextServer.get<User>("users/me");
  return data;
}

export async function checkSession() {
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");

  console.log(res.data);
  return res.data.success;
}
