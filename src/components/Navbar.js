import React from "react";
import classes from "../styles/Navbar.module.css";
import { Box, Grid } from "@mui/material";

import CurrentTimer from "./CurrentTimer";
import { Button } from "@mui/joy";
const Navbar = ({
  nextWeekClick,
  previousWeekClick,
  timeZone,
  selectThisWeek,
}) => {

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
            <Button variant="outlined" size="sm" onClick={previousWeekClick}>
              Privious Week
            </Button>
          </Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"center"}>
            <Button variant="outlined" size="sm" onClick={selectThisWeek}>
              <CurrentTimer timeZone={timeZone} />
            </Button>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"center"}>
            <Button variant="outlined" size="sm" onClick={nextWeekClick}>
              Next Week
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Navbar;
