import React from 'react';
import {connect} from 'react-redux';


class GoogleAuth extends React.Component{
  state = {isSignedIn: null}

  componentDidMount(){

    window.gapi.load('client:auth2',()=>{
      //gapi library is available on window scope
      window.gapi.client.init({
        clientId:'905495329244-te11vtsj4t3t796v3974l27rq7c0r1hc.apps.googleusercontent.com',
        //scope indicates what parts of the user's Google account you can access
        scope:'email'
        //callback once this library is loaded
      }).then(()=>{

        //Get the auth object
        this.auth = window.gapi.auth2.getAuthInstance();

        //Using component level state to keep track of whether or not we are signed in
        this.setState({isSignedIn:this.auth.isSignedIn.get()});

        //Reload when authentication status changes. Listen is passively invoked whenever the auth state changes
        this.auth.isSignedIn.listen(this.onAuthChange);

      });
    });
  }
  onAuthChange = () => {
    this.setState({isSignedIn:this.auth.isSignedIn.get()});
  };

  renderAuthButton(){
    if (this.state.isSignedIn===null){
      return (<button className="ui red google button">
        <i className="google icon"/>
        <i className="icon spinner"/>
      </button>)
    } else if (this.state.isSignedIn){
      return (<button className="ui red google button">
        <i className="google icon"/>
        Sign Out
      </button>);
    } else {
      return (<button className="ui red google button">
        <i className="google icon"/>
        Sign In
      </button>);
    }
  }

  render(){
    return <div className="right item">{this.renderAuthButton()}</div>;
  }
}

export default connect()(GoogleAuth);
