
/*
const TaskList = (props) => {

  if(!props.listOfTaskIds){
    return(<div>loading</div>);
  }
  const tasks = props.listOfTaskIds.map((task) => {
    return <Task key={task} taskId={task}/>;
  });
  return <div className="ui divided" style={{"overflow":"scroll","white-space":"nowrap"}}>{tasks}</div>
}
export default TaskList;
*/

import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchTasksByEventId,fetchTasksByAssignee} from '../actions';
import {tableRowStyling, tableHeaderStyling} from '../styles';
import {ConvertTime} from "../helpers/ConvertTime";
import Task from './Task';

class TaskList extends React.Component {

  componentDidMount(){

    //If there is an assignee
    if (this.props.assignee !== null){
      this.props.fetchTasksByAssignee(this.props.assignee).catch(error=>{
        console.log(error);
      });
    }
    else if (this.props.eventId !== null){
      this.props.fetchTasksByEventId(this.props.eventId).catch(error=>{
        console.log(error);
      });
    }

  }



  renderList = () => {
    if (!this.props.tasks){
      return <div>none</div>
    }
    else if (this.props.tasks.length === 0) {
      return <div>none</div>

    }
    else{
      const tasks = this.props.tasks.map((task) => {
        return <Task key={task.id} taskId={task.id}/>;
      });
      return <div className="ui divided" style={{"overflow":"scroll","white-space":"nowrap"}}>{tasks}</div>

    }

  }

  render(){
    return (<div>
      {this.renderList()}
    </div>);
  }

}

const mapStateToProps = (state)=>{
  return {tasks: Object.values(state.tasks)}
}

export default connect(mapStateToProps,{fetchTasksByEventId:fetchTasksByEventId,fetchTasksByAssignee:fetchTasksByAssignee})(TaskList);
