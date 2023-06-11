
import './style.css'
import { saveAs } from 'file-saver';
import { MdCancel } from 'react-icons/md';
import  ReactDOM  from "react-dom"


export const Modal = ({root, toggle, src, onClick, title, body, footer}) => {

  const downloadImage = () => {
    saveAs(src, 'image.jpg');
  };


        if(toggle) {
            return ReactDOM.createPortal(
                <div className='enlange__container'>
                <div className='enlange-overlay' onClick={onClick}></div>
                <div className="enlange-wrapper">
                    <div className="enlange-picture">
                        <div  hidden={title===undefined}>
                            <div className='modal-block__header'>
                                <span>{title}</span>
                                <MdCancel onClick={onClick}/>
                            </div>
                        </div>
                        {
                            <div className='modal-block__body-block'>{body}</div>
                    
                        }
                        <div className='modal-block__footer' hidden={footer===undefined || footer === false} >
                            <div className='modal__handler'>
                                <button onClick={onClick} className='modal__handler--default'>Cancel</button>
                                <button onClick={onClick} className='model__handler--primary'>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>,
                document.getElementById(root)
            )
        }
    

    else return <></>
}