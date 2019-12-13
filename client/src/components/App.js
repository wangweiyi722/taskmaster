import React from 'react';
import Event from "./Event";
import EventCreate from "./EventCreate";
import EventList from "./EventList";
import Task from "./Task";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";
import Header from "./Header";
import {Router, Route, Link, withRouter} from 'react-router-dom';
import history from '../history';

const EventPage = () => {
  return (
    <div>
      <Header activeItem="eventsRoute"></Header>
      <EventList/>
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

const EventCreatePage = () => {
  return (<div>
    <Header activeItem="myEventCreateRoute"></Header>
    <EventCreate/>
  </div>);
}

class App extends React.Component{


  render(){

    return(
      <div>
        <Router history={history}>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/events" exact component={EventPage}></Route>
          <Route path="/mytasks" exact component={TaskPage}></Route>
          <Route path="/eventcreate" exact component={EventCreatePage}></Route>
        </Router>
      </div>

    )
  }

}

export default App;
