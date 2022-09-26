const USERS = 'USERS';

export const get_users = (payload) => ({ type: USERS, payload })

export const fetchUsers = () => async (dispatch) => {
  const url = 'http://[::1]:3000/api/v1/users';
  const res = await fetch(url);
  const resJson = await res.json();

  dispatch(get_users(resJson));
}

const userReducer = (state = [], action) => {
  switch (action.type) {
    case USERS:
      return action.payload

    default: return state;
  }
}

export default userReducer;
