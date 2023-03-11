import * as yup from "yup";

export const placeValidationSchema = yup.object().shape({
  city: yup
    .string()
    .typeError("Will be a string")
    .required("This field is required"),
});
