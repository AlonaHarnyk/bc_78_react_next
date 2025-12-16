import { useId } from "react";
interface Props {
  hideForm: () => void;
}

export default function AddUserForm({ hideForm }: Props) {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const userName = formData.get("name") as string;
    const userAge = formData.get("age") as string;
    const isOnline = formData.get("isOnline") as string;

    const userData = {
      name: userName,
      age: Number(userAge),
      isOnline: Boolean(isOnline),
    };
    console.log(userData);
    hideForm();
  };

  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor={`name-${id}`}>Name:</label>
        <input type="text" name="name" id={`name-${id}`} required />

        <label htmlFor={`age-${id}`}>Age:</label>
        <input type="number" name="age" id={`age-${id}`} required />

        <fieldset>
          <legend>Is user online:</legend>
          <label>
            <input type="radio" name="isOnline" value="true" required />
            Yes
          </label>
          <label>
            <input type="radio" name="isOnline" value="false" />
            No
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
}
