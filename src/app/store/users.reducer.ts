import { createReducer, on } from '@ngrx/store';

// !! ApiGetMockData and ApiGetMockDataWithError not used because it is handled in ./effects
import { ApiGetMockData, ApiError, ApiSuccess, ApiGetMockDataWithError } from './users.actions';

export interface RootState {
  error: any;
  selectedMockData: { id: string, data: string };
}

export const initialState: RootState = {
  error: null,
  selectedMockData: null,
}

export const rootReducer = createReducer(initialState,
  on(ApiError, (state, action) => ({ error: action.error, selectedMockData: null })),
  on(ApiSuccess, (state, action) => ({ selectedMockData: action.users, error: null })),
);
