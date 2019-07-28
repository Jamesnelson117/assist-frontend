import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateUrl } from "../../common/interfaces/store/routerStateUrl";
import { RouterStateSerializer  } from "@ngrx/router-store";
import { createFeatureSelector } from "@ngrx/store";

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {

  serialize(routerState: RouterStateSnapshot) {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    };

    const { params } = state;

    return { url, queryParams, params};
  }
};

export const getRouterState = createFeatureSelector('routerReducer');