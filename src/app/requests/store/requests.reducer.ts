import { CustomAction } from '../../common/interfaces/store/action';
import { requestActionTypes }  from './requests.actions';
import { request } from '../../common/interfaces/request';
import { RootReducer } from '../../common/interfaces/store/rootReducer';

export interface RequestStore extends RootReducer {
  requests: RequestState
};

export interface RequestState {
  data: request[],
  loaded: boolean,
  loading: boolean
};

export const initialRequestsState: RequestState = {
  data: [],
  loaded: false,
  loading: false
};

export const requestsReducer = (state = initialRequestsState, action: CustomAction): RequestState => {
  switch (action.type) {
    case requestActionTypes.getRequests: {
      return {
        ...state,
        loading: true
      };
    };

    case requestActionTypes.getRequestsSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    };

    case requestActionTypes.addRequestSuccess: { 
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    };

    case requestActionTypes.patchRequestSuccess: {
      return {
        ...state,
        data: state.data.map((request: request) => {
          if (request._id == action.payload._id) {
            request = action.payload;
          };
          return request;
        })
      };
    };

    case requestActionTypes.addCommentSuccess: {
      return {
        ...state,
        data: state.data.map((request: request) => {
          if (request._id == action.payload._id) {
            request = action.payload;
          };
          return request;
        })
      };
    }

    case requestActionTypes.deleteRequestSuccess: {
      return {
        ...state,
        data: state.data
          .filter((request: request) => request._id != action.payload)
      };
    };

    default: {
      return {
        ...state
      }
    };
  }
};