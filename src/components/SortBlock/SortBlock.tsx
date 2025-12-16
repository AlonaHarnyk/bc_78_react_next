import { useState } from "react";
import type { Field, Order } from "../../types/types";

interface Props {
  onChangeOrder: (order: Order) => void;
  onChangeField: (field: Field) => void;
  currentOrder: Order;
  currentField: Field;
}

export default function SortBlock({
  onChangeOrder,
  onChangeField,
  currentOrder,
  currentField,
}: Props) {
  const [order, setOrder] = useState(currentOrder);
  const [field, setField] = useState(currentField);

  const handleChangeField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentValue = e.target.value as Field;
    setField(currentValue);
    onChangeField(currentValue);
  };

  const handleChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentValue = e.target.value as Order;
    setOrder(currentValue);
    onChangeOrder(currentValue);
  };

  return (
    <>
      <p>Sort by:</p>
      <select name="field" value={field} onChange={handleChangeField}>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>
      <p>Sort order:</p>
      <select name="sort" value={order} onChange={handleChangeOrder}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </>
  );
}
