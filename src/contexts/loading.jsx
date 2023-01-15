import { useState, useContext, createContext } from 'react'

const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const value = {
        loading,
        setLoading
    }

    return (
        <LoadingContext.Provider value={value}>

        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    return useContext(LoadingContext)
}