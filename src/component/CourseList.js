import React , { Component, Fragment } from "react";

class CourseList extends Component {
     
    state = { 
        isEdit : false
    }

   renderCourse = () => {
            return (
            <li>
            <span>{this.props.details.name}</span>
            <button onClick={() => this.toggleForm()}>Edit Course</button>
            <button onClick={ () => {this.props.deleteCourse(this.props.index)}}>Delete</button>
         </li>
            )
     
   }

   // toggle function 
   toggleForm = () => {
       let {isEdit} = this.state;
       this.setState({
           isEdit: !isEdit
       })
   }
   
   editItem = (e) => {
       e.preventDefault()
       this.props.EditCourse(this.props.index , this.input.value )
       this.toggleForm()


   }
   renderUpdateForm = () => {
       return (
           <form onSubmit={this.editItem}>
           <input type="text" ref={ (value) => {this.input = value}} defaultValue={this.props.details.name}/>
           <button>Update Course</button>
           </form>
       )
   }
    render(){

        return(
            <Fragment>
                { this.state.isEdit ? this.renderUpdateForm() : this.renderCourse()} 
            </Fragment>
        )
    }
}

export default CourseList