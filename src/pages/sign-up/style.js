import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  formWrapper: {
    width: "100%",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      width: "auto",
      height: "50vh",
    },
  },
  paragraph: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
}));
