import React from 'react';
import {Field, reduxForm} from 'redux-form';

class TaskCreate extends React.Component {

  //renderInput is passed an argument with various properties whenever it is called within a component
  renderInput(formProps){
    //need to take relevant properties out of formProps and assign onChange and value properties
    return (
      <div>
        <label>{formProps.label}</label>
        <input {...formProps.input}/>
      </div>

    );
  }

  onSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form className="ui form">
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <Field name="deadline" component={this.renderInput} label="Enter Deadline"/>
        <Field name="assignee" component={this.renderInput} label="Enter Assignee"/>
      </form>
    );
  }
}

export default reduxForm({
  form:'TaskCreate'
})(TaskCreate);
