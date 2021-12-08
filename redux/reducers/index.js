import {combineReducers} from 'redux';

import bookReducer from "./BookReducer";
import categoryReducer from "./CategoryReducer";
import userReducer from "./UserReducer";

export default combineReducers({
    bookState: bookReducer,
    categoryState: categoryReducer,
    userState: userReducer,
});