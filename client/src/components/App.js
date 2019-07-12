import React from 'react';
import Event from "./Event";
import EventList from "./EventList";
import Task from "./Task";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";
import {BrowserRouter, Route, Link} from 'react-router-dom';


const testTask = () => {
  return <Task taskId="t1"/>
}

class App extends React.Component{



  render(){



    return(
      <div>
        <BrowserRouter>
          <Route path="/tasks/new" exact component={TaskCreate}/>
          <Route path="/" exact component={testTask}/>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
