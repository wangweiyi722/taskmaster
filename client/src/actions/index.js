// Action creator
import dbCaller from '../apis/dbCaller';
import{FETCH_EVENT,CREATE_TASK,FETCH_TASK,FETCH_TASKS,DELETE_TASK,EDIT_TASK,FETCH_TASKS_BY_USER,FETCH_TASKS_BY_EVENT,SELECT_EVENT,SIGN_IN,SIGN_OUT} from './types';

// Event action creators
export const fetchEvent = (id) => async (dispatch) => {
  const response = await dbCaller.get(`/events/${id}`);
  const tasks = await dbCaller.get(`/tasks?eventId=${id}`);
  console.log("tasks");
  console.log(tasks);
  const taskList = tasks.data.map((task) => task.id);
  console.log("action creator");
  console.log(taskList);
  dispatch ({
    type:FETCH_EVENT,
    payload: {...response.data,...{"taskList":taskList}}
  });
};


export const selectEvent = (id) => async (dispatch) => {

  dispatch({type:SELECT_EVENT,payload:{id}});
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
  console.log(response.data);

  dispatch ({type:FETCH_TASKS_BY_EVENT,payload:response.data});
}

export const signIn = () => {
  return {
    type: SIGN_IN
  }
}
export const signOut = () => {
  return {
    type:SIGN_OUT
  }
}
