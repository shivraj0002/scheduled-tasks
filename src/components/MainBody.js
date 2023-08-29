import { Divider, Stack } from "@mui/joy";
import React from "react";
import CalenderDays from "./CalenderDays";

const days = [
  { day: "Sunday", dayCode: 0 },
  { day: "Monday", dayCode: 1 },
  { day: "Tuesday", dayCode: 2 },
  { day: "Wednesday", dayCode: 3 },
  { day: "Thursday", dayCode: 4 },
  { day: "Friday", dayCode: 5 },
  { day: "Saturday", dayCode: 6 },
];

const MainBody = ({ startDate, endDate, timeZone, tasks }) => {
  return (
    <Stack divider={<Divider orientation="horizontal" />}>
      {days.map((day) => (
        <CalenderDays
          key={day.dayCode}
          day={day}
          startDate={startDate}
          endDate={endDate}
          timeZone={timeZone}
          tasks={tasks}
        />
      ))}
    </Stack>
  );
};

export default MainBody;
