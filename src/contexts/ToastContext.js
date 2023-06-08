import { createContext, useContext, useState } from "react";

export const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext);
}

export const ToastContextProvider = (props) => {
    const [toast, setToast] = useState([]);

    const addToast = (newToast) => {
        const toastId = Date.now();
        setToast([...toast, {id: toastId, ...newToast}])
    }

    const removeToast = (id) => {
        setToast((toast) => toast.filter(e => e.id !== id))
    }

    return <ToastContext.Provider value={{toast, addToast, removeToast}}>
        {props.children}
    </ToastContext.Provider>
}