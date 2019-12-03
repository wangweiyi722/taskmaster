import React from 'react';
import {connect} from 'react-redux';
import {fetchTask} from '../actions';
import {changeCompletion} from '../actions';

class Task extends React.Component {

  componentDidMount(){
    this.props.fetchTask(this.props.taskId).catch(error=>{
      console.log(error);
    });
  }

  render(){
    var style = {display:'inline-block'};
    return (
      <div className="ui inline-block" style={style}>
        <table>
          <tbody>
            <tr>
              <td>Task:</td><td>{this.props.id}</td>
            </tr>
            <tr>
              <td>Description:</td><td>{this.props.description}</td>
            </tr>
            <tr>
              <td>Completed:</td><td>{this.props.completed?"yes":"no"}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => this.props.changeCompletion(this.props)}>{this.props.completed?"Mark Incomplete":"Mark Complete"}</button>
      </div>
    );
  }
}


const mapStateToProps = (state,ownProps) => {
  if (!state.tasks[ownProps.taskId]){
    return {};
  }
  return state.tasks[ownProps.taskId];
}

export default connect(mapStateToProps,{fetchTask:fetchTask,changeCompletion:changeCompletion})(Task);
