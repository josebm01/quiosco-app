import { createContext, useState } from "react"
import { categories as categoriesDB } from "../data/categories"

const QuioscoContext = createContext()

export const QuioscoProvider = ({ children }) => {
  
    const [ categories, setCategories ] = useState(categoriesDB)
    const [ currentCategory, setCurrentCategory ] = useState(categories[0])
    const [ modal, setModal ] = useState(false)
    const [ product, setProduct ] = useState({})
    const [ order, setOrder ] = useState([])

    
    /**
     * Función para cambiar la cambiar las categorías del producto
     * @param {*} id 
     */
    const handleChangeCategory = id => {
        const category = categories.filter( category => category.id === id )[0]
        setCurrentCategory( category )
    }

    /**
     * Función para abrir o cerrar el modal
     */
    const handleModal = () => {
        setModal( !modal )
    }

    /**
     * Función para mostrar información del producto para agregar
     * @param {} product 
     */
    const handleSetProduct = product => {
        setProduct( product )
    }


    return (
        <QuioscoContext.Provider
            value={{
                categories,
                currentCategory,
                handleChangeCategory,
                modal,
                handleModal,
                product,
                handleSetProduct,
                order
            }}
        >
            { children }
        </QuioscoContext.Provider>
    )
}


export default QuioscoContext