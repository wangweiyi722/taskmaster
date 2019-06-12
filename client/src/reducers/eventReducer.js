export default (state={},action) => {
  switch (action.type) {
    case 'FETCH_EVENT':
      //payload is the response returned from the API
      return ({...state,id:action.payload.id,title:action.payload.title});
    default:
      return state;
  }
}
