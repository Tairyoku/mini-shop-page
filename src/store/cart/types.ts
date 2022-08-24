import { IGoods } from "../../types";


export enum actionTypes {
    CART_QTY_ITEM = 'CART_QTY_ITEM',
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
}

interface ICArtAddItemPayload {
    product: IGoods
    count: number
}

interface ICArtQtyPayload {
    product: IGoods
    type: 'plus' | 'minus'
}

interface ICartQtyItem {
    type: actionTypes.CART_QTY_ITEM,
    payload: ICArtQtyPayload,
}

interface ICartAddItem {
    type: actionTypes.CART_ADD_ITEM,
    payload: ICArtAddItemPayload,
}

interface ICartRemoveItem {
    type: actionTypes.CART_REMOVE_ITEM,
    payload: number
}

export type TypeActionCart = ICartQtyItem | ICartAddItem | ICartRemoveItem