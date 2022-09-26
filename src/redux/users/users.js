const USERS = 'USERS';

export const getUsers = (payload) => ({ type: USERS, payload });

export const fetchUsers = () => async (dispatch) => {
  const url = 'http://[::1]:3000/api/v1/users';
  const res = await fetch(url);
  const resJson = await res.json();

  dispatch(getUsers(resJson));
};

const userReducer = (state = [], action) => {
  switch (action.type) {
    case USERS:
      return action.payload;

    default: return state;
  }
};

export default userReducer;
