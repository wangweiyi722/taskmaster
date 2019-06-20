export default (state={},action) => {
  switch (action.type) {
    case 'FETCH_TASK':
      //payload is the response returned from the API
      return {...state,[action.payload.id]:action.payload};
    case 'CHANGE_COMPLETION':
      return {...state,[action.payload.id]:action.payload};

    default:
      return state;
  }
}
