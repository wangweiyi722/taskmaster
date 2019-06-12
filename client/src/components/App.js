import React from 'react';
import Event from "./Event";
import EventList from "./EventList";
class App extends React.Component{

  render(){

    return(
      <div>
        <EventList listOfEventIds={[1,2]}/>
      </div>
    )
  }

}

export default App;
