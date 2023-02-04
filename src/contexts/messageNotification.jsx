import { useState, useContext, createContext } from 'react'

const messageNotificationContext = createContext()

export const MessageNotificationProvider = ({ children }) => {
    const [messageNotification, setMessageNotification] = useState([])

    const value = {
        messageNotification,
        setMessageNotification
    }

    return (
        <messageNotificationContext.Provider value={value}>
            {children}
        </messageNotificationContext.Provider>
    )
}

export const useMessageNotification = () => {
    return useContext(messageNotificationContext)
}