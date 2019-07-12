import React from "react";

import Event from './Event';

const EventList = (props) => {

  if(!props.listOfEventIds){
    return <div>No Events</div>
  }
  else{
    const events = props.listOfEventIds.map((event) => {
      return <Event key={event} eventId={event}/>;
    });
    return <div className="ui divided items">{events}</div>
  }

}
export default EventList;
