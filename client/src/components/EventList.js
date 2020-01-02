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
      return this.props.events.map(event=>{
        return (
            <tr className="eventListTableRow">
              <td onMouseOver={null}><Link to={`/events/${event.id}`}>{event.title}</Link></td><td>{ConvertTime(event.startTime).date}</td><td>{event.location}</td><td>{event.assignee}</td>
            </tr>
        )
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
