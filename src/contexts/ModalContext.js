import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const useModal = () => {
    return useContext(ModalContext);
}

export const ModalContextProvider = (props) => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    }

    const hideModal = () => {
        setVisible(false);
    }
    
    return <ModalContext.Provider value={{visible, showModal, hideModal}}>
        {props.children}
    </ModalContext.Provider>
}