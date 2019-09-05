import React from 'react';
import {connect} from 'react-redux';
import {fetchEvent} from '../actions';
import {fetchTasksByEventId} from '../actions';
import TaskList from './TaskList';

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
    this.props.fetchTaskByEventId(this.props.eventId).catch(error=>{
      console.log(error);
    })
  }

  renderTasks(){

  }

  render(){
    console.log("event");
    console.log(this.props);
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>test id:</td><td>{this.props.id}</td>
            </tr>
            <tr>
              <td>test title:</td><td>{this.props.title}</td>
            </tr>
            <tr>
              <td>test start time:</td><td>{this.props.startTime}</td>
            </tr>
            <tr>
              <td>test end time:</td><td>{this.props.endTime}</td>
            </tr>
          </tbody>


        </table>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {

  return state.events[ownProps.eventId];
}

export default connect(mapStateToProps,{fetchEvent:fetchEvent, fetchTaskByEventId:fetchTasksByEventId})(Event);
