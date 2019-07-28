import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/auth.reducer";

export const getAuthStore = createFeatureSelector('auth');

export const getIsSignedIn = createSelector(
  getAuthStore,
  (state: AuthState) => state.isSignedIn
);

export const getUser = createSelector(
  getAuthStore,
  (state: AuthState) => state.user
);

export const getUserScope = createSelector(
  getAuthStore,
  (state: AuthState) => state.user.scope
);

export const isAdmin = createSelector(
  getUserScope,
  (scope: string) => scope == 'admin' ? true: false
);

export const getAuthErrorMessage = createSelector(
  getAuthStore,
  (state: AuthState) => state.error
);
