import React from 'react';
import {connect} from 'react-redux';


class GoogleAuth extends React.Component{
  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId:'905495329244-te11vtsj4t3t796v3974l27rq7c0r1hc.apps.googleusercontent.com',
        scope:'email'
      });
    });
  }

  render(){
    return <div>Google Auth</div>;
  }
}

export default connect()(GoogleAuth);
