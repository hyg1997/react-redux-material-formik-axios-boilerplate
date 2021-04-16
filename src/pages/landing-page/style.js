import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
  avatar: {
    height: theme.spacing(12),
    width: theme.spacing(12),
  },
  comments: {
    textAlign: "center",
    width: "70%",
  },
}));
