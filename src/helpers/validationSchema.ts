import * as yup from "yup";

export const ttnValidationSchema = yup.object().shape({
  TTN: yup
    .string()
    .typeError("Will be a number")
    .required("This field is required"),
});

export const placeValidationSchema = yup.object().shape({
  city: yup
    .string()
    .typeError("Will be a string")
    .required("This field is required"),
});
