import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {selectEvent} from '../actions';
import {createTask} from '../actions';

class TaskCreate extends React.Component {


  //renderInput is passed an argument with various properties whenever it is called within a component
  renderInput(formProps){
    //need to take relevant properties out of formProps and assign onChange and value properties using ES2015 syntax
    //     // equivalent
              // <input
              //   onChange={formProps.input.onChange}
              //   value={formProps.input.value}/>
    console.log(formProps);
    return (

      <div>
        <label>{formProps.label}</label>
        <input {...formProps.input}/>
      </div>

    );
  }

  onSubmit = (formValues)=>{
    console.log(formValues);
    //Add the eventID that was passed in as a prop from App.js as a new key in formValues
    formValues.eventId = this.props.eventId;
    formValues.completed = false;
    formValues.deadline = parseInt(formValues.deadline);
    this.props.createTask(formValues);
    window.location.reload();
  }


  render(){
    //handleSubmit is a helper function from redux-form library
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <Field name="deadline" component={this.renderInput} label="Enter Deadline"/>
        <Field name="assignee" component={this.renderInput} label="Enter Assignee"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Form connector
const formWrapped = reduxForm({
  form:'TaskCreate'
})(TaskCreate);

export default connect(null, {createTask,selectEvent})(formWrapped)
