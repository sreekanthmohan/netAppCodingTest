import { FilterInterface } from '../models/common.model';
import { FilterActions } from '../actions/filter.actions';
// import { Users } from '../model/users';

const INITIAL_STATE: FilterInterface[] = [];

export function FiltersReducer(state: FilterInterface[] = INITIAL_STATE, action: any): any {
    let filters;

    switch (action.type) {
        case FilterActions.FILTERS_GET:
            // return Object.assign({}, state, action.payload.filters);
            return state = [...action.payload.filters];

        case FilterActions.FILTERS_UPDATE:
            // return Object.assign({}, state, action.payload.filters);
            return state = [...action.payload.filters];

        case FilterActions.FILTERS_DELETE:
            filters = state.filter(({ id }) => id !== action.payload.id);
            return Object.assign({}, state, { filters });

        case FilterActions.FILTERS_ADD:
            filters = state.filter;
            filters.push(action.payload.filter);
            return Object.assign({}, state, { filters });

        default:
            return state;
    }
}

