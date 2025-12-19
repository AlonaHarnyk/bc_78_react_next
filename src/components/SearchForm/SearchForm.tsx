import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  onSubmit: (searchWord: string) => void;
}

interface ValuesInterface {
  search: string;
}

const initialValues: ValuesInterface = {
  search: "",
};

const validationSchema = Yup.object({
  search: Yup.string().required(),
});

export default function SearchForm({ onSubmit }: Props) {
  const handleSubmit = (
    values: ValuesInterface,
    FormikHelpers: FormikHelpers<ValuesInterface>
  ) => {
    onSubmit(values.search);

    FormikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field type="text" name="search" />
        <ErrorMessage name="search" component="span" />
        <button>Search</button>
      </Form>
    </Formik>
  );
}
