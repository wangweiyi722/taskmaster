import React from 'react';
import Event from "./Event";
import EventList from "./EventList";
import Task from "./Task";
class App extends React.Component{

  render(){

    return(
      <div>
        <EventList listOfEventIds={[1,2]}/>
        <Task taskId={1}/>
      </div>
    )
  }

}

export default App;
