import { createContext, useState, useContext } from 'react'

const onlineUser = createContext();

export const OnlineUserProvider = ({ children }) => {
    const [onlineusers, setOnlineusers] = useState([]);

    const value = {
        onlineusers,
        setOnlineusers,
    };

    return (
        <onlineUser.Provider value={value}>
            {children}
        </onlineUser.Provider>
    );
}

export const useOnlineuser = () => {
    return useContext(onlineUser);
}
