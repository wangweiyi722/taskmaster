import React from 'react';
import Event from "./Event";
import EventList from "./EventList";
import Task from "./Task";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";
import {BrowserRouter, Route, Link} from 'react-router-dom';


class App extends React.Component{

  render(){
    return(
      <div>
        <Event eventId="1"/>
        <Event eventId="2"/>
      </div>

    )
  }

}

export default App;
