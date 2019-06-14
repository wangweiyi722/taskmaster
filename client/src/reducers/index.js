import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import tasksReducer from './tasksReducer';


export default combineReducers({
  events: eventsReducer,
  tasks: tasksReducer
});
