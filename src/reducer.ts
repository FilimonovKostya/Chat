export default (state: any, action: any) => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state,
                isAuth: action.payload
            }

        default:
            return state
    }
}