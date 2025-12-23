import axios from "axios";
import type { Contact, Field, Order, User } from "../types/types";

axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api";

interface GetUsersParams {
  isOnline?: string;
  order: Order;
  sortBy: Field;
  search: string;
  page: number;
}

export interface UpdateUserStatusParams {
  id: string;
  status: boolean;
}

export interface ContactData {
  name: string;
  number: string;
}

export async function getUsers({
  isOnline,
  order,
  sortBy,
  search,
  page,
}: GetUsersParams): Promise<User[]> {
  const { data } = await axios.get<User[]>("/users", {
    params: {
      isOnline,
      order,
      sortBy,
      search,
      page,
      limit: 5,
    },
  });

  return data;
}

export async function deleteUser(id: string): Promise<void> {
  await axios.delete<User>(`/users/${id}`);
}

export async function updateUserStatus({
  id,
  status,
}: UpdateUserStatusParams): Promise<User> {
  const { data } = await axios.put<User>(`/users/${id}`, { isOnline: status });

  return data;
}

export async function getContacts(search: string): Promise<Contact[]> {
  const { data } = await axios.get<Contact[]>("/contacts", {
    params: { search },
  });
  return data;
}

export async function addContact(contact: ContactData): Promise<Contact> {
  const { data } = await axios.post<Contact>("/contacts", contact);

  return data;
}

export async function deleteContact(id: string): Promise<void> {
  await axios.delete(`/contacts/${id}`);
}

export interface UserData {
  name: string;
  age: number;
  isOnline: boolean;
}

export async function addUser(user: UserData): Promise<User> {
  const { data } = await axios.post<User>("/users", user);
  return data;
}
