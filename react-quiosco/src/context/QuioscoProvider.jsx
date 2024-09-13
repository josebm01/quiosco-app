import { createContext, useState } from "react"
import { categories as categoriesDB } from "../data/categories"

const QuioscoContext = createContext()

export const QuioscoProvider = ({ children }) => {
  

    const [categories, setCategories] = useState(categoriesDB)
    const [ currentCategory, setCurrentCategory ] = useState(categories[0])
    
    const handleChangeCategory = id => {
        const category = categories.filter( category => category.id === id )[0]
        setCurrentCategory( category )
    }

    return (
        <QuioscoContext.Provider
            value={{
                categories,
                currentCategory,
                handleChangeCategory
            }}
        >
            { children }
        </QuioscoContext.Provider>
    )
}


export default QuioscoContext