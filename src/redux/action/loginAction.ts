import * as storage from '../../service/asyncStoreConfig';
import {Dispatch} from 'redux';

// Action Types
export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  SET_LOADER: 'SET_LOADER',
  RETRIEVE_TOKEN: 'RETRIEVE_TOKEN',
};

// Action Creators
export interface LoginSuccessAction {
  type: typeof actionTypes.LOGIN_SUCCESS;
  payload: any;
}

export interface LogoutAction {
  type: typeof actionTypes.LOGOUT;
}

export const loginSuccess = (token: any): LoginSuccessAction => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: token,
});

export const logout = (): LogoutAction => ({
  type: actionTypes.LOGOUT,
});

// Async Action Creator for Auto-Login
export const checkToken = () => async (dispatch: Dispatch) => {
  try {
    const token = await storage.getItem('token');
    if (token) {
      dispatch(loginSuccess(token));
    }
  } catch (error) {
    console.log('Error retrieving token from storage:', error);
  }
};

// Async Action Creator for Login
export const login = (token: any) => async (dispatch: Dispatch) => {
  try {
    await storage.setItem('token', token);
    dispatch({
      type: actionTypes.LOGIN,
      token: '1234',
    });
  } catch (error) {
    console.log('Error saving token to storage:', error);
  }
};

// Async Action Creator for Logout
export const logoutAndClearToken = () => async (dispatch: Dispatch) => {
  try {
    // Clear token from storage
    await storage.removeData('token');
    dispatch({type: actionTypes.LOGOUT});
  } catch (error) {
    console.log('Error clearing token from storage:', error);
  }
};

export const setToken = (token: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.RETRIEVE_TOKEN,
    token: token,
  });
};
