import {
  SIGN_IN,
  SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null
};

export default (state=INITIAL_STATE,action)=>{
  switch (action.type) {

    //change the isSignedIn property of the auth state object
    case SIGN_IN:

      return {...state,isSignedIn:true};
    case SIGN_OUT:
      return {...state,isSignedIn:false};
    default:
      return state;
  }
}
