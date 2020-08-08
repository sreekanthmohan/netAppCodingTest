import { combineReducers } from 'redux';

import { UsersReducer } from './users.reducer';
import { UserDatas } from '../users/users.model';
// import { Users } from '../model/users';

export class IAppState {
  userDatas: UserDatas;
}

export const rootReducer = combineReducers<IAppState>({
  userDatas: UsersReducer,
});


