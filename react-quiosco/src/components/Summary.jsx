import { currencyFormat } from "../helpers"
import { useQuiosco } from "../hooks/useQuiosco"
import { SummaryProduct } from "./SummaryProduct"

export const Summary = () => {
  
  const { order, total } = useQuiosco()

  const verifyOrder = () => order.length === 0

  return (
    <aside className="h-screen p-5 overflow-y-scroll w-72">
        <h1 className="text-4xl font-black">
          Mi pedido
        </h1>
        <p className="my-5 text-lg">
            Aquí podrás ver el resumen y totales de tu pedido
        </p>
        <div className="py-10">
          {
            order.length === 0 ? (
              <p className="text-2xl text-center">
                No hay productos en la orden 
              </p>
            ) : (
              
                order.map( product => (
                  <SummaryProduct key={product.id} product={product} />
                ))
              
            )
          }
        </div>

        <p className="mt-10 text-xl">
          Total: {''}
          { currencyFormat( total) }
        </p>
          
        <form action="w-full">
          <div className="w-full">
            <div className="mt-5">
              <input 
                type="submit" 
                className={`
                  ${ verifyOrder() ? 'bg-indigo-100' : 'bg-indigo-600' } 
                  w-full px-5 py-2 font-bold text-center text-white uppercase rounded cursor-pointer hover:bg-indigo-800`
                }
                value='Confirmar pedido'
                disabled={ verifyOrder() }
              />
            </div>
          </div>
        </form>
    </aside>
  )
}
