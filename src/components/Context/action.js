import {constants} from './constants'


export const addToastToList = (payload) => {       
    return (
        {
            type: constants.ADD_TOAST_TO_LIST,
            payload
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

export const closeModalMessage = (payload) => {
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