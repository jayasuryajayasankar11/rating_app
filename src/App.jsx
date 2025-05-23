import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import AwalTab from "./awal";
import Ratings from "./components/rating";
import Star from "./components/star";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "museo-sans, sans-serif",
      fontWeight: 400,
      fontStyle: "normal",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <AwalTab />
      </ThemeProvider>
    </>
  );
}

export default App;
