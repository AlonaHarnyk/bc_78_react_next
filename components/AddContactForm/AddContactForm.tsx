"use client";
import { Field, Form, Formik, type FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./AddContactForm.module.css";
import { ContactData } from "@/libs/types";
import { useContactFormDataStore } from "@/stores/contactFormDataStore";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 symbols")
    .required("Name is required"),
  number: Yup.string()
    .min(6, "Phone number mast be at least 6 numbers")
    .required("Number is required"),
});

interface Props {
  onSubmit: (data: ContactData) => void;
}

export default function AddContactForm({ onSubmit }: Props) {
  const { data, setContact, clearContact } = useContactFormDataStore();

  const handleSubmit = (
    values: ContactData,
    formikHelpers: FormikHelpers<ContactData>
  ) => {
    onSubmit(values);
    clearContact();
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
      enableReinitialize
    >
      {({ values, handleChange, ...args }) => {
        console.log(args);
        return (
          <Form>
            <label>
              Name:
              <Field
                type="text"
                name="name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setContact({ ...values, name: e.target.value });
                }}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </label>
            <label>
              Number:
              <Field
                type="tel"
                name="number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setContact({ ...values, number: e.target.value });
                }}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={css.error}
              />
            </label>

            <button type="submit">Submit Contact</button>
          </Form>
        );
      }}
    </Formik>
  );
}
