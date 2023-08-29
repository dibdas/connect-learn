import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Notifications from "./components/notifications/Notifications";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Notifications />
      <Routes>
        {" "}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} />
        
         */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
