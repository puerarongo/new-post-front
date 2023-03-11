import React from "react";
import styles from "../../home/formHome/FormHome.module.css";
import { Formik } from "formik";
import { placeValidationSchema } from "../../../helpers/validationSchema";
import Button from "../../button/Button";

// * work with redux
import { useDispatch } from "react-redux";
import { getPlaceData } from "../../../redux/operation/place-operation";

const FormDepartments: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          city: "",
        }}
        validationSchema={placeValidationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(getPlaceData(values)).catch((err: Error) =>
            console.log("formDepartment", err)
          );
        }}
      >
        {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.label}>Enter the City Name:</p>
            <input
              className={styles.input}
              type="text"
              placeholder="Название Города.."
              name="city"
              value={values.city}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Button text={"Get city departments"} type={"submit"} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormDepartments;
