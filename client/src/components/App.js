import React from 'react';
import Event from "./Event";
import EventList from "./EventList";
import Task from "./Task";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";
import Header from "./Header";
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom';

const EventPage = () => {
  return (
    <div>
      <Header activeItem="eventsRoute"></Header>
      <Event eventId="1"/>
      <Event eventId="2"/>
    </div>
  )
}

const HomePage = () => {
  return (<div>
    <Header activeItem="homeRoute"></Header>
    TODO: Make a home page
  </div>);
}

const TaskPage = () => {
  return (<div>
    <Header activeItem="myTasksRoute"></Header>
    TODO: Make a tasks page
  </div>);
}

class App extends React.Component{


  render(){

    return(
      <div>
        <BrowserRouter>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/events" exact component={EventPage}></Route>
          <Route path="/mytasks" exact component={TaskPage}></Route>
        </BrowserRouter>
      </div>

    )
  }

}

export default App;
