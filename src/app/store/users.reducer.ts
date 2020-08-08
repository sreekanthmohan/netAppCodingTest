import { UsersActions } from './users.actions';
import { UserDatas } from '../users/users.model';
// import { Users } from '../model/users';

const INITIAL_STATE: UserDatas = {
  users: [],
};

export function UsersReducer(state: UserDatas = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case UsersActions.USERS_GET:
      const users = action.payload.users;
      return Object.assign({}, state, { users });

    default:
      return state;
  }
}

