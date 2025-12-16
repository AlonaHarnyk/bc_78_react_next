import { useState } from "react";
import type { Order } from "../../types/types";

interface Props {
  onChangeOrder: (order: Order) => void;
  currentOrder: Order;
}

export default function SortBlock({ onChangeOrder, currentOrder }: Props) {
  const [order, setOrder] = useState(currentOrder);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentValue = e.target.value as Order;
    setOrder(currentValue);
    onChangeOrder(currentValue);
  };

  return (
    <>
      <p>Sort by name</p>
      <select name="sort" value={order} onChange={handleChange}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </>
  );
}
