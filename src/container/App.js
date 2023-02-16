import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "../components/Add";

function App() {
  const [theme, setTheme] = useState("light");
  const darkmode = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <ThemeProvider theme={darkmode}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Sidebar setTheme={setTheme} theme={theme}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
