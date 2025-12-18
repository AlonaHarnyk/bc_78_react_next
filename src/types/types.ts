export interface User {
  age: number;
  name: string;
  isOnline: boolean;
  id: string;
}

export type Order = "asc" | "desc";

export type Field = "name" | "age";

export type Status = "all" | "false" | "true";

export interface Contact {
  name: string;
  number: string;
  id: string;
}
