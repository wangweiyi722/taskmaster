import React from 'react';
import {Field, reduxForm} from 'redux-form';

class TaskCreate extends React.Component {

  constructor(props){
    super(props);
    console.log(props.eventID);

  }

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

  onSubmit(formValues){
    console.log(formValues);
  }

  render(){
    //handleSubmit is a helper function from
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

export default reduxForm({
  form:'TaskCreate'
})(TaskCreate);
