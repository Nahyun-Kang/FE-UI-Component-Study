const toastReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return true;
    case 'CLOSE':
      return false;
    case 'TOGGLE':
      return !state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default toastReducer;
