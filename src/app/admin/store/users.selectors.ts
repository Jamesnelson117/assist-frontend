import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "./users.reducer";

export const getUsersStore = createFeatureSelector('usersStore');

export const getAllUsers = createSelector(
  getUsersStore,
  (store: UsersState) => store.users
);