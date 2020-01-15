import React from 'react';
import Event from "./Event";
import EventCreate from "./EventCreate";
import EventList from "./EventList";
import Task from "./Task";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";
import Header from "./Header";
import GoogleAuth from './GoogleAuth';
import {Router, Route, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCurrentUser,signIn} from '../actions'
import history from '../history';

/*
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

const TaskPage = (currentUserId) => {
  return (<div>
    <Header activeItem="myTasksRoute"></Header>

    <TaskList assignee={currentUserId}></TaskList>


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
*/
class App extends React.Component{

  componentDidMount(){

  }

  EventPage = () => {
    return (
      <div>
        <Header activeItem="eventsRoute"></Header>
        <EventList/>
      </div>

    )
  }

  HomePage = () => {
    return (<div>
      <Header activeItem="homeRoute"></Header>
      <div style={{"display":"inline-block","width":"50%","border":"1px solid black"}}>
        EventList
      </div>
      <div style={{"display":"inline-block","width":"50%","border":"1px solid black"}}>
        Today's events
      </div>
    </div>);
  }

  TaskPage = () => {
    console.log("TaskPage");
    console.log(this.props.currentUserId);
    return (<div>
      <Header activeItem="myTasksRoute"></Header>

      <TaskList assignee={this.props.currentUserId}></TaskList>


    </div>);
  }

  EventCreatePage = () => {
    return (<div>
      <Header activeItem="myEventCreateRoute"></Header>
      <EventCreate/>
    </div>);
  }

  SingleEventPage = (props) => {

    return (<div>
      <Header activeItem="eventsRoute"></Header>
      <Link to={`/events`}><i class="angle left icon"></i> Back to events list</Link>
      <Event eventId={props.match.params.id}/>
    </div>
    )
  }

  render(){

    console.log("currentUserId");
    console.log(this.props.currentUserId);

    return(

      <div>
        <Router history={history}>
          <Route path="/" exact component={this.HomePage}></Route>
          <Route path="/events" exact component={this.EventPage}></Route>
          <Route path="/mytasks" exact component={this.TaskPage}></Route>
          <Route path="/eventcreate" exact component={this.EventCreatePage}></Route>
          <Route path="/events/:id" exact component={this.SingleEventPage}></Route>
        </Router>
      </div>

    )
  }


}

//TODO: create mapStateToProps function to get the auth information mapped to App.js props.
const mapStateToProps = (state)=>{

  if(state.auth.user===null){
    return {};
  }
  return {
    currentUserId:state.auth.user.email
  }
}

export default connect(mapStateToProps,{fetchCurrentUser:fetchCurrentUser,signIn:signIn})(App);
