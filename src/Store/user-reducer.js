const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_FIRST_NAME':
      // Since we are mutating the state then we should always create a new object every time
      // state.firstName = action.data;
      state = {...state, firstName: action.data};
      break;
    case 'CHANGE_LAST_NAME':
      // state.lastName = action.data;
      state = {...state, lastName: action.data};
      break;
  }
  return state;
};

export default userReducer;
