// Action creator
import dbCaller from '../apis/dbCaller';


export const fetchEvents = () => async (dispatch) => {
    const response = await dbCaller.get('/events');
    dispatch ({
      type:'FETCH_EVENTS',
      payload: response.data
    });
  };
// Create a named export. Export many different functions from a single file
