import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SidebarProvider } from "./context/SidebarContext";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </SidebarProvider>
      </Router>
    </>
  );
}

export default App;
