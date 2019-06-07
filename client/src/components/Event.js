import React from 'react';

class Event extends React.Component{

  //Event properties:
  //id
  //title
  //date
  //time
  //location
  //task list


  constructor (props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEvents();

  }

  render(){
    return(
      <div>
        "Event"
      </div>
    );
  }
}

export default Event;
