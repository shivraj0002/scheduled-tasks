import moment from "moment";
import React, { createContext, useEffect, useState } from "react";
import data from "../DummyData/data";

export const TimingsContext = createContext();

const TimingsContextProvider = ({ children }) => {
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
    <TimingsContext.Provider
      value={{
        previousWeekClick,
        selectThisWeek,
        nextWeekClick,
        startDate,
        endDate,
        timeZone,
        tasks,
        setTimeZone
      }}
    >
      {children}
    </TimingsContext.Provider>
  );
};

export default TimingsContextProvider;
