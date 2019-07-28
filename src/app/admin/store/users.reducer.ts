import { user } from "../../common/interfaces/user";
import { CustomAction } from "../../common/interfaces/store/action";
import { UserStoreActionTypes } from "./users.actions";

export interface UsersState {
  users: user[]
};

export const usersInitialState: UsersState = {
  users: []
};

export const usersReducer = (state: UsersState = usersInitialState, action: CustomAction): UsersState => {
  switch(action.type) {
    case UserStoreActionTypes.getUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    };

    case UserStoreActionTypes.addNewUserSuccess: {
      return {
        users: [...state.users, action.payload]
      };
    };

    default: {
      return {
        ...state
      }
    };
  }
};