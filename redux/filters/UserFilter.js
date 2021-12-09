import values from 'lodash/values';

export const userFilter = ({userState}) => {
    return {
        userList: values(userState.userList),
        userItem: userState.userItem,
        userAuth: userState.userAuth,
        isLoading: userState.isLoading,
    }
}