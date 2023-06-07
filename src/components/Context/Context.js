import { createContext } from "react";
import { useReducer } from 'react'
import { reducer } from './reducer'


export const storeContext = createContext();

export const Provider = ({children}) => {
    const initalState = {
        toastList: [],
        modalMessage: "",
        isOpen: false
    }
    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <storeContext.Provider value={[state, dispatch]}>
            {children}
        </storeContext.Provider>
    )
}