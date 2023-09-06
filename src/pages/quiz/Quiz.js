import React from "react";
import "./Quiz.scss";
import courses from "./../../course.json";
import Courses from "../../components/courses/Courses";
function Quiz() {
  return (
    <div>
      <h1>Quiz List</h1>
      <ul className="courses no-list-style ">
        {courses.map((course) => (
          <li key={course.id} className="course">
            <Courses name={course.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
