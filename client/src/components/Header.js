import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const changeActive = (e) => {
  var active = document.getElementsByClassName("item active");
  active[0].className="item";
  e.target.className="item active";
}

const Header = (props) => {

  var activeHeader;
  var menuComponents = [
    <Link to="/" id="homeRoute" className="item">Home</Link>,
    <Link to="/events" id="eventsRoute" className="item">Events</Link>,
    <Link to="/mytasks" id="myTasksRoute" className="item">My Tasks</Link>,
    <Link to="/eventcreate" id="myEventCreateRoute" className="item">New Event</Link>,
    <GoogleAuth></GoogleAuth>
  ]

  var activeIndex;
  menuComponents.forEach((item,index)=>{
    if(props.activeItem==item.props.id){
      activeIndex = index;
    }
  });

  menuComponents[activeIndex]=React.cloneElement(menuComponents[activeIndex],{className:"active item"});
/*
  if(props.activeItem=="homeRoute"){
    activeHeader=(<div class="ui tabular menu">
    {menuComponents}
    </div>)
  }
  else if (props.activeItem=="eventsRoute") {
    activeHeader = (<div class="ui tabular menu">
    <Link to="/" class="item">
      Home
    </Link>
    <Link to="/events" class="item active">
      Events
    </Link>
    <Link to="/mytasks" class="item">
      My Tasks
    </Link>
    <GoogleAuth></GoogleAuth>
    </div>)
  }
  else if (props.activeItem=="mytasks") {
    activeHeader = (<div class="ui tabular menu">
    <Link to="/" class="item">
      Home
    </Link>
    <Link to="/events" class="item">
      Events
    </Link>
    <Link to="/mytasks" class="item active">
      My Tasks
    </Link>
    <GoogleAuth></GoogleAuth>
    </div>)
  }
*/
  return (<div className="ui tabular menu">
    {menuComponents}
  </div>);
}

export default Header;
