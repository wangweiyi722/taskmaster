import React from "react";

import Task from './Task';

const TaskList = (props) => {

  if(!props.listOfTaskIds){
    return(<div>loading</div>);
  }
  const tasks = props.listOfTaskIds.map((task) => {
    return <Task key={task} taskId={task}/>;
  });
  return <div className="ui divided items inline-block">{tasks}</div>
}
export default TaskList;
