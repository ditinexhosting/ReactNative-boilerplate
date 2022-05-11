export const loggedin = payload => {
  return {type: 'LOGGEDIN', payload};
};

export const logout = () => {
  return {type: 'LOGOUT'};
};

export const loadingStart = () => {
  return {type: 'LOADING_START'};
};

export const loadingStop = () => {
  return {type: 'LOADING_STOP'};
};
