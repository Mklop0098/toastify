
import './style.css'
import  ReactDOM  from "react-dom"
import { useModal } from '../useHook'
import { closeModalMessage } from '../Context/action'
import { useRef, useEffect, useState } from 'react'

export const Modal = () => {
    

    const [{isOpen, modalMessage, isDarkMode}, dispatch] = useModal()
    const [dark, setDark] = useState("")
    
    const handleClick = () => {
        dispatch(closeModalMessage())
    }

    useEffect(() => {
        if(isDarkMode) {
          setDark('modal--theme-dark')
        }
        else {
          setDark('modal--theme-light')
    
        }
      }, [isDarkMode])


    if (isOpen) {
        return ReactDOM.createPortal(
            <div className='modal__container'> 
            <div className='modal-overlay' onClick={handleClick}></div>
                <div className={`modal ${dark}`}>
                    <div className='modal__header'>
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