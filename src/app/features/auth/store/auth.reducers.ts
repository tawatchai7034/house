import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthStateInterface } from '../../../core/models/auth-state.model';

export const initialState: AuthStateInterface = {
  loggedInUser: null,
  signUpUser: null,
  error: null,
};

export const AuthReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    loggedInUser: action.loggedInUser,
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(AuthActions.signUpSuccess, (state, action) => ({
    ...state,
    loggedInUser: action.signUpUser,
  })),
  on(AuthActions.signUpFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
