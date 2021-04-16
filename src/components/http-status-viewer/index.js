import React from "react";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";

export const HttpStatusViewer = (props) => {
  const classes = useStyles();

  const renderIcon = () => {
    if (props.loading) return <CircularProgress color="secondary" />;

    const color = props.code === 200 ? "primary" : "error";

    return (
      <Icon color={color} style={{ fontSize: props.fontSize }}>
        {props.code === 200 ? (
          <CheckCircleIcon style={{ fontSize: props.fontSize }} />
        ) : (
          <ErrorIcon style={{ fontSize: props.fontSize }} />
        )}
      </Icon>
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      fontSize={60}
      my={8}
    >
      {renderIcon()}
      <Typography variant="h6" className={classes.message}>
        {props.loading
          ? "Estamos procesando su solicitud"
          : `${props.message || "Error desconocido"}, REDIRECCIONANDO...`}
      </Typography>
    </Box>
  );
};

HttpStatusViewer.defaultProps = {
  fontSize: 60,
};
