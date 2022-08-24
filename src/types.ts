import { Dispatch, SetStateAction } from "react"

export interface IGoods {
    name: string
    id: number
    imagePath: string
    price: number
}

export interface ICartItem extends IGoods {
    count: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

