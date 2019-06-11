// Action creator
import dbCaller from '../apis/dbCaller';


export const fetchEvent = (id) => async (dispatch) => {
    const response = await dbCaller.get(`/events/${id}`);
    dispatch ({
      type:'FETCH_EVENT',
      payload: response.data
    });
  };
// Create a named export. Export many different functions from a single file
