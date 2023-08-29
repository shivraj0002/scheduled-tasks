import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import momentTimezones from "moment-timezone";
import { Autocomplete, TextField } from "@mui/material";
import { Divider } from "@mui/joy";
import { TimingsContext } from "../contexts/TimiingsContextProvider";

export default function TimeZoneSelect() {
  const [timeZone, setTimeZone] = useState("UTC");
  const timeZones = momentTimezones.tz.names();
  const [inputTimeZone, setInputTimeZone] = useState("");
  const context = useContext(TimingsContext);

  useEffect(() => {
    context.setTimeZone(timeZone);
  }, [timeZone]);

  return (
    <Box sx={{ minWidth: 120, mt: "10px", p: "10px" }}>
      <Autocomplete
        fullWidth
        value={timeZone}
        onChange={(event, newValue) => {
          if (!newValue) {
            setTimeZone("UTC");
          } else {
            setTimeZone(newValue);
          }
        }}
        inputValue={inputTimeZone}
        onInputChange={(event, newInputValue) => {
          setInputTimeZone(newInputValue);
        }}
        options={timeZones}
        onBlur={() => {
          if (!inputTimeZone) {
            setInputTimeZone("UTC");
            setTimeZone("UTC");
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select Timezone" />
        )}
      />

      <Divider orientation="horizontal" sx={{ mt: "10px" }} />
    </Box>
  );
}
