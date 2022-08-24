import React from "react"
import { ICartItem } from "../../types"
import { actionTypes, TypeActionCart } from "./types"


const initialState:ICartItem[] = []

export const cartReducer = (state = initialState, action:TypeActionCart) => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM:
            {
                const cart = [...state]
                const {count, product} = action.payload
    
                const foundProduct = cart.find(item => item.id === product.id)
    
                if (foundProduct) {
                    foundProduct.count = count
                } else {
                    cart.push({
                        ...product,
                        count
                    })
                }
                return cart
            }

        //     case actionTypes.CART_QTY_ITEM:
        // {
        //     const product = state.find(product => product.id ===)

        //     const foundProduct = cart.find(item => item.id === product.id)

        //     if (foundProduct) {
        //         foundProduct.count = count
        //     } else {
        //         cart.push({
        //             ...product,
        //             count
        //         })
        //     }
        //     return cart
        // }
        
        case actionTypes.CART_REMOVE_ITEM:
        {
        return  state.filter(value => value.id !== action.payload)
        }
        default:
            return state
    }
  }
