export const INITIAL_STATE = {
  temp: {
    currenty: 0,
    max: 0,
    min: 0,
  },
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEMP':
      return {
        ...state,
        temp: {
          currenty: action.payload.temp.currenty,
          max: action.payload.temp.max,
          min: action.payload.temp.min,
        },
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload.status,
      };
    default:
      return state;
  }
};

export default reducer;