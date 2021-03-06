import { INIT, GET_USER_DATA, FAILED, LOGIN, SIGNUP } from '../../index';

const initalState = {
    user: {},
    isLoading: false,
    isError: false,
}
const UserReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case INIT: {
            console.log("IsLOading Redcer called")
            return Object.assign({
                ...state,
                isLoading: true,
                isError: false,
            });
        }
        case GET_USER_DATA: {
            console.log("payload>>>>>>>>>>>>>", payload)
            return Object.assign({
                ...state,
                isLoading: false,
                isError: false,
                user:payload,
            });
        }
        case LOGIN: {
            console.log("inside>>>>>>>>>>>>>>>>>> login reducer")
            return Object.assign({
                ...state,
                isLoading: false,
                isError: false,
            });
        }
        case SIGNUP: {
            return {
                ...state,
                isLoading: false,
                isError: false,
            };
        }
        case FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }
        default:
            return state;
    }
}

export default UserReducer;