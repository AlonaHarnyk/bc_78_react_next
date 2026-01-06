import axios from "axios";
import { Contact } from "./types";

axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api";

export async function getContacts(): Promise<Contact[]> {
  const res = await axios.get<Contact[]>("/contacts");
  return res.data;
}
