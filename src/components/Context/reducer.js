
import { constants } from "./constants"

export const reducer = (state, action) => {
    
    switch(action.type) {
        case constants.ADD_TOAST_TO_LIST: 
            action.payload.id = state.toastList.length
            return {
                ...state,
                toastList: [...state.toastList, action.payload]
            }
        
        case constants.REMOVE_TOAST_FROM_LIST: 
            return {
                ...state, 
                toastList: state.toastList.filter(e => e.id !== action.payload)
            }
        
        case constants.AUTO_REMOVE_TOAST: 
            return {
                ...state,
                toastList: state.toastList.slice(1)
            }
        
        case constants.VISIBLIZE_MODAL:
            return {
                ...state,
                isOpen: state.isOpen = !state.isOpen,
                modalMessage: state.modalMessage = action.payload
            }

        case constants.CLOSE_MODAL_MESSAGE: 
            return {
                ...state,
                isOpen: state.isOpen = !state.isOpen
            }

        case constants.TOGGLE__MODE: 
            return {
                ...state,
                isDarkMode: state.isDarkMode = !state.isDarkMode
            }
        default: return state
    }
} 