import {BOOK_ACTIONS} from '../actions/BookAction';

const bookState ={
    bookList: [],
    bookItem: {},
    bookFiltered: { field: undefined, value: undefined },
}

export default function bookReducer (state = bookState, dispatch) {
    switch (dispatch.type) {
        case BOOK_ACTIONS.GET_BOOKS:
            return {
                ...state,
                bookList: dispatch.content,
            };
        case BOOK_ACTIONS.GET_BOOK_BY_ID:
            return {
                ...state,
                bookItem: dispatch.content,
            };
        case BOOK_ACTIONS.SAVE_BOOK:
            return {
                ...state,
                bookList: [...state.bookList, dispatch.content],
            };
        case BOOK_ACTIONS.DELETE_BOOK:
            return {
                ...state,
                bookList: state.bookList.filter(book => book.id !== dispatch.content.id),
            };
        default:
            return state;
    }
}