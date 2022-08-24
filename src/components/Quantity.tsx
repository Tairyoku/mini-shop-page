import React, { FC, useState } from 'react'
import { TypeSetState } from '../types'


interface IQuantity {
  count: number
  setCount: TypeSetState<number>
}

const Quantity:FC<IQuantity> = ({count, setCount}) => {


  return (
    <div className='flex items-center mx-auto'>
        <button className='text-lg text-gray-700'
        onClick={() => setCount(() => {
          if (count <= 1) return 1
          return count - 1} )}
        >-</button>
        <input type="number"  className='mx-2 w-24 pb-2 text-center' 
        onChange={e => setCount(+e.target.value)}
        value={count}
        />
        <button className='text-lg text-gray-700'
        onClick={() => count < 50 && setCount(count + 1)}
        >+</button>
    </div>
  )
}

export default Quantity