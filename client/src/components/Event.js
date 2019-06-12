import React from 'react';
import {connect} from 'react-redux';
import {fetchEvent} from '../actions';

class Event extends React.Component{

  //Event properties:
  //id
  //title
  //date
  //time
  //location
  //task list
  componentDidMount(){
    this.props.fetchEvent(this.props.eventId).catch(error=>{
      console.log(error);
    });
  }


  render(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>test id:</td><td>{this.props.eventId}</td>
              <td>test title:</td><td>{this.props.title}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id:state.event.id,
    title:state.event.title,
    date:state.event.date,
    time:state.event.time,
    location:state.event.location,
    tasklist:state.event.tasklist
  };
}

export default connect(mapStateToProps,{fetchEvent:fetchEvent})(Event);
