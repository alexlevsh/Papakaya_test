// rounding
import {LOCAL_STORAGE_KEY} from '../constants/localStorageKey';

export const roundToNDigits = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
export const roundTo2Digits = (x) => roundToNDigits(x, 2);

// conversion
export const cmToMm = (cm) => roundTo2Digits(cm * 10);
export const mmToCm = (mm) => roundTo2Digits(mm / 10);
export const inToCm = (inches) => roundTo2Digits(inches * 2.54);
export const inToMm = (inches) => cmToMm(inToCm(inches));
export const inToFt = (inches) => roundTo2Digits(inches / 12);
export const ftToIn = (ft) => roundTo2Digits(ft * 12);
export const cmToIn = (cm) => roundTo2Digits(cm / 2.54);
export const mmToIn = (mm) => cmToIn(mmToCm(mm));

// geometry
export const distanceBetweenPoints = (diffX, diffY) => Math.sqrt(diffX * diffX + diffY * diffY);

// GET params
export const parseGETParams = () => {
    let params = {};
    var partsOfGETParams = window.location.search.substring(1).split('&');
    for (let param of partsOfGETParams) {
        var [key, value] = param.split('=');
        if (key) {
            params[key] = value || '';
        }
    }
    return params;
};

export const getGETParam = (paramName) => {
    var GETParams = parseGETParams();
    if(GETParams[paramName]) {
        return decodeURI(GETParams[paramName]);
    }
    return false;
};

export const measureValue = {
    in: 'in',
    cm: 'cm'
}

export const getMeasure = (type, value) => {
    let changeMeasure = mmToIn
    let currentValue = measureValue.in

    switch(type){
        case measureValue.cm:
            changeMeasure = mmToCm
            currentValue = measureValue.cm
            break
        case measureValue.in:
            changeMeasure = mmToIn
            currentValue = measureValue.in  
            break
        default: break    
    }
    return `${changeMeasure(value)} ${currentValue}`
};

export const getDefaultMeasure = () => {
    let measure = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(!measure && !(measure in measureValue)){
        measure = measureValue.in
    }
    return measure
}



