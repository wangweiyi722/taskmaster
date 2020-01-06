import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_CURRENT_USER
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  user: null
};

export default (state=INITIAL_STATE,action)=>{
  console.log("reducer")
  console.log(state);
  switch (action.type) {

    //change the isSignedIn property of the auth state object
    case SIGN_IN:

      return {...state,isSignedIn:true,user: action.payload};
    case SIGN_OUT:
      return {...state,isSignedIn:false,user:null};
    case FETCH_CURRENT_USER:
      console.log("fetchCurrentUser state")
      console.log(state)
      return state
    default:
      return state;
  }
}
