import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Box minH={"100vh"}>
      <Routes>
        <Route path="/" eLement={<HomePage />} />
        <Route path="/create" eLement={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
