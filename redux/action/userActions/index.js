
import { INIT, GET_USER_DATA, FAILED } from '../../index';


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

