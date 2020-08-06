import { UsersActions } from '../actions/users.actions';
import { Users } from '../models/common.model';
// import { Users } from '../model/users';

const INITIAL_STATE: Users = {
  list: [],
};

export function UsersReducer(state: Users = INITIAL_STATE, action: any): any {
  let index, active, list;

  switch (action.type) {
    case UsersActions.USERS_GET:
      return Object.assign({}, state, { list: action.payload.list });

    // case UsersActions.USERS_GET_ACTIVE:
    //   return state.active;

    // case UsersActions.USERS_SET_ACTIVE:
    //   active = state.list.find(({ id }) => id === action.payload.id);
    //   return Object.assign({}, state, { active });

    // case UsersActions.USERS_RESET_ACTIVE:
    //   return Object.assign({}, state, { active: {} });

    default:
      return state;
  }
}

