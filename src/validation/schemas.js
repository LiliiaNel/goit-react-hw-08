import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
      name: Yup.string().min(3, 'Must contain at least 3 characters')
        .max(30, 'Cannot exceed 30 characters').required('Please enter a name'),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one special character")
        .required("Password is required"),
});
    
export const loginSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
});
    
export const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Must contain at least 3 characters').max(30, 'Cannot exceed 30 characters').required('Please enter a name'),
    number: Yup.string().matches(/^[\d-]+$/, 'Can contain only digits and dashes').min(3, 'Must be at least 3 digits').max(30, 'Cannot exceed 30 characters').required('Please enter a phone number'),
    });
  