import { RequestState } from './requests.reducer';
import { request } from '../../common/interfaces/request';

export const getRequestsLoading = (state: RequestState) => state.loading;

export const getRequestsLoaded = (state: RequestState) => state.loaded;

export const getRequestsData = (state: RequestState) => state.data;

export const sortMostRecentRequests = (requests: request[]) => {
  return requests.sort((a: request, b: request) => {
    return a.dateCreated < b.dateCreated ? 1 : -1;
  });
}
