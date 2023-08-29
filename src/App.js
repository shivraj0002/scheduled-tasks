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
  const [timeZone, setTimeZone] = useState("UTC");
  const [startDate, setStartDate] = useState(
    moment().startOf("week").tz(timeZone)
  );
  const [endDate, setEndDate] = useState(moment().endOf("week").tz(timeZone));
  const [tasks, setTasks] = useState(data);

  const previousWeekClick = () => {
    setStartDate(moment(startDate).subtract(1, "week").startOf("week"));
    setEndDate(moment(startDate).subtract(1, "week").endOf("week"));
  };

  const nextWeekClick = () => {
    setStartDate(endDate.clone().add(1, "day").startOf("week"));
    setEndDate(endDate.clone().add(1, "week").endOf("week"));
  };

  const selectThisWeek = () => {
    setStartDate(moment().startOf("week").tz(timeZone));
    setEndDate(moment().endOf("week").tz(timeZone));
  };

  useEffect(() => {
    setStartDate(moment(startDate).tz(timeZone));
    setEndDate(moment(endDate).tz(timeZone));
  }, [timeZone]);

  return (
    <Container
      maxWidth={"lg"}
      component={Sheet}
      variant="outlined"
      sx={{ height: "100vh", overflowX: "hidden" }}
      disableGutters={true}
    >
      <Navbar
        previousWeekClick={previousWeekClick}
        nextWeekClick={nextWeekClick}
        timeZone={timeZone}
        selectThisWeek={selectThisWeek}
      />
      <TimeZoneSelect
        updateTimeZone={(time) => {
          setTimeZone(time);
        }}
      />
      <MainBody
        startDate={startDate}
        endDate={endDate}
        timeZone={timeZone}
        tasks={tasks}
      />
    </Container>
  );
}

export default App;
