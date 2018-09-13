/* global product - is it legal?*/

import { CHANGE_MEASURE, LOCAL_MEASURE} from '../../constants/actions';
import {getDefaultMeasure}  from '../../core/utils'
import {LOCAL_STORAGE_KEY} from '../../constants/localStorageKey'



const initialState = {
    product: product,
    measure: getDefaultMeasure()
};

export default function handle(state=initialState, action) {
    switch(action.type) {
        case CHANGE_MEASURE:
            return{
                ...state,
                measure: action.payload
            }
        case LOCAL_MEASURE:
            localStorage.setItem(LOCAL_STORAGE_KEY, state.measure)
            return state    
        default:
            return state    
    }
}