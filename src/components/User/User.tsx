import type { UserType } from "../types.tsx";

interface UserDataProps {
  userData: UserType;
}

export default function User({ userData: { name, email } }: UserDataProps) {
  return (
    <>
      <h3>{name}</h3>
      <p>{email}</p>
    </>
  );
}
