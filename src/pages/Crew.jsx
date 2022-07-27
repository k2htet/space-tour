import { useEffect, useState } from "react";
import { Box, Stack, Container, Grid, Typography } from "@mui/material";
import { mobile, tablet, desktop } from "../assets/crew";
import { HeaderTitle } from "../components";
import { crews } from "../util/datas";
import { motion } from "framer-motion";

const Crew = () => {
  const [crew, setCrew] = useState([]);
  const [crewId, setCrewId] = useState(1);

  const handleClick = ({ target }) => {
    setCrewId(parseInt(target.id));
  };

  useEffect(() => {
    const data = crews.filter((crew) => crew.id === crewId);
    setCrew(data[0]);
  }, [crewId]);

  return (
    <Stack
      sx={{
        backgroundImage: {
          xs: `url(${mobile})`,
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
      <Container sx={{ marginTop: "5rem" }}>
        <Grid container alignItems="center" rowSpacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ display: { md: "none", lg: "none" } }}
          >
            <Box
              sx={{
                backgroundImage: `url(${crew.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "contain",
                width: "100%",
                paddingTop: { xs: "60%", sm: "60%", md: "75%", lg: "100%" },
                borderBottom: "2px solid grey",
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <HeaderTitle id={2} title="MEET YOUR CREW" />
            <Box
              mt={5}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              <Typography variant="h4">{crew.role}</Typography>
              <Typography variant="h3" color="white" my={3}>
                {crew.name}
              </Typography>
              <Typography variant="body1">{crew.bio}</Typography>
            </Box>

            <Stack
              my={5}
              sx={{
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
              spacing={2}
            >
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  background: `${crewId === 1 ? "white" : "grey"}`,
                  cursor: "pointer",
                }}
                id="1"
                onClick={handleClick}
              ></Box>
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  background: `${crewId === 2 ? "white" : "grey"}`,
                  cursor: "pointer",
                }}
                id="2"
                onClick={handleClick}
              ></Box>
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  background: `${crewId === 3 ? "white" : "grey"}`,
                  cursor: "pointer",
                }}
                id="3"
                onClick={handleClick}
              ></Box>
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  background: `${crewId === 4 ? "white" : "grey"}`,
                  cursor: "pointer",
                }}
                id="4"
                onClick={handleClick}
              ></Box>
            </Stack>
          </Grid>

          <Grid
            item
            sx={{ display: { xs: "none", sm: "none", md: "grid", lg: "grid" } }}
            md={6}
            lg={6}
          >
            <Box
              sx={{
                backgroundImage: `url(${crew.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "contain",
                width: "100%",
                paddingTop: { xs: "60%", sm: "60%", md: "75%", lg: "100%" },
                borderBottom: "2px solid grey",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Crew;
