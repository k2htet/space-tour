import { Stack, Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { logo, menu, close } from "../assets/shared";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box
      width="100%"
      sx={{
        position: "fixed",
        top: "1.3rem",
        zIndex: "50",
      }}
    >
      <Stack sx={{ width: "100%" }}>
        <Link to="/">
          <Box pl="3rem">
            <img src={logo} alt="logo" />
          </Box>
        </Link>

        <Stack
          sx={{
            background: "rgba(151, 151, 151, 0.2)",

            paddingLeft: { lg: "7rem", md: "4rem", sm: "3rem" },
            paddingRight: { lg: "5rem", md: "3rem", sm: "2rem" },
            gap: { lg: 4, md: 3, sm: 2 },
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          }}
          justifyContent="flex-start"
          className="nav-list"
        >
          <NavLink to="/" className="menu">
            <Typography variant="subtitle2">
              00 <span className="nav-span">HOME</span>
            </Typography>
          </NavLink>

          <NavLink to="/destination" className="menu">
            <Typography variant="subtitle2">
              01 <span className="nav-span">DESTINATION</span>
            </Typography>
          </NavLink>
          <NavLink to="/crew" className="menu">
            <Typography variant="subtitle2">
              02 <span className="nav-span">CREW</span>
            </Typography>
          </NavLink>

          <NavLink to="/technology" className="menu">
            <Typography variant="subtitle2">
              03 <span className="nav-span">TECHNOLOGY</span>
            </Typography>
          </NavLink>
        </Stack>

        {open && (
          <Stack
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              minHeight: "100vh",
              width: "50vw",

              zIndex: 99,
            }}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            pl={3}
            className="mobile-nav"
          >
            <Box
              sx={{
                display: { lg: "none", md: "none", sm: "block", xs: "block" },
                paddingRight: "2rem",
                cursor: "pointer",
                marginLeft: "auto",
                marginTop: "1.8rem",
              }}
              onClick={handleClick}
            >
              <img src={close} alt="menu" />
            </Box>
            <NavLink to="/" className="menu" onClick={handleClick}>
              <Typography variant="subtitle2">
                00 <span className="nav-span">HOME</span>
              </Typography>
            </NavLink>

            <NavLink to="/destination" className="menu" onClick={handleClick}>
              <Typography variant="subtitle2">
                01 <span className="nav-span">DESTINATION</span>
              </Typography>
            </NavLink>
            <NavLink to="/crew" className="menu" onClick={handleClick}>
              <Typography variant="subtitle2">
                02 <span className="nav-span">CREW</span>
              </Typography>
            </NavLink>

            <NavLink to="/technology" className="menu" onClick={handleClick}>
              <Typography variant="subtitle2">
                03 <span className="nav-span">TECHNOLOGY</span>
              </Typography>
            </NavLink>
          </Stack>
        )}

        <Box
          sx={{
            display: { lg: "none", md: "none", sm: "block", xs: "block" },
            paddingRight: "2rem",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <img src={menu} alt="menu" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
