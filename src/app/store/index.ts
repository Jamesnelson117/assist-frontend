import { ActionReducerMap } from "@ngrx/store";
import { authReducer } from "./reducers/auth.reducer";
import { routerReducer } from "@ngrx/router-store";
import { RootReducer } from '../common/interfaces/store/rootReducer';

export const rootReducers: ActionReducerMap<RootReducer> = {
  auth: authReducer,
  routerReducer: routerReducer
};