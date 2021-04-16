import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles } from "./style";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const upSM = useMediaQuery(theme.breakpoints.up("sm"));

  const { response } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({ type: "GET_USER" });
  }, [dispatch]);

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={upSM ? 10 : 4}>
          <Grid
            item
            container
            xs={12}
            sm={4}
            justify="center"
            alignItems="center"
          >
            <img
              className={classes.image}
              src={theme.profileImage}
              alt="landing"
            />
          </Grid>
          <Grid item container xs={12} sm={8}>
            <Box>
              <Box display="flex" flexDirection={upSM ? "row" : "column"}>
                <Typography variant="h4">
                  {response?.details?.firstName || "Nombre"}
                </Typography>
                <Box mx={upSM ? 1 : 0}>
                  <Typography color="textSecondary" variant="h4">
                    ({response?.details?.username || "Nickname"})
                  </Typography>
                </Box>
                <Typography variant="h4">
                  {response?.details?.lastName || "Apellido"}
                </Typography>
              </Box>
              <Box mt={1} mb={3}>
                <Typography color="primary" variant="h6">
                  {response?.details?.email || "email@company.com"}
                </Typography>
              </Box>
              <Typography color="textSecondary" variant="subtitle1">
                Ranking
              </Typography>
              <Rating precision={0.5} value={0} readOnly />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
