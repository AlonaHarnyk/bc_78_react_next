export interface User {
  age: number;
  name: string;
  isOnline: boolean;
  id: string;
}

export type Order = "asc" | "desc";

export type Status = "all" | "false" | "true";
