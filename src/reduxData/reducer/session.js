const initialState = {
  userSession: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGEDIN':
      state = {...state, userSession: action.payload};
      break;
    case 'LOGOUT':
      state = {...state, userSession: null};
      break;
    case 'LOADING_START':
      state = {...state, isLoading: true};
      break;
    case 'LOADING_STOP':
      state = {...state, isLoading: false};
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
