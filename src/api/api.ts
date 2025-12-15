import axios from "axios";
import type { User } from "../types/types";

axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api";

interface GetUsersParams {
  isOnline?: string;
}

export async function getUsers({ isOnline }: GetUsersParams): Promise<User[]> {
  const { data } = await axios.get<User[]>("/users", { params: { isOnline } });

  return data;
}
