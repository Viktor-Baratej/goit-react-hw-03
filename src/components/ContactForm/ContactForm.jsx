import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Name is required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone format")
      .required("Number is required"),
  });

  const initialValues = { name: "", number: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.form_container}>
          <label className={styles.name}>
            Name:
            <Field className={styles.input} name="name" type="text" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="div"
            />
          </label>
          <label className={styles.number}>
            Number:
            <Field className={styles.input} name="number" type="text" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="div"
            />
          </label>
          <button className={styles.btn} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
