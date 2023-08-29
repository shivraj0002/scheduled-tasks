import logo from "./logo.svg";
import "./App.css";
import { Container, StyledEngineProvider } from "@mui/material";
import { Sheet } from "@mui/joy";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import TimeZoneSelect from "./components/TimeZoneSelect";
import MainBody from "./components/MainBody";
import moment from "moment";
import data from "./DummyData/data";

function App() {
  return (
    <Container
      maxWidth={"lg"}
      component={Sheet}
      variant="outlined"
      sx={{ height: "100vh", overflowX: "hidden" }}
      disableGutters={true}
    >
      <Navbar />
      <TimeZoneSelect />
      <MainBody />
    </Container>
  );
}

export default App;
