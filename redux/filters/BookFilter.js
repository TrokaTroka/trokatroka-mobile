import values from 'lodash/values';

export const bookFilter = ({bookState}) => {
    return {
        bookList: values(bookState.bookList),
        bookItem: bookState.bookItem
    }
}