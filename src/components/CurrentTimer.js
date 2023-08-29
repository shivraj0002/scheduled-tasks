import moment from "moment";
import React, { useEffect, useState } from "react";

const CurrentTimer = ({ timeZone }) => {
  const [currentTime, setCurrntTime] = useState(moment().tz(timeZone));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrntTime(moment().tz(timeZone));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeZone]);


  return <span>{currentTime.format("YYYY-MM-DD HH:mm:ss")}</span>;
};

export default CurrentTimer;
