import {combineReducers} from 'redux';

import bookReducer from "./BookReducer";

export default combineReducers({
    bookState: bookReducer
});