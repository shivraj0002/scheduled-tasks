import { Box, Checkbox, Tooltip } from "@mui/joy";
import moment from "moment";
import React, { useContext } from "react";
import { TimingsContext } from "../contexts/TimiingsContextProvider";

const CheckTask = ({ task }) => {
  const context = useContext(TimingsContext);
  return (
    <>
      <Box
        sx={{
          borderRadius: "5px",
          border: "1px solid lightgrey",
          padding: "4px",
          maxHeight: "20px",
        }}
        component={Tooltip}
        title={`id: ${task.id}, name: ${task.name}, date: ${task.date}, time: ${task.time}`}
        arrow
      >
        <Checkbox
          variant="outlined"
          label={`${moment(task.date)
            .tz(context.timeZone)
            .format("HH.mm.ss a")}`}
        />
      </Box>
    </>
  );
};

export default CheckTask;
