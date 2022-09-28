const REGISTER = 'REGISTER';

export const getRegister = (payload) => ({ type: REGISTER, payload });

export const fetchUsers = () => async (dispatch) => {
  const url = 'http://[::1]:3000/users';
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
