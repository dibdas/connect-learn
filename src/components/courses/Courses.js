import React from "react";
import { Link } from "react-router-dom";
import "./Courses.scss";

function Courses({ name }) {
  return (
    <div className="Courses">
      <Link to={`/courses/${name}`}>{name}</Link>
    </div>
  );
}

export default Courses;
