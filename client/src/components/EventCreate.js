import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createEvent} from '../actions';

class EventCreate extends React.Component {


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
    formValues.startTime = parseInt(formValues.startTime);
    formValues.endTime = parseInt(formValues.endTime);
    //Add the eventID that was passed in as a prop from App.js as a new key in formValues
    formValues.contacts = [formValues.assignee];
    this.props.createEvent(formValues);
    //
    //TODO: confirmation popup message
  }


  render(){
    //handleSubmit is a helper function from redux-form library
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Title"/>
        <Field name="startTime" type="number" component={this.renderInput} label="Start Time"/>
        <Field name="endTime" type="number" component={this.renderInput} label="End Time"/>
        <Field name="location" component={this.renderInput} label="Enter Location"/>
        <Field name="assignee" type="email" component={this.renderInput} label="Enter Assignee"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Form connector
const formWrapped = reduxForm({
  form:'EventCreate'
})(EventCreate);

export default connect(null, {createEvent})(formWrapped)
