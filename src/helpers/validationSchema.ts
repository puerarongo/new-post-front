import * as yup from "yup";

const validationSchema = yup.object().shape({
  TTN: yup
    .string()
    .typeError("Will be a number")
    .required("This field is required"),
});

export default validationSchema;
