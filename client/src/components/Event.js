import React from 'react';
import {connect} from 'react-redux';
import {fetchEvent} from '../actions';
import {fetchTasksByEventId} from '../actions';
import {selectEvent} from '../actions';
import TaskList from './TaskList';
import TaskCreate from './TaskCreate';
import {ConvertTime} from '../helpers/ConvertTime';

class Event extends React.Component{

  constructor(props){
    super(props);
    this.state={showTaskList:false}
  }
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
    const hide = {"display":(this.props.selected)?"inline":"none"};
    const addTaskText = (this.props.selected)?"Cancel":"Add Task";
    //console.log("event props");
    //console.log(this.props);
    if (this.props.title==undefined){
      return "loading";
    }

    return(
      <div className="event">
        <div className="eventHeader" style={{"paddingBottom":"20px"}}>
          <h1>Event Detail</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Title</td><td>{this.props.title}</td><td>In Charge</td><td>{this.props.assignee}</td>
            </tr>
            <tr>
              <td>Start Time</td><td>{ConvertTime(this.props.startTime).time}</td><td>End Time</td><td>{ConvertTime(this.props.endTime).time}</td>
            </tr>
          </tbody>
        </table>

        <button className="showTaskList" onClick={()=>{
            this.setState({showTaskList:!this.state.showTaskList});
          }
        }>{this.state.showTaskList?"hide":"show"} task list
        </button>
        <div style={{"display":this.state.showTaskList?'inline':'none'}}>
          <button onClick={()=>this.props.selectEvent(this.props.id)} className="large square">{addTaskText}</button>
          <div style={hide}><TaskCreate eventId={this.props.id}/></div>
          <TaskList listOfTaskIds={this.props.taskList}/>
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  if (!state.events[ownProps.eventId]){
    return {};
  }
  return state.events[ownProps.eventId];
}

export default connect(mapStateToProps,{fetchEvent:fetchEvent, fetchTasksByEventId:fetchTasksByEventId, selectEvent:selectEvent})(Event);
