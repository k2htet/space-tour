import { useEffect, useState } from "react";
import { Box, Stack, Container, Grid, Typography } from "@mui/material";
import { mobile, tablet, desktop } from "../assets/destination";
import { HeaderTitle } from "../components";
import { destinations } from "../util/datas";
import { motion } from "framer-motion";
const Destination = () => {
  const [destination, setDestination] = useState([]);
  const [desName, setDesName] = useState("Moon");

  useEffect(() => {
    const data = destinations.filter((des) => des.name === desName);
    setDestination(data[0]);
  }, [desName]);

  const handleClick = ({ target }) => {
    setDesName(target.innerText);
  };

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
        paddingTop: { xs: "2rem", sm: "2rem", md: "1rem" },
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <Container sx={{ marginTop: "3rem" }}>
        <HeaderTitle id={1} title="PICK YOUR DESTINATION" />
        <Grid container alignItems="center" px={3} spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack
              sx={{
                margin: {
                  xs: "auto",
                  sm: "auto",
                  md: "left",
                  lg: "left",
                },
                width: { xs: "170px", sm: "170px", md: "300px", lg: "445px" },
                height: { xs: "170px", sm: "170px", md: "300px", lg: "445px" },
              }}
            >
              <img
                src={destination.image}
                alt="destination"
                width="100%"
                height="100%"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                borderBottom: "2px solid gray",
                paddingBottom: "2rem",
                marginTop: "2rem",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              <Stack
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "flex-center",
                    lg: "flex-start",
                  },
                }}
                spacing={2}
                mb={3}
              >
                <Typography
                  variant="subtitle2"
                  p={1}
                  className={`menu ${desName === "Moon" && "active"}`}
                  onClick={handleClick}
                >
                  Moon
                </Typography>
                <Typography
                  variant="subtitle2"
                  p={1}
                  className={`menu ${desName === "Mars" && "active"}`}
                  onClick={handleClick}
                >
                  Mars
                </Typography>
                <Typography
                  variant="subtitle2"
                  p={1}
                  className={`menu ${desName === "Europa" && "active"}`}
                  onClick={handleClick}
                >
                  Europa
                </Typography>
                <Typography
                  variant="subtitle2"
                  p={1}
                  className={`menu ${desName === "Titan" && "active"}`}
                  onClick={handleClick}
                >
                  Titan
                </Typography>
              </Stack>
              <Typography variant="h2" color="white" my={3}>
                {destination.name}
              </Typography>
              <Typography variant="body1">{destination.description}</Typography>
            </Box>
            <Stack justifyContent="space-between" alignItems="center" my={3}>
              <Box>
                <Typography variant="subtitle2">AVG. DISTANCE</Typography>
                <Typography variant="subtitle1" mt={3} color="white">
                  {destination.distance}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">EST. TRAVEL TIME</Typography>
                <Typography variant="subtitle1" mt={3} color="white">
                  {destination.travel}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Destination;
