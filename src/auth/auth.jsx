import { useContext, createContext, useState, useEffect } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         setUser(user);
    //         setLoading(false);
    //     });
    // }, []);

    const value = {
        user,
        setUser
    };

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
}