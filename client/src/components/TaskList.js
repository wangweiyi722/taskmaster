import React from "react";

import Task from './Task';

const TaskList = (props) => {
  console.log("props");
  console.log(props);
  if(!props.listOfTaskIds){
    return(<div>loading</div>);
  }
  const tasks = props.listOfTaskIds.map((task) => {
    return <Task key={task} taskId={task}/>;
  });
  return <div className="ui divided items">{tasks}</div>
}
export default TaskList;
