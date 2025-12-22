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

export async function updateUserStatus(
  id: string,
  status: boolean
): Promise<User> {
  const { data } = await axios.put<User>(`/users/${id}`, { isOnline: status });

  return data;
}

export async function getContact(): Promise<Contact[]> {
  const { data } = await axios.get<Contact[]>("/contacts");
  return data;
}

export async function addContact(contact: ContactData): Promise<Contact> {
  const { data } = await axios.post<Contact>("/contacts", contact);

  return data;
}

export async function deleteContact(id: string): Promise<void> {
  await axios.delete(`/contacts/${id}`);
}
