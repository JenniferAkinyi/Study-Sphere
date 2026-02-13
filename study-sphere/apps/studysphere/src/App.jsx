import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SidebarProvider } from "./context/SidebarContext";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PostDetails from "./components/Posts/PostDetails";
import StudyScreen from "./components/Study Group/StudyScreen";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <>
      <Router>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route element={<AppLayout />}>
              <Route path="/post/:id" element={<PostDetails />} />
              <Route path="/studygroup" element={<StudyScreen/>}/>
            </Route>
          </Routes>
        </SidebarProvider>
      </Router>
    </>
  );
}

export default App;
