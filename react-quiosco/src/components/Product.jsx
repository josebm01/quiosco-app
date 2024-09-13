import React from 'react'
import { currencyFormat } from '../helpers'

export const Product = ({ product }) => {

    const { nombre, imagen, precio } = product

  return (
    <div className='p-3 bg-white border shadow'>
        <img 
            alt={`imagen ${nombre}`}
            className='w-full'
            src={`/img/${imagen}.jpg`}
        />

        <div className='p-5'>
            <h3 className='text-2xl font-bold'>
                { nombre }
            </h3>
            <p className='mt-5 text-4xl font-black text-amber-500'>
                { currencyFormat( precio ) }
            </p>

            <button 
                type='button'
                className='w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 hover:bg-indigo-800'
            >
                Agregar
            </button>
        </div>
    </div>
  )
}
