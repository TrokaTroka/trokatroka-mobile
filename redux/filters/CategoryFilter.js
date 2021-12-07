import values from 'lodash/values';

export const categoryFilter = ({categoryState}) => {
    return {
        categoryList: values(categoryState.categoryList),
        categoryItem: categoryState.categoryItem,
        categoriesSelected: values(categoryState.categoriesSelected)
    }
}