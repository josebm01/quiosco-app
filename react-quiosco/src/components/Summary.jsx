import { useQuiosco } from "../hooks/useQuiosco"

export const Summary = () => {
  
  const { order } = useQuiosco()

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
              <p>Vacío</p>
            )
          }
        </div>

        <p className="mt-10 text-xl">
          Total: {''}
        </p>
          
        <form action="w-full">
          <div className="w-full">
            <div className="mt-5">
              <input 
                type="submit" 
                className="w-full px-5 py-2 font-bold text-center text-white uppercase bg-indigo-600 rounded cursor-pointer hover:bg-indigo-800"
                value='Confirmar pedido'
              />
            </div>
          </div>
        </form>
    </aside>
  )
}
