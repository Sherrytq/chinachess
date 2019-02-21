import axios from "@/axios";
import Cookies from 'js-cookie'

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = param => {
  return {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    callAPI: () => 
      axios.post("/users", param),
    payload: param
  };
};

const initialState = {
  token: Cookies.get("token") || null,
  permitInfo: Cookies.get("permitInfo") || [],
  userInfo: Cookies.get('userInfo') || {},
  logoutInfo: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.response.data.result
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export default userReducer;
