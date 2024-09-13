import { useQuiosco } from "../hooks/useQuiosco"

export const Category = ({ category }) => {

    const { handleChangeCategory, currentCategory } = useQuiosco()
    
    const { id, icono, nombre } = category

    const highlightCurrentCategory = () => currentCategory.id === id ? 'bg-amber-400' : 'bg-white'

    return (
        <button
            type="button"
            onClick={ () => handleChangeCategory(id) }      
            className={
                `${ highlightCurrentCategory() }
                flex items-center w-full gap-4 p-3 border cursor-pointer hover:bg-amber-400`
            }
        >
            <img 
                src={`/img/icono_${icono}.svg`} 
                alt={`Imagen ${nombre}`}     
                className="w-14"
            />

            <p 
                className="text-lg font-bold truncate cursor-pointer"
            >
                { nombre }
            </p>
        </button>
  )
}
