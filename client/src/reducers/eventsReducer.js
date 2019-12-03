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

      const newSelectionState = !state[action.payload.id].selected;
      return {...state,[action.payload.id]:{...state[action.payload.id],"selected":newSelectionState}};
    default:
      return state;
  }
}
