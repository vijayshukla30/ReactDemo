const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_FIRST_NAME':
      state = {...state, firstName: action.data};
      break;
    case 'CHANGE_LAST_NAME':
      state = {...state, lastName: action.data};
      break;
  }
  return state;
};

export default userReducer;
