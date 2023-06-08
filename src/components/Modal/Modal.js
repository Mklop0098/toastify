
import './style.css'
import  ReactDOM  from "react-dom"
import { useModal } from '../../contexts/ModalContext'

export const Modal = () => {

    const {visible, hideModal} = useModal()

    if (visible) {
        return ReactDOM.createPortal(
            <div className='modal__container'> 
            <div className='modal-overlay' onClick={hideModal}></div>
                <div className={`modal`}>
                    <div className='modal__header'>
                        <span>{"Model"}</span>
                        <i className="fa-solid fa-xmark" onClick={hideModal} style={{cursor: "pointer"}}></i>
                    </div>
                    <div className='modal__content'><span>Message</span></div>
                    <div className='modal__handler'>
                        <button onClick={hideModal} className='modal__handler--default'>Cancel</button>
                        <button onClick={hideModal} className='model__handler--primary'>Confirm</button>
                    </div>
                </div>
            </div>,
            document.getElementById("modal-root")
        )
    
    }
    
    else return <></>

        


}