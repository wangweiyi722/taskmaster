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
    console.log(this.props);
    this.props.fetchEvent(this.props.eventId).catch(error=>{
      console.log(error);
    });
    console.log(this.state);
  }


  render(){
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>test:</td><td>{this.props.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    "id":ownProps.eventId,
    "title":state.title,
    "date":state.date,
    "time":state.time,
    "location":state.location,
    "tasklist":state.tasklist
  };
}

export default connect(mapStateToProps,{fetchEvent:fetchEvent})(Event);
