import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import ReservasList from "./pages/ReservasList";
import theme from "./theme";
import "react-toastify/dist/ReactToastify.css";
import HorariosLivres from "./components/HorariosLivres";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ReservasList />} />
          <Route path="/horarios-livres" element={<HorariosLivres />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
