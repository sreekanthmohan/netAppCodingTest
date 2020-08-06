import { combineReducers } from 'redux';

import { UsersReducer } from './users.reducer';
import { FiltersReducer } from './filters.reducer';
import { Users, Filters } from '../models/common.model';
// import { Users } from '../model/users';

export class IAppState {
  users: Users;
  filters: Filters;
}

export const rootReducer = combineReducers<IAppState>({
  users: UsersReducer,
  filters: FiltersReducer,
});


