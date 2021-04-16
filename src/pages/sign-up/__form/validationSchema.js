import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup.string("Ingrese su nombre").required("Su nombre es requerido"),
  lastName: yup
    .string("Ingrese su apellido")
    .required("Su apellido es requerido"),
  email: yup
    .string("Ingrese su correo electronico")
    .email("Ingrese un correo valido")
    .required("Su correo electronico es requerido"),
  username: yup
    .string("Ingrese su nombre de usuario")
    .min(6, "Ingrese un nombre de usuario de 6 caracteres como minimo")
    .required("Su nombre de usuario es requerido"),
  password: yup
    .string("Ingrese su contraseña")
    .min(8, "Ingrese una contraseña de 8 caracteres como minimo")
    .required("Su contraseña es requerida"),
});
