// Action creator
import dbCaller from '../apis/dbCaller';
import{CREATE_TASK,FETCH_TASK,FETCH_TASKS,DELETE_TASK,EDIT_TASK,FETCH_TASKS_BY_USER,FETCH_TASKS_BY_EVENT} from './types';

// Event action creators
export const fetchEvent = (id) => async (dispatch) => {
  const response = await dbCaller.get(`/events/${id}`);
  dispatch ({
    type:'FETCH_EVENT',
    payload: response.data
  });
};




// Task action creators
export const createTask = (formValues) => async (dispatch) => {
  const response = await dbCaller.post('/tasks',formValues);
  dispatch({type:CREATE_TASK,payload:response.data});
};

export const fetchTasks = () => async (dispatch) => {
  const response = await dbCaller.get('/tasks');
  dispatch({type:FETCH_TASKS,payload:response.data});
}

export const fetchTask = (id) => async (dispatch) => {
  const response = await dbCaller.get(`/tasks/${id}`);
  dispatch ({type:FETCH_TASK,payload: response.data});
};

export const editTask = (id,formValues) => async (dispatch) => {
  const response = await dbCaller.put(`/tasks/${id}`,formValues);
  dispatch ({type:EDIT_TASK,payload:response.data});
}

export const deleteTask = (id) => async (dispatch) => {
  await dbCaller.delete(`/tasks/${id}`);
  dispatch ({type:DELETE_TASK,payload:id});
}
export const changeCompletion = (props) => async (dispatch) => {
  const response = await dbCaller.put(`/tasks/${props.id}`,{"description":props.description,"deadline":props.deadline,"assignee":props.assignee,"eventId":props.eventId,"completed":!props.completed});
  dispatch ({
    type:'CHANGE_COMPLETION',
    payload: response.data
  });
};
export const fetchTasksByEventId = (id) => async (dispatch) => {
  const response = await dbCaller.get(`/tasks?eventId=${id}`);
  dispatch ({type:FETCH_TASKS_BY_EVENT,payload:response.data});
}
