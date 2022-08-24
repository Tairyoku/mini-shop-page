import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cart/actions"
import { IGoods } from "../types"
import Quantity from "./Quantity"

interface IGoodsItem {
    product: IGoods
}

const GoodsItem:FC<IGoodsItem> = ({product}) => {
    const [count, setCount] = useState(1)

    const dispatch = useDispatch()

    const addHandler = () => {
        dispatch(addToCart(product, count))
    }

    return (
        <div
        className="shadow-sm rounded-md bg-white p-5 my-5 flex over flow-hidden justify-center flex-col w-2/5 mx-auto"
        style={{
            borderRadius: 50 
        }}
        >
            <img src={product.imagePath} alt={product.name} width='360' className="mx-auto mb-4 w-full" />
            <div className="text-lg font-bold">{product.name}</div>
            <div className="text-gray-600">${product.price}</div>
            <Quantity count = {count} setCount={setCount} />
            <button onClick={addHandler} className="bg-green-600 font-semibold rounded-sm py-1 px-10  mx-auto">В корзину</button>
        </div>
    )
}


export default GoodsItem