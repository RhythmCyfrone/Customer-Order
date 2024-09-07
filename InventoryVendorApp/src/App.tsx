import { Box } from "@mui/material";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box display={"flex"} width={"100%vw"} height={"100vh"}>
      <Sidebar />
      <Main />
    </Box>
  );
}

export default App;
