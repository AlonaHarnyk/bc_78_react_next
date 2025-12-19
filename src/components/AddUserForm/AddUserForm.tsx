import { useId } from "react";
import { Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";

interface Props {
  hideForm: () => void;
}

interface FormValues {
  name: string;
  age: number | "";
  isOnline: "true" | "false";
}

const initialFormValues: FormValues = {
  name: "",
  age: "",
  isOnline: "true",
};

const formShema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  age: Yup.number().positive().integer().required(),
  isOnline: Yup.string().oneOf(["true", "false"]).required(),
});
export default function AddUserForm({ hideForm }: Props) {
  const id = useId();

  const handleSubmit = (
    values: FormValues,
    formHelpers: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    formHelpers.resetForm();

    // const userName = formData.get("name") as string;
    // const userAge = formData.get("age") as string;
    // const isOnline = formData.get("isOnline") as string;
    // const userData = {
    //   name: userName,
    //   age: Number(userAge),
    //   isOnline: Boolean(isOnline),
    // };
    // console.log(userData);
    // hideForm();
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSubmit}
      validationSchema={formShema}
    >
      <Form>
        <label htmlFor={`name-${id}`}>Name:</label>
        <Field type="text" name="name" id={`name-${id}`} />

        <label htmlFor={`age-${id}`}>Age:</label>
        <Field type="number" name="age" id={`age-${id}`} />

        <fieldset>
          <legend>Is user online:</legend>
          <label>
            <Field type="radio" name="isOnline" value="true" />
            Yes
          </label>
          <label>
            <Field type="radio" name="isOnline" value="false" />
            No
          </label>
        </fieldset>

        <button>Submit</button>
      </Form>
    </Formik>
  );
}
