import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  image: {
    width: "100%",
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
