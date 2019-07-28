import { user } from '../../common/interfaces/user';
import { CustomAction } from '../../common/interfaces/store/action';
import { AuthActionTypes } from '../actions/auth.actions';

export interface AuthState {
  isSignedIn: boolean,
  user: user | null,
  error: string
};

export const authInitialState: AuthState = {
  isSignedIn: false,
  user: null,
  error: ''
};

export const authReducer = (state: AuthState = authInitialState, action: CustomAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.loginSuccess:
      return {
        ...state,
        isSignedIn: true,
        error: '',
        user: action.payload.user
      }
    case AuthActionTypes.loginFail: 
      return {
        ...state,
        isSignedIn: false,
        error: action.payload,
        user: null
      }
    default: 
      return {
        ...state
      }
  }
}