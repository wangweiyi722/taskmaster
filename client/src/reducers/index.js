import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import tasksReducer from './tasksReducer';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';


export default combineReducers({
  events: eventsReducer,
  tasks: tasksReducer,
  form:formReducer,
  auth:authReducer
});
