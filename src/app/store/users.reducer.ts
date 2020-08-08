import { UsersActions } from '../actions/users.actions';
import { UserDatas } from '../users/users.model';
// import { Users } from '../model/users';

const INITIAL_STATE: UserDatas = {
  users: [],
  filters: [],
  applyFilter: false
};

export function UsersReducer(state: UserDatas = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case UsersActions.USERS_GET:
      const users = action.payload.users;
      return Object.assign({}, state, { users });

    case UsersActions.FILTERS_GET:
      return state.filters;

    case UsersActions.FILTERS_UPDATE:
      const filters = action.payload.filters;
      return Object.assign({}, state, { filters });

    case UsersActions.FILTER_APPLY:
      const applyFilter = action.payload.applyFilter;
      return Object.assign({}, state, { applyFilter });

    default:
      return state;
  }
}

