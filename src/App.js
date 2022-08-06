import React , {Component} from "react";
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";

class App extends Component {
state = {
  courses : [
    {name : "Html"},
    {name : "Css"},
    {name : "Jquery"}
  ] ,
  current : ''
}

// Update Course
updateCourse = (e) => {
  this.setState ({
    current : e.target.value
  })
}

// Add Courses
AddCourses = (e) => {
  e.preventDefault()
  let current = this.state.current
  let courses = this.state.courses
  if(current !== ''){
  courses.push({name : current})
  this.setState({
    courses ,
    current : ''
  })
}
}

deleteCourse = (index) => {
  let courses = this.state.courses
  courses.splice(index,1)
  this.setState({
    courses
  })
}

// Edit Course 
EditCourse = (index , value) => {
  let courses = this.state.courses
  let course = courses[index]
  course['name'] = value
  this.setState({
    courses
  })

}
  render (){
    let {courses} = this.state
    let courselist = courses.map( (course , index) => {
      return <CourseList details={course} key={index} index={index} courses={this.state.courses} deleteCourse={this.deleteCourse} EditCourse={this.EditCourse} />
    } )
  return (
    <section className="App">
    <h2>Add Courses</h2>
    <CourseForm current={this.state.current} updateCourse={this.updateCourse} AddCourses={this.AddCourses}/>
    <ul>
      {this.state.courses.length > 0 ? courselist : <p>No Courses To Show ! Please Add New Course</p>}
    </ul>

    </section>
  );
}
}
export default App;
