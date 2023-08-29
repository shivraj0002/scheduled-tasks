import React, { useContext } from "react";
import classes from "../styles/Navbar.module.css";
import { Box, Grid } from "@mui/material";

import CurrentTimer from "./CurrentTimer";
import { Button } from "@mui/joy";
import { TimingsContext } from "../contexts/TimiingsContextProvider";
const Navbar = () => {
  const context = useContext(TimingsContext);

  return (
    <Box width={"100%"}>
      <Box
        sx={{
          padding: "10px",
          boxSizing: "border-box",
        }}
        className={classes.headerBottomLine}
      >
        <Grid container>
          <Grid item xs={2} display={"flex"} justifyContent={"center"}>
            <Button
              variant="outlined"
              size="sm"
              onClick={context.previousWeekClick}
            >
              Privious Week
            </Button>
          </Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"center"}>
            <Button
              variant="outlined"
              size="sm"
              onClick={context.selectThisWeek}
            >
              <CurrentTimer timeZone={context.timeZone} />
            </Button>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"center"}>
            <Button
              variant="outlined"
              size="sm"
              onClick={context.nextWeekClick}
            >
              Next Week
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Navbar;
