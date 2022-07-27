import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderTitle = ({ id, title }) => {
  return (
    <Box my={3}>
      <Typography
        varint="h5"
        color="white"
        sx={{
          textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
        }}
      >
        <span>0{id} </span>
        {title}
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
