import { Box, Divider, Grid, Sheet, Tooltip, Typography } from "@mui/joy";
import React, { useContext, useEffect, useMemo, useState } from "react";
import CheckTask from "./CheckTask";
import moment from "moment";
import { TimingsContext } from "../contexts/TimiingsContextProvider";

const CalenderDays = ({ day  }) => {
  const context = useContext(TimingsContext);
  const [thisDate, setThisDate] = useState(
    moment(context.startDate).add(day.dayCode, "days")
  );
  const filteredTasks = useMemo(() => {
    const thisDayTasks = context.tasks.filter((task) => {
      const tempTaskTime = moment(task.date);
      return (
        tempTaskTime.isBetween(context.startDate, context.endDate, "day", "[]") &&
        tempTaskTime.day() === day.dayCode
      );
    });
    return thisDayTasks;
  }, [context.tasks, context.startDate, context.endDate]);

  useEffect(() => {
    setThisDate(
      moment(context.startDate).startOf("week").add(day.dayCode, "days").tz(context.timeZone)
    );
  }, [context.startDate, context.timeZone]);
  return (
    <Grid container>
      <Grid xs={2} display={"flex"} justifyContent={"space-between"}>
        <Tooltip title={`${moment(thisDate).format("LL")}`} arrow>
          <Box
            minHeight={"120px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ flexGrow: 1 }}
          >
            <Typography level="title-lg" color="danger">
              {day.day}
            </Typography>
            <Typography level="title-sm" color="neutral">
              {thisDate
                .clone()
                .startOf("week")
                .add(day.dayCode, "days")
                .tz(context.timeZone)
                .format("DD/MM")}
            </Typography>
          </Box>
        </Tooltip>
        <Divider orientation="vertical" />
      </Grid>
      <Grid xs={10} display={"flex"} alignItems={"center"} p={"10px"}>
        <Sheet
          variant="outlined"
          sx={{
            flexGrow: 1,
            height: "90%",
            display: "flex",
            gap: "3px",
            padding: "10px",
          }}
        >
          {filteredTasks.map((task) => {
            return <CheckTask key={task.id} task={task} />;
          })}
        </Sheet>
      </Grid>
    </Grid>
  );
};

export default CalenderDays;
