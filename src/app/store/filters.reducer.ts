import { FilterInterface, Filters } from '../models/common.model';
import { FilterActions } from '../actions/filter.actions';
// import { Users } from '../model/users';

const INITIAL_STATE: Filters = {
    filters: [],
};

export function FiltersReducer(state: Filters = INITIAL_STATE, action: any): any {
    let filters;

    switch (action.type) {
        case FilterActions.FILTERS_GET:
            return Object.assign({}, state, { list: action.payload.filters });

        case FilterActions.FILTERS_DELETE:
            filters = state.filters.filter(({ id }) => id !== action.payload.id);
            return Object.assign({}, state, { filters });

        case FilterActions.FILTERS_ADD:
            filters = state.filters;
            filters.push(action.payload.filter);
            return Object.assign({}, state, { filters });

        default:
            return state;
    }
}

