import React from "react";
import {connect} from 'react-redux';
import {fetchEvents} from '../actions';
import Event from './Event';

class EventList extends React.Component {

  componentDidMount(){
    this.props.fetchEvents().catch(error=>{
      console.log(error);
    });;
  }

  renderList(){
    console.log(this.props);
    if (!this.props.events){
      return <div>none</div>
    }
    else{
      return this.props.events.map(event=>{
        return (
            <div>{event.id}</div>
        )
      })

    }

  }

  render(){
    return <div>{this.renderList()}</div>
  }

}

const mapStateToProps = (state)=>{
  return {events: Object.values(state.events)}
}

export default connect(mapStateToProps,{fetchEvents:fetchEvents})(EventList);
