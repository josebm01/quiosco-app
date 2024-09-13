import { Product } from "../components/Product"
import { products } from "../data/products"
import { useQuiosco } from "../hooks/useQuiosco"

export const Index = () => {

  const { currentCategory } = useQuiosco()

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
