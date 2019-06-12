export default (state={},action) => {
  switch (action.type) {
    case 'FETCH_EVENT':
      //payload is the response returned from the API
      return (action.payload);
    default:
      return state;
  }
}
