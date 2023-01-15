import { createContext, useState, useContext } from 'react'

const open = createContext();

export const OpenDrawerProvider = ({ children }) => {
    const [opendrawer, setOpendrawer] = useState(false);
    const [opendrawerProfile, setOpendrawerProfile] = useState(false);

    const value = {
        opendrawer,
        setOpendrawer,
        opendrawerProfile,
        setOpendrawerProfile
    };

    return (
        <open.Provider value={value}>
            {children}
        </open.Provider>
    );
}

export const useOpenDrawer = () => {
    return useContext(open);
}
