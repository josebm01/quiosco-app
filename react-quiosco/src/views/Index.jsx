import { Product  } from "../components/product/Product"
// import { products as data } from "../data/products"
import useSWR from 'swr'
import { useQuiosco } from "../hooks/useQuiosco"
import { clientAxios } from "../config/axios"

export const Index = () => {

  const { currentCategory } = useQuiosco()

  // consulta SWR
  const fetcher = () => clientAxios('/api/products').then( data => data.data )
  const { data, error, isLoading } = useSWR('/api/products', fetcher, {
    refreshInterval: 1000 // actualiza el llamado de la api
  })

  if ( isLoading ) return 'Cargando...'
  

  const products = data.data.filter( product => product.category_id === currentCategory.id )

  return (
    <>
      <h1 className="mt-4 text-4xl font-black">{ currentCategory.nombre }</h1>
      <p className="my-10 text-2xl">
      Elige y personaliza tu pedido
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {
          products.map( product => (
            <Product 
              key={ product.imagen } 
              product={ product }
            />
          ))
        }
      </div>
    </>
  )
}
