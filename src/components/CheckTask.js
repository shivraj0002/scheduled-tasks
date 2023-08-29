import { Box, Checkbox, Tooltip } from "@mui/joy";
import React from "react";

const CheckTask = ({task}) => {
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
        <Checkbox variant="outlined" label={task.date} />
      </Box>
    </>
  );
};

export default CheckTask;
