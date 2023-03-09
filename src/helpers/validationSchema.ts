import * as yup from "yup";

const validationSchema = yup.object().shape({
  TTN: yup
    .number()
    .typeError("Will be a number")
    .min(14, "The field must contain 14 characters")
    .max(14, "The field must contain 14 characters")
    .required("This field is required"),
});

export default validationSchema;
