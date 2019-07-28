import { AuthState } from "../../../store/reducers/auth.reducer";

export interface RootReducer {
  auth: AuthState,
  routerReducer: any
};
