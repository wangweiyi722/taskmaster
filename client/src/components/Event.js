import React from 'react';
import {connect} from 'react-redux';
import {fetchEvent} from '../actions';
import {fetchTasksByEventId} from '../actions';
import {selectEvent} from '../actions';
import TaskList from './TaskList';
import TaskCreate from './TaskCreate';
import {ConvertTime} from '../helpers/ConvertTime';

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
    //console.log("event");
    //console.log(this.props);
    const style = {"border-style":'solid',"border-width":'2px'};
    const hide = {"display":(this.props.selected)?"inline":"none"};
    const addTaskText = (this.props.selected)?"Cancel":"Add Task";

    return(
      <div style={style}>
        <table>
          <tbody>
            <tr>
              <td>test id:</td><td>{this.props.id}</td>
            </tr>
            <tr>
              <td>test title:</td><td>{this.props.title}</td>
            </tr>
            <tr>
              <td>test start time:</td><td>{ConvertTime(this.props.startTime)}</td>
            </tr>
            <tr>
              <td>test end time:</td><td>{ConvertTime(this.props.endTime)}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={()=>this.props.selectEvent(this.props.id)}>{addTaskText}</button>
        <div style={hide}><TaskCreate eventId={this.props.id}/></div>
        <TaskList listOfTaskIds={this.props.taskList}/>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  console.log("event");
  console.log(state.events[ownProps.eventId]);

  return state.events[ownProps.eventId];
}

export default connect(mapStateToProps,{fetchEvent:fetchEvent, fetchTasksByEventId:fetchTasksByEventId, selectEvent:selectEvent})(Event);
