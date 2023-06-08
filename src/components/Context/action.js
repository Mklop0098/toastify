import {constants} from './constants'


export const addToastToList = (payload, autoRemove) => {       
    return (
        {
            type: constants.ADD_TOAST_TO_LIST,
            payload,
            autoRemove
        }
    )
}

export const removeToastFromList = (payload) => {

    return (
        {
            type: constants.REMOVE_TOAST_FROM_LIST,
            payload
        }
    )
}

export const autoRemove = () => {
    return (
        {
            type: constants.AUTO_REMOVE_TOAST
        }
    )
}

export const closeModalMessage = () => {
    return ({
        type: constants.CLOSE_MODAL_MESSAGE
    })
}

export const visiblizeModal = (payload) => {
    return (
        {
            type: constants.VISIBLIZE_MODAL,
            payload
        }
    )
}

export const toggleMode = () => {
    return (
        {
            type: constants.TOGGLE__MODE
        }
    )
}