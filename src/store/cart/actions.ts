import { IGoods } from "../../types";
import { actionTypes } from "./types";


export const addToCart = (product: IGoods, count: number) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: {product, count}
})


export const removeFromCart = (productId: number) => ({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: productId
})

export const changeQtyHandler = (type:'plus' | 'minus', product:IGoods) => {

    return ({
        
    })
}