/**
Created by Deimer Mendez 28/8/23
@author : Deimer Mendez <mendezd@utb.edu.co>
@date : 28/8/23
*/

import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

import { ItemOne } from "./pages/question-1";
import { ItemTwo } from "./pages/question-2";

function App() {
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} centered>
            <Tab label="Question 1" value="1" />
            <Tab label="Question 2" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ItemOne />
        </TabPanel>
        <TabPanel value="2">
          <ItemTwo />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default App;
