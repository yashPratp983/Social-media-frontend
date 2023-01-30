import { createContext, useState, useContext } from 'react'

const openDialog = createContext();

export const OpenDialogProvider = ({ children }) => {
    const [opendialog, setOpendialog] = useState(false);
    const [openfollowingdialog, setOpenfollowingdialog] = useState(false);

    const value = {
        opendialog,
        setOpendialog,
        openfollowingdialog,
        setOpenfollowingdialog
    };

    return (
        <openDialog.Provider value={value}>
            {children}
        </openDialog.Provider>
    );
}

export const useOpenDialog = () => {
    return useContext(openDialog);
}
