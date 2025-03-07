export const monitorReducer = (state = {}, action) => {
    switch (action.type) {
        case 'loadData':
            return action.payload;
        default:
            return state;
    }
};
