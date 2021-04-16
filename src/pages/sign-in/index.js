import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Form } from "./__form";
import { useStyles } from "./style";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

export const SignIn = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();

  const { response, loading } = useSelector((state) => state.authentication);

  const onSubmit = (formData) => dispatch({ type: "SIGN_IN", value: formData });

  return (
    <>
      <Container>
        <Grid container>
          <Grid item container xs={12} sm={6}>
            <Paper className={classes.formWrapper} elevation={5}>
              <Box color="primary.main" mb={4}>
                <Typography variant="h4" className={classes.paragraph}>
                  Ingreso
                </Typography>
              </Box>
              <Form
                statusCode={response?.statusCode}
                statusMessage={response?.message}
                loading={loading}
                onCancel={() => history.goBack()}
                onSubmit={onSubmit}
              />
            </Paper>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            justify="center"
            alignItems="center"
          >
            <img
              className={classes.image}
              src={theme.backgroundImages.signIn}
              alt="landing"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
