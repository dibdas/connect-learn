import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Notifications from "./components/notifications/Notifications";
import Dashboard from "./pages/dashboard/Dashboard";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import CourseList from "./pages/courseList/CourseList";
import Quiz from "./pages/quiz/Quiz";
import FormUpload from "./pages/upload/FormUpload";
import NewFormUpload from "./pages/upload/NewFormUpload";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      {/* <Notifications /> */}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/courses/:name" element={<CourseDetails />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uploadquiz" element={<FormUpload />} />
        {/* <Route path="/uploadquiz" element={<NewFormUpload />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
