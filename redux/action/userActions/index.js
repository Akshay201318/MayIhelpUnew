
import { INIT, GET_USER_DATA, REMOVE_USER_DATA } from '../../index';


export const IsLoading = () => async (dispatch) => {
    
        dispatch({
            type: INIT,
        })
       
};

export const AddUser = (data) => async (dispatch) => {
    
    dispatch({
        type: GET_USER_DATA,
        payload:data
    })
   
};

export const RemoveUser = () => async (dispatch) => {
    
    dispatch({
        type: REMOVE_USER_DATA,
        payload:{}
    })
   
};

