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

    <TaskList assignee="wangweiyi722@gmail.com"></TaskList>

    TODO: Make a tasks page
  </div>);
}

const EventCreatePage = () => {
  return (<div>
    <Header activeItem="myEventCreateRoute"></Header>
    <EventCreate/>
  </div>);
}

const SingleEventPage = (props) => {

  return (<div>
    <Header activeItem="eventsRoute"></Header>
    <Link to={`/events`}><i class="angle left icon"></i> Back to events list</Link>
    <Event eventId={props.match.params.id}/>
  </div>
  )
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
          <Route path="/events/:id" exact component={SingleEventPage}></Route>
        </Router>
      </div>

    )
  }

}

export default App;
