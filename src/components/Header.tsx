import React, { FC } from 'react'
import logoImage from '../assets/images/logo.svg'
import cartlogo from '../assets/images/bx-cart.svg'
import {ICartItem} from '../types'
import cn from 'classnames'
import {useState} from 'react'
import { useTypesSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cart/actions'

const Header:FC = () => {

    const [isShowCart, setIsShowCart] = useState(false)
    
    const cart = useTypesSelector(state => state.cart)
const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0)
    

const dispatch = useDispatch()
    const removeHandler = (id: number) => {
        console.log("1")
        dispatch(removeFromCart(id))
    }


    return (
        <>
        <div className='flex items-center justify-between 
        relative w-full px-4 py-1 shadow-xl bg-white'
        style={{
            background: 'linear-gradient(92.09deg, rgba(255, 245, 0, 0.88) 0%, rgba(0, 224, 255, 0.4) 100%)'}} 
        >
            <img src={logoImage} alt='logoimage' width='100' />
        
            <button className='bg-transparent border-none'
            onClick={() => setIsShowCart(!isShowCart)}
            >
                <img src={cartlogo} alt="cardlogo" width='55' height='55'/>
                <div className="text-red-600 font-bold p-2 rounded-2xl bg-white">{cart.length}</div>
            </button>

        </div>
        <div className={cn('absolute right-0 items-center bg-white p-4 divide-y-2 divide-black shadow-md', {
            hidden: !isShowCart
        })}>
            {cart.map(item => (
                <div className='flex items-center mb-4' key={`cart item ${item.name}`}>
                    <img src={item.imagePath}
                    alt={item.name} 
                    width='55' height='55'
                    className='mr-3' 
                    />
                    <div>
                    <div>{item.name}</div>
                    <div>{item.count} x ${item.price.toLocaleString()}</div>
                    <button className='text-red-600 bg-transparent border-0'
                    onClick={() => removeHandler(item.id)}
                    >Удалить</button>
                    </div>
                </div>
            ))}

            <div className='text-lg '>
            Total: <b>${total.toLocaleString()}</b>
            </div>
        </div>
        </>
    )
}

export default Header