import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0B0D17",
    },
    secondary: {
      main: "#D0D6F9",
    },
    info: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Bellefair", "Barlow Condensed", "Barlow"],
    fontSize: 14,
  },
  components: {
    MuiStack: {
      defaultProps: {
        justifyContent: "space-between",
        alignItems: "center",
        direction: "row",
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: "9.375rem",
  textTransform: "uppercase",
  lineHeight: 1.1,
  fontFamily: "Bellefair",
  fontWeight: 400,

  [theme.breakpoints.down("md")]: {
    fontSize: "6.25rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
};

theme.typography.h2 = {
  fontSize: "6.25rem",
  textTransform: "uppercase",
  lineHeight: 1.1,
  fontFamily: "Bellefair",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
};

theme.typography.h3 = {
  fontSize: "3.5rem;",
  textTransform: "uppercase",
  lineHeight: 1.1,
  fontFamily: "Bellefair",
  fontWeight: 400,

  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.125rem",
  },
};

theme.typography.h4 = {
  fontSize: "2rem;",
  textTransform: "uppercase",
  lineHeight: 1.1,
  fontFamily: "Bellefair",
  fontWeight: 400,

  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.125rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.75rem;",
  textTransform: "uppercase",
  lineHeight: 1.2,
  letterSpacing: "4.75px",
  fontFamily: "Barlow Condensed",
  fontWeight: 400,
};

theme.typography.subtitle1 = {
  fontSize: "1.6rem;",
  textTransform: "uppercase",
  fontFamily: "Bellefair",
  letterSpacing: "2.7px",
  fontWeight: 400,
  lineHeight: "0.5rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.125rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
};

theme.typography.subtitle2 = {
  fontSize: "1.125rem;",
  letterSpacing: "2.7px",
  fontFamily: "Barlow Condensed",
  fontWeight: 400,
  color: "white",
};

theme.typography.body1 = {
  fontSize: "1.125rem;",
  letterSpacing: "2.35px",
  fontFamily: "Barlow",
};
