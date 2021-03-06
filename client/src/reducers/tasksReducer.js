import {
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  FETCH_TASK,
  FETCH_TASKS,
  CHANGE_COMPLETION,
  FETCH_TASKS_BY_ASSIGNEE,
  FETCH_TASKS_BY_EVENT
} from '../actions/types';
import _ from "lodash";

export default (state={},action) => {
  switch (action.type) {
    case FETCH_TASK:
      //payload is the response returned from the API
      return {...state,[action.payload.id]:action.payload};
    case EDIT_TASK:
      return {...state,[action.payload.id]:action.payload};
    case CREATE_TASK:
      return {...state,[action.payload.id]:action.payload};
    case CHANGE_COMPLETION:
      return {...state,[action.payload.id]:action.payload};
    case FETCH_TASKS:
      return {...state,[action.payload.id]:action.payload};
    //whenever getting tasks for an event or assignee, reset the task redux state rather than add to it
    case FETCH_TASKS_BY_EVENT:
      return {..._.mapKeys(action.payload,'id')};
    case FETCH_TASKS_BY_ASSIGNEE:
      return {..._.mapKeys(action.payload,'id')};
    default:
      return state;
  }
}
