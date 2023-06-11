import { createContext, useContext, useState } from "react";
import {Modal} from "../components/Modal/Modal"

export const ModalContext = createContext();

export const useModal = () => {
    return useContext(ModalContext);
}

export const ModalContextProvider = (props) => {
    const [modal, setModal] = useState(undefined)

    const hideModal = () => {
        setModal(undefined);
    }
    
    return <ModalContext.Provider value={{setModal}}>
        {props.children}
        <Modal 
          toggle={modal} 
          root={"modal-root"} 
          onClick={hideModal} 
          title={modal?.title} 
          body={modal?.body} 
          footer={modal?.footer}/>
    </ModalContext.Provider>
}