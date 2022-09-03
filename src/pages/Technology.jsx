import { useEffect, useState } from "react";
import { Box, Stack, Container, Typography } from "@mui/material";
import { mobile, tablet, desktop } from "../assets/technology";
import { HeaderTitle } from "../components";
import { technology } from "../util/datas";
import { motion } from "framer-motion";

const Technology = () => {
  const [tech, setTech] = useState([]);
  const [techId, setTechId] = useState(1);
  const [screenSize, setScreenSize] = useState(0);
  const [img, setImg] = useState([]);

  const handleClick = ({ target }) => {
    if (target.id === "t3") {
      setTechId(parseInt(3));
    } else if (target.id === "t2") {
      setTechId(parseInt(2));
    } else {
      setTechId(parseInt(1));
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setImg([tech.landscape, 2.535483871]);
    } else {
      setImg([tech.portrait, 0.977229602]);
    }
  }, [screenSize, tech.landscape, tech.portrait]);

  useEffect(() => {
    const data = technology.filter((tech) => tech.id === techId);
    setTech(data[0]);
  }, [techId]);

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
      <Container sx={{ marginTop: "5rem" }}>
        <HeaderTitle id={3} title="SPACE LAUNCH 101" />
        <Stack
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
          }}
        >
          <Box>
            <Stack
              justifyContent="flex-start"
              spacing={5}
              direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            >
              <Stack
                spacing={3}
                direction={{ xs: "row", sm: "row", md: "column", lg: "column" }}
              >
                <Stack
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1px solid gray",
                    justifyContent: "center",
                    background: `${techId === 1 && "white"}`,
                    color: `${techId === 1 && "black"}`,
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                  id="t1"
                >
                  <Typography variant="h4">1</Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1px solid gray",
                    justifyContent: "center",
                    background: `${techId === 2 && "white"}`,
                    color: `${techId === 2 && "black"}`,
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                  id="t2"
                >
                  <Typography variant="h4">2</Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "1px solid gray",
                    justifyContent: "center",
                    background: `${techId === 3 && "white"}`,
                    color: `${techId === 3 && "black"}`,
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                  id="t3"
                >
                  <Typography variant="h4">3</Typography>
                </Stack>
              </Stack>
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
                <Typography variant="subtitle1">THE TERMINOLOGY...</Typography>
                <Typography variant="h3" color="white" my={5}>
                  {tech.name}
                </Typography>
                <Typography variant="body1" pb={3}>
                  {tech.description}
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: img[1] }}>
              <img
                src={img[0]}
                alt="technology"
                width={`${screenSize < 800 && "100%"}`}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Technology;
