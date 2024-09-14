import { useState } from 'react'
import { currencyFormat } from '../../helpers'
import { useQuiosco } from '../../hooks/useQuiosco'

export const ModalProduct = () => {

    const { product, handleModal } = useQuiosco()

    const [amount, setAmount] = useState(1)

  return (
    <div className='gap-10 md:flex'>
        <div className='md:w-1/3'>
            <img 
                src={`/img/${product.imagen}.jpg`}
                alt={`Imagen producto ${product.nombre}`} 
            />
        </div>
        <div className='md:w-2/3'>
            <div className='flex justify-end'>
                <button onClick={ handleModal }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <h1 className='mt-5 text-3xl font-bold'>
                { product.nombre }
            </h1>
            <p className='mt-5 text-5xl font-black text-amber-500'>
                { currencyFormat( product.precio ) }
            </p>

            <div className='flex gap-4 mt-5'>
                
                <button
                    type='button'
                    onClick={() => {
                        if ( amount <= 1 ) return  
                        setAmount(amount - 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

                <p className='text-3xl'>{ amount }</p>
            
                <button
                    type='button'
                    onClick={() => {
                        if ( amount >= 5 ) return  
                        setAmount(amount + 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>

            <button
                type='button'
                className='px-5 py-2 mt-5 font-bold text-white uppercase bg-indigo-600 rounded hover:bg-indigo-800'
            >   
                Añadir al pedido
            </button>
        </div>
    </div>
  )
}
