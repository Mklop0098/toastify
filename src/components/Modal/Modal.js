
import './style.css'
import  ReactDOM  from "react-dom"
import { useModal } from '../useHook'
import { closeModalMessage } from '../Context/action'

export const Modal = () => {
    

    const [{isOpen, modalMessage}, dispatch] = useModal()
    const handleClick = () => {
        dispatch(closeModalMessage())
    }

    if (isOpen) {
        return ReactDOM.createPortal(
            <div className='modal__container'> 
            <div className='modal-overlay' onClick={handleClick}></div>
                <div className='modal'>
                    <div className='modal__title'>
                        <span>{"Model"}</span>
                        <i className="fa-solid fa-xmark" onClick={handleClick} style={{cursor: "pointer"}}></i>
                    </div>
                    <div className='modal__content'><span>{modalMessage}</span></div>
                    <div className='modal__handler'>
                        <button onClick={handleClick} className='modal__handler--default'>Cancel</button>
                        <button onClick={handleClick} className='model__handler--primary'>Confirm</button>
                    </div>
                </div>
            </div>,
            document.getElementById("modal-root")
        )
    }
    
    else return <></>

        


}