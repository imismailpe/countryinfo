import { fromJS } from "immutable";
import * as actionTypes from "../actions/actionTypes";

export const initialState = fromJS({
    isFetching: false,
    countries: [],
    fetchError: null,
});

export const dataR = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.COUNTRIES_REQUEST:
            return state.set('isFetching', true);
        case actionTypes.COUNTRIES_RECEIVED:
            return state.set('countries', action.payload)
                .set('isFetching', false)
                .set('fetchError', null);
        case actionTypes.COUNTRIES_FETCH_FAILED:
            return state.set('countries', [])
                .set('isFetching', false)
                .set('fetchError', action.payload);
        default:
            return initialState;
    }
};
export default dataR;