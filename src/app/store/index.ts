import { ApiError, ApiSuccess, ApiGetMockData, ApiGetMockDataWithError } from './users.actions';
import { RootEffects } from './users.effects';
import { rootReducer } from './users.reducer';
import { getStateError, getStateSelectedData } from './selectors';

export const fromRoot = {
  ApiError, ApiSuccess, ApiGetMockData, rootReducer, RootEffects, ApiGetMockDataWithError, getStateError, getStateSelectedData
};

