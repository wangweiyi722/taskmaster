import React from 'react';
import {Field, reduxForm} from 'redux-form';

class TaskCreate extends React.Component {
  render(){
    return <div>TaskCreate</div>;
  }
}

export default reduxForm({
  form:'TaskCreate'
})(TaskCreate);
