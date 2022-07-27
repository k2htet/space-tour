import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { desktop, tablet, phone } from "../assets/home";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const LargeButton = styled("a")(() => ({
  display: "grid",
  placeItems: "center",
  aspectRatio: "1",
  padding: "3rem",
  borderRadius: "50%",
  background: "white",
  color: "black",
  fontFamily: "Bellefair",
  fontSize: "1.125rem",
  cursor: "pointer",
  letterSpacing: 1.1,

  transition: "all 0.5s",
  "&:hover": {
    boxShadow: "0px 0px 0px 30px #585858",
  },
}));
const Home = () => {
  return (
    <Stack
      sx={{
        backgroundImage: {
          xs: `url(${phone})`,
          sm: `url(${tablet})`,
          md: `url(${tablet})`,
          lg: `url(${desktop})`,
        },

        width: "100%",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "auto",
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box sx={{ textAlign: { md: "left", sm: "center", xs: "center" } }}>
              <Typography variant="h5">SO, YOU WANT TO TRAVEL TO</Typography>
              <Typography
                variant="h1"
                color="info.main"
                sx={{ marginY: { md: "0", sm: "2rem", xs: "1.5rem" } }}
              >
                Space
              </Typography>
              <Typography variant="body1">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Stack
              sx={{
                width: "100%",
                height: "100%",
                marginTop: { md: 0, sm: "2rem", xs: "1.5rem" },
              }}
              justifyContent="center"
            >
              <LargeButton>EXPLORE</LargeButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Home;
