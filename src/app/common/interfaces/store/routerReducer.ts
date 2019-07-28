import { RouterReducerState } from "@ngrx/router-store";
import { RouterStateUrl } from "./routerStateUrl";

export interface RouterStoreReducer {
  router: RouterReducerState<RouterStateUrl>
};