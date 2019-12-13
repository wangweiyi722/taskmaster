import {
  FETCH_EVENT,
  SELECT_EVENT,
  FETCH_EVENTS
} from '../actions/types';
import _ from "lodash";

export default (state={},action) => {
  switch (action.type) {
    case FETCH_EVENT:
      //payload is the response returned from the API
      return {...state,[action.payload.id]:action.payload};
    case SELECT_EVENT:
      const newSelectionState = !state[action.payload.id].selected;
      return {...state,[action.payload.id]:{...state[action.payload.id],"selected":newSelectionState}};
    case FETCH_EVENTS:
      return {...state,..._.mapKeys(action.payload,'id')};
    default:
      return state;
  }
}
