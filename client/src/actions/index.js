// Action creator
import dbCaller from '../apis/dbCaller';


export const fetchEvent = (id) => async (dispatch) => {
  const response = await dbCaller.get(`/events/${id}`);
  dispatch ({
    type:'FETCH_EVENT',
    payload: response.data
  });
};

export const fetchTask = (id) => async (dispatch) => {
  const response = await dbCaller.get(`/tasks/${id}`);
  dispatch ({
    type:'FETCH_TASK',
    payload: response.data
  });
};

export const changeCompletion = (props) => async (dispatch) => {

  const response = await dbCaller.put(`/tasks/${props.id}`,{"description":props.description,"deadline":props.deadline,"assignee":props.assignee,"completed":!props.completed});
  dispatch ({
    type:'CHANGE_COMPLETION',
    payload: response.data
  });
};
// Create a named export. Export many different functions from a single file
