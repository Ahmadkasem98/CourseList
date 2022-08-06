import React from "react";

const CourseForm = (props) => {

    return (
        <form onSubmit={props.AddCourses}>
            <input type="text" placeholder="Enter type Course" onChange={props.updateCourse} value={props.current} />
            <button type="submit" className="submit">Add Course</button>
       </form>
    )
}

export default CourseForm