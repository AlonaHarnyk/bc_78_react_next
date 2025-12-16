import axios from "axios";
import type { Order, User } from "../types/types";

axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api";

interface GetUsersParams {
  isOnline?: string;
  order: Order;
}

export async function getUsers({
  isOnline,
  order,
}: GetUsersParams): Promise<User[]> {
  const { data } = await axios.get<User[]>("/users", {
    params: {
      isOnline,
      order,
      sortBy: "name",
    },
  });

  return data;
}
