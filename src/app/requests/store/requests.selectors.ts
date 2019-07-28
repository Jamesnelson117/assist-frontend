import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getRouterState } from '../../store/reducers/router.reducer';
import * as requestUtils from './request.utils';
import { request } from "../../common/interfaces/request";
import { RequestState } from "./requests.reducer";

export const getRequestsStore = createFeatureSelector<RequestState>('requestsStore');

export const getRequestLoading = createSelector(getRequestsStore, requestUtils.getRequestsLoading);

export const getRequestsLoaded = createSelector(getRequestsStore, requestUtils.getRequestsLoaded);

export const getRequests = createSelector(getRequestsStore, requestUtils.getRequestsData);

export const getRequestsSortedByCreatedDate = createSelector(
  getRequests,
  requestUtils.sortMostRecentRequests,
);

export const getSelectedRequest = createSelector(
  getRequests,
  getRouterState,
  (requests, router): request => {
    return requests.filter(request => request['_id'] == router['state'].params.id)[0];
  }
);