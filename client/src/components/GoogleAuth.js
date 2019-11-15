import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';


class GoogleAuth extends React.Component{

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

        //Update the redux store when this component mounts.
        //Get the current sign in state boolean => feed boolean to onAuthChange => onAuthChange calls the action creator => redux state is updated via reducer
        this.onAuthChange(this.auth.isSignedIn.get());

        //Reload when authentication status changes. Listen is passively invoked whenever the auth state changes
        //isSignedIn.listen actually feeds in a boolean argument to the callback
        this.auth.isSignedIn.listen(this.onAuthChange);

      });
    });
  }
  onAuthChange = (isSignedIn) => {

    //Call the appropriate action creator that we added a prop in connect function.
    if (isSignedIn){
      this.props.signIn();
    }
    else{
      this.props.signOut();
    }
  };

  onSignOutClick = () => {
    this.auth.signOut();
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  renderAuthButton(){
    if (this.props.isSignedIn===null){
      return (<button className="ui red google button">
        <i className="google icon"/>
        <i className="icon spinner"/>
      </button>)
    } else if (this.props.isSignedIn){
      return (<button className="ui red google button" onClick={this.onSignOutClick}>
        <i className="google icon"/>
        Sign Out
      </button>);
    } else {
      return (<button className="ui red google button" onClick={this.onSignInClick}>
        <i className="google icon"/>
        Sign In
      </button>);
    }
  }



  render(){
    return <div className="right item">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);
