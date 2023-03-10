import React from "react";
import styles from "./FormHome.module.css";
import { Formik } from "formik";
import { ttnValidationSchema } from "../../../helpers/validationSchema";
import Button from "../../button/Button";

const FormHome: React.FC = () => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          TTN: "",
        }}
        validationSchema={ttnValidationSchema}
        onSubmit={(values, { resetForm }) => {
          if (values.TTN.length === 14 && !isNaN(Number(values.TTN))) {
            console.log(values);
          } else {
            console.log("Error! The field must be a 14 digit number");
          }
        }}
      >
        {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
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
            <Button text={"Get status TTN"} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormHome;
