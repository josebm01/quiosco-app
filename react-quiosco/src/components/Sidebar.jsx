// import { categories } from "../data/categories"
import { useQuiosco } from "../hooks/useQuiosco"
import { Category } from "./Category"

export const Sidebar = () => {

    const { categories } = useQuiosco()

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img 
                className="w-40"
                src="img/logo.svg" 
                alt="Imagen de logo" 
            />
        </div>

        <div className="mt-10">
            {
                categories.map( category => (
                    <Category key={category.id} category={category} />
                ))
            }
        </div>

        <div className="px-5 my-5">
            <button
                className="w-full p-3 font-bold text-center text-white truncate bg-red-500"
            >
                Cancelar orden
            </button>
        </div>
        
    </aside>
  )
}
