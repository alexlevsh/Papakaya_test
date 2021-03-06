import { ROTATE_PRODUCT, CHANGE_MEASURE, LOCAL_MEASURE } from '../../constants/actions';

export function rotateProduct(product) {
    return {
        type: ROTATE_PRODUCT
    };
}

export function changeMeasure(type){
    return {
        type: CHANGE_MEASURE,
        payload : type
    };
}

export function localMeasure(type) {
    return {
        type: LOCAL_MEASURE,
        payload: type
    };
}
