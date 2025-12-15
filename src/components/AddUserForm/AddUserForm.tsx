import { useId } from "react";

export default function AddUserForm() {
  const id = useId();
  return (
    <div>
      <form>
        <label htmlFor={`name-${id}`}>Name:</label>
        <input type="text" name="name" id={`name-${id}`} />

        <label htmlFor={`age-${id}`}>Age:</label>
        <input type="number" name="age" id={`age-${id}`} />

        <fieldset>
          <legend>Is user online:</legend>
          <label>
            <input type="radio" name="isOnline" value="true" />
            Yes
          </label>
          <label>
            <input type="radio" name="isOnline" value="false" />
            No
          </label>
        </fieldset>
      </form>
    </div>
  );
}
