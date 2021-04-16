import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Rating from "@material-ui/lab/Rating";
import { useStyles } from "./style";
import { useTheme } from "@material-ui/core/styles";

export const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const upSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Container>
        <Grid container>
          <Grid
            item
            container
            xs={12}
            sm={6}
            direction="column"
            justify="center"
            alignItems={upSM ? "flex-start" : "center"}
          >
            <Box color="primary.main" mt={6} mb={2}>
              <Typography variant="h3" className={classes.paragraph}>
                Apuesta en ti
              </Typography>
            </Box>
            <Box color="text.primary">
              <Typography variant="body1" className={classes.paragraph}>
                Juega con personas de todo el mundo tus juegos favoritos por{" "}
                <b>dinero real</b> y participa en nuestros{" "}
                <b>torneos semanales</b>
              </Typography>
            </Box>
            <Box mt={2} mb={6}>
              <Button variant="contained" color="secondary" href="/sign-up">
                <Box px={2}>Registrate</Box>
              </Button>
            </Box>
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
              src={theme.backgroundImages.landingPage}
              alt="landing"
            />
          </Grid>
        </Grid>
      </Container>
      <Box color="background.paper" bgcolor="text.primary">
        <Container>
          <Grid container>
            <Grid item container xs={12} sm={4}>
              <Box
                display="flex"
                flexDirection="column"
                justify="center"
                alignItems="center"
                py={8}
              >
                <Avatar
                  alt="Diego Yatra"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  className={classes.avatar}
                />
                <Box mt={2}>
                  <Typography variant="h6">Diego Yatra</Typography>
                </Box>
                <Box my={1}>
                  <Rating precision={0.5} value={5} readOnly />
                </Box>
                <Typography variant="body2" className={classes.comments}>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  soluta labore et velit temporibus doloribus ratione libero
                  iusto asperiores quo tempora, nemo a dolorum similique iure
                  debitis rerum! Eveniet, dolorum!"
                </Typography>
              </Box>
            </Grid>
            <Grid item container xs={12} sm={4}>
              <Box
                display="flex"
                flexDirection="column"
                justify="center"
                alignItems="center"
                py={8}
              >
                <Avatar
                  alt="Diego Yatra"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                  className={classes.avatar}
                />
                <Box mt={2}>
                  <Typography variant="h6">Alfredo Palomino</Typography>
                </Box>
                <Box my={1}>
                  <Rating precision={0.5} value={4.5} readOnly />
                </Box>
                <Typography variant="body2" className={classes.comments}>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  soluta labore et velit temporibus doloribus ratione libero
                  iusto asperiores quo tempora, nemo a dolorum similique iure
                  debitis rerum! Eveniet, dolorum!"
                </Typography>
              </Box>
            </Grid>
            <Grid item container xs={12} sm={4}>
              <Box
                display="flex"
                flexDirection="column"
                justify="center"
                alignItems="center"
                py={8}
              >
                <Avatar
                  alt="Diego Yatra"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                  className={classes.avatar}
                />
                <Box mt={2}>
                  <Typography variant="h6">Yaritza Jara</Typography>
                </Box>
                <Box my={1}>
                  <Rating precision={0.5} value={5} readOnly />
                </Box>
                <Typography variant="body2" className={classes.comments}>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  soluta labore et velit temporibus doloribus ratione libero
                  iusto asperiores quo tempora, nemo a dolorum similique iure
                  debitis rerum! Eveniet, dolorum!"
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
