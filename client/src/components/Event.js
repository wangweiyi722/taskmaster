import React from 'react';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions';

class Event extends React.Component{

  //Event properties:
  //id
  //title
  //date
  //time
  //location
  //task list
  componentDidMount(){
    this.props.fetchEvents().catch(error=>{
      console.log(error);
    });
  }


  render(){
    return(
      <div>
        "Event"
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    "id":state.id,
    "title":state.title,
    "date":state.date,
    "time":state.time,
    "location":state.location,
    "tasklist":state.tasklist
  };
}

export default connect(mapStateToProps,{fetchEvents:fetchEvents})(Event);
