import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
import Login from "./routes/Login"; 
import Menu from "./routes/Menu";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Menu />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
