import * as yup from "yup";

export const validationSchema = yup.object({
  username: yup
    .string("Ingrese su nombre de usuario o correo electronico")
    .required("Su nombre de usuario o correo electronico es requerido"),
  password: yup
    .string("Ingrese su contraseña")
    .required("Su contraseña es requerida"),
});
