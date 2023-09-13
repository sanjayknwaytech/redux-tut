import {ADD_TO_CART,REMOVE_TO_CART} from '../contants';

export const addToCartHandler=(data)=>{
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCartHandler=(data)=>{
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}