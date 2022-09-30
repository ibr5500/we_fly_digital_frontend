const GET_DATA = 'GET_DATA';

export const getDetails = (payload) => ({ type: GET_DATA, payload });

export const fetchData = () => async (dispatch) => {
  const url = 'http://127.0.0.1:3000/api/v1/airlines';
  const res = await fetch(url);
  const resJson = await res.json();

  dispatch(getDetails(resJson));
};

const detailsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;

    default: return state;
  }
};

export default detailsReducer;
