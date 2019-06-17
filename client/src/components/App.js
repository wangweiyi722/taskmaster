import React from 'react';
import Event from "./Event";
import EventList from "./EventList";
import Task from "./Task";
import TaskList from "./TaskList";
class App extends React.Component{

  render(){

    return(
      <div>
        <EventList listOfEventIds={["e1","e2"]}/>
      </div>
    )
  }

}

export default App;
