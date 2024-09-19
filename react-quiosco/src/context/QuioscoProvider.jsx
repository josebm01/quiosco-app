import { createContext, useEffect, useState } from "react"
import axios from 'axios'
import { toast } from 'react-toastify'
// import { categories as categoriesDB } from "../data/categories"

const QuioscoContext = createContext()

export const QuioscoProvider = ({ children }) => {
  
    const [ categories, setCategories ] = useState([])
    const [ currentCategory, setCurrentCategory ] = useState({})
    const [ modal, setModal ] = useState(false)
    const [ product, setProduct ] = useState({})
    const [ order, setOrder ] = useState([])
    const [total, setTotal] = useState(0)

    /**
     * Calculando el total en base al pedido actual
     */
    useEffect( () => {
        const newTodal = order.reduce( ( total, product ) => ( product.precio * product.amount ) + total, 0 )
        setTotal( newTodal ) 
    }, [ order ])

    

    const getCategories = async () => {
        try {

            const { data } = await axios('http://localhost:8001/api/categories')
            setCategories(data.data)
            setCurrentCategory(data.data[0])
    
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getCategories()
    }, [])

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

    /**
     * Función para añadir productos a la orden
     * @param {*} param0 
     */
    const handleAddOder = ({ categoria_id, ...product }) => {

        if ( order.some( orderState => orderState.id === product.id ) ) {
            // actualizar producto existente en la orden
            const updatedOrder = order.map( orderState => orderState.id === product.id ? product : orderState ) 
            setOrder(updatedOrder)
            toast.success('Pedido actualizado')
        } else {
            // producto nuevo
            setOrder([...order, product])
            toast.success('Agregado al pedido')
        }

    }

    /**
     * Función para editar un producto de la orden 
     * @param {} id 
     */
    const handleEditOrder = id => {
        const updatedProduct = order.filter( product => product.id === id )[0]
        setProduct( updatedProduct )
        setModal( !modal )
    }

    /**
     * Eliminando pedido de una orden
     * @param {*} id 
     */
    const handleDeleteProductInOrder = id => {
        const updatedOrder = order.filter( product => product.id !== id )
        setOrder( updatedOrder )
        toast.success('Eliminado de la orden')
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
                order,
                handleAddOder,
                handleEditOrder,
                handleDeleteProductInOrder,
                total
            }}
        >
            { children }
        </QuioscoContext.Provider>
    )
}


export default QuioscoContext