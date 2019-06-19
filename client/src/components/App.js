import React from 'react';
import Event from "./Event";
import EventList from "./EventList";
import Task from "./Task";
import TaskList from "./TaskList";
class App extends React.Component{

  render(){

    return(
      <div>
        <TaskList listOfTaskIds={["t1","t2"]}/>
      </div>
    )
  }

}

export default App;
