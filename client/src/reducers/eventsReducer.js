import {
  FETCH_EVENT,
  SELECT_EVENT
} from '../actions/types';

export default (state={},action) => {
  switch (action.type) {
    case FETCH_EVENT:
      //payload is the response returned from the API
      return {...state,[action.payload.id]:action.payload};
    case SELECT_EVENT:
      console.log(action.payload);
      return {...state,"selectedEvent":action.payload};
    default:
      return state;
  }
}
