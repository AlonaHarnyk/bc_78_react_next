"use client";
import { Field, Form, Formik, type FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./AddContactForm.module.css";

interface FormValues {
  name: string;
  number: string;
}

const initialValues: FormValues = {
  name: "",
  number: "",
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 symbols")
    .required("Name is required"),
  number: Yup.string()
    .min(6, "Phone number mast be at least 6 numbers")
    .required("Number is required"),
});

interface Props {
  onSubmit: (data: FormValues) => void;
}

export default function AddContactForm({ onSubmit }: Props) {
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    onSubmit(values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label>
          Number:
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button type="submit">Submit Contact</button>
      </Form>
    </Formik>
  );
}
