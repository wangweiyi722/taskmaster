// Action creator
import dbCaller from '../apis/dbCaller';
import{FETCH_EVENT,FETCH_EVENTS,CREATE_TASK,CREATE_EVENT,FETCH_TASK,FETCH_TASKS,DELETE_TASK,EDIT_TASK,FETCH_TASKS_BY_ASSIGNEE,FETCH_TASKS_BY_EVENT,SELECT_EVENT,SIGN_IN,SIGN_OUT,FETCH_CURRENT_USER} from './types';
import history from '../history';

// Event action creators
/*
export const fetchEvent = (id) => async (dispatch) => {
  const response = await dbCaller.get(`/events/${id}`);
  const tasks = await dbCaller.get(`/tasks?eventId=${id}`);
  const taskList = tasks.data.map((task) => task.id);
  dispatch ({
    type:FETCH_EVENT,
    payload: {...response.data,...{"taskList":taskList}}
  });
};
*/
export const fetchEvent = (id) => async (dispatch) => {
  const response = await dbCaller.get(`/events/${id}`);
  const tasks = await dbCaller.get(`/tasks?eventId=${id}`);
  console.log(tasks);
  dispatch ({
    type:FETCH_EVENT,
    payload: response.data
  });
  dispatch ({
    type:FETCH_TASKS_BY_EVENT,
    payload:tasks.data
  });
};


export const fetchEvents = () => async (dispatch) => {
  const response = await dbCaller.get('/events');
  dispatch({type:FETCH_EVENTS,payload:response.data});
}
export const createEvent = (formValues) => async (dispatch,getState) => {
  /*
  const id = getState().auth.user.id;
  const firstName = getState().auth.user.firstName;
  const lastName = getState().auth.user.lastName;
  const email = getState().auth.user.email;
  const user = {
    id:id,
    firstName:firstName,
    lastName:lastName,
    email:email
  };
  */
  const response = await dbCaller.post('/events',{...formValues});
  dispatch({type:CREATE_EVENT,payload:response.data});
  history.push("/events");
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
  const response = await dbCaller.patch(`/tasks/${props.id}`,{"completed":!props.completed});
  dispatch ({
    type:'CHANGE_COMPLETION',
    payload: response.data
  });
};
export const fetchTasksByEventId = (id) => async (dispatch) => {
  console.log(id);
  const response = await dbCaller.get(`/tasks?eventId=${id}`);
  console.log(response.data);

  dispatch ({type:FETCH_TASKS_BY_EVENT,payload:response.data});
}

export const fetchTasksByAssignee = (assignee) => async (dispatch) => {
  const response = await dbCaller.get(`/tasks?assignee=${assignee}`);
  console.log(response.data);

  dispatch ({type:FETCH_TASKS_BY_ASSIGNEE,payload:response.data});
}

export const fetchCurrentUser = () => async (dispatch) => {

  dispatch ({type:FETCH_CURRENT_USER});
}

export const signIn = (profile) => {
  return {
    type: SIGN_IN,
    payload: {
      id:profile.getId(),
      firstName:profile.getGivenName(),
      lastName:profile.getFamilyName(),
      email:profile.getEmail()
    }
  }
}
export const signOut = () => {
  return {
    type:SIGN_OUT
  }
}
