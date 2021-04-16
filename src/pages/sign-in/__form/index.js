import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { HttpStatusViewer } from "../../../components";
import { useStyles } from "./style";
import { validationSchema } from "./validationSchema";

export const Form = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: props.onSubmit,
  });

  if (props.loading || props.statusCode)
    return (
      <HttpStatusViewer
        loading={props.loading}
        message={props.statusMessage}
        code={props.statusCode}
      />
    );

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        className={classes.input}
        id="username"
        name="username"
        label="Nombre de usuario o correo electronico"
        required
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        fullWidth
        className={classes.input}
        id="password"
        name="password"
        label="Contraseña"
        type="password"
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Link href="/sign-up">Registrate en nuestra plataforma</Link>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        Iniciar Sesion
      </Button>
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        fullWidth
        onClick={props.onCancel}
      >
        Regresar
      </Button>
    </form>
  );
};
