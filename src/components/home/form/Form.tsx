import React from "react";
import styles from "./Form.module.css";
import { Formik } from "formik";
import validationSchema from "../../../helpers/validationSchema";

const Form: React.FC = () => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          TTN: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.label}>Enter TTN number:</p>
            <input
              className={styles.input}
              type="text"
              placeholder="14 symbols..."
              name="TTN"
              value={values.TTN}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <button className={styles.button} type="submit">
              Get status TTN
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
