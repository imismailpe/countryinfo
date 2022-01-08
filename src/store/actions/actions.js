import { message } from "antd";
import * as actionTypes from "./actionTypes";


export function getCountriesRequest(){
    return {
        type: actionTypes.COUNTRIES_REQUEST
    };
};
export function getCountriesSuccess(data){
    return {
        type: actionTypes.COUNTRIES_RECEIVED,
        payload: data
    };
};
export function getCountriesFailed(error){
    message.error(`${error}`);
    return {
        type: actionTypes.COUNTRIES_FETCH_FAILED,
        payload: error
    };
};
