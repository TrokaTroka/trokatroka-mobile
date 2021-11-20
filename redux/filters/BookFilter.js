import values from 'lodash/values';

export const bookFilter = ({bookState}) => {
    return {
        bookList: values(bookState.bookList.filter(book => book[bookState.bookFiltered.field] ? book[bookState.bookFiltered.field] === bookState.bookFiltered.value : true)),
        bookItem: bookState.bookItem,
    }
}