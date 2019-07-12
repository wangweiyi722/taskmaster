import React from 'react';
import Event from "./Event";
import EventList from "./EventList";
import Task from "./Task";
import TaskList from "./TaskList";
class App extends React.Component{

  render(){

    return(
      <div>
        <Task taskId="t1"/>
      </div>
    )
  }

}

export default App;
