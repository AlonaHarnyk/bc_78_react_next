import { useState } from "react";
import type { Status } from "../../types/types";

interface Props {
  onFilterChange: (status: Status) => void;
  currentStatus: Status;
}

export default function Filter({ onFilterChange, currentStatus }: Props) {
  const [status, setStatus] = useState<Status>(currentStatus);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Status;
    setStatus(value);

    onFilterChange(value);
  };

  return (
    <select name="status" value={status} onChange={handleChange}>
      <option value="all">All</option>
      <option value="true">Online</option>
      <option value="false">Offline</option>
    </select>
  );
}
