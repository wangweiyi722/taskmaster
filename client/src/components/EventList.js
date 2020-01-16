import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchEvents} from '../actions';
import {tableRowStyling, tableHeaderStyling} from '../styles';
import {ConvertTime} from "../helpers/ConvertTime";
import Event from './Event';

class EventList extends React.Component {

  componentDidMount(){
    this.props.fetchEvents().catch(error=>{
      console.log(error);
    });
  }



  renderList = () => {
    console.log(this.props);
    if (!this.props.events){
      return <div>none</div>
    }
    else{
      //get todays date
      var t = new Date();
      var today = new Date();
      //get last Sunday's date
      var lastSunday = new Date(t.setDate(t.getDate()-t.getDay()));
      lastSunday.setHours(0,0,0,0);
      var nextSaturday = new Date(lastSunday);
      nextSaturday.setDate(nextSaturday.getDate()+6);
      nextSaturday.setHours(23,59,59,999);
      console.log("last Sunday");
      console.log(lastSunday);
      console.log(today);
      console.log(nextSaturday);
      return this.props.events.map(event=>{
        console.log("this week log")
        console.log(this.props);
        if(this.props.filter === "week"){
          if(event.startTime*1000>=lastSunday.getTime()&&event.startTime*1000<=nextSaturday.getTime()){
            console.log("matching");
            return (
              <tr className="eventListTableRow">
                <td onMouseOver={null}><Link to={`/events/${event.id}`}>{event.title}</Link></td><td>{ConvertTime(event.startTime).formattedDate}</td><td>{event.location}</td><td>{event.assignee}</td>
              </tr>
            )
          }
        }
        else{
          return (
              <tr className="eventListTableRow">
                <td onMouseOver={null}><Link to={`/events/${event.id}`}>{event.title}</Link></td><td>{ConvertTime(event.startTime).formattedDate}</td><td>{event.location}</td><td>{event.assignee}</td>
              </tr>
          )
        }

      })

    }

  }

  render(){
    return (<table className="EventList">
      <tr>
        <th>Event</th><th>Date</th><th>Location</th><th>In Charge</th>
      </tr>
      {this.renderList()}
    </table>)
  }

}

const mapStateToProps = (state)=>{
  return {events: Object.values(state.events)}
}

export default connect(mapStateToProps,{fetchEvents:fetchEvents})(EventList);
