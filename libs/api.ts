import axios from "axios";
import { Contact, User } from "./types";

axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api";

export async function getContacts(): Promise<Contact[]> {
  const res = await axios.get<Contact[]>("/contacts");
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
