import { useEffect, useState } from "react";
import './style.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaCloudUploadAlt} from 'react-icons/fa'
import {ImEnlarge} from 'react-icons/im'
import { Modal } from "../Modal/Modal";
import { saveAs } from 'file-saver'
import {AiOutlineDownload} from 'react-icons/ai'
import {MdCancel}from 'react-icons/md'

export const UploadImage = ({src, onChange, canEnlarge}) => {


    const [state, setState] = useState({image: '', imageVisible: false, toggle: false})

    const downloadImage = () => {
        saveAs(state.image, 'image.jpg')
    }

    useEffect(() => {
        if (src) {
            setState({...state, 'imageVisible': true, 'image': src})
        }
    }, [])
 
    const handleChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            const currentImage = URL.createObjectURL(img)
            onChange(currentImage)
            setState({...state, 'imageVisible': true, 'image': currentImage})
        }
      };

    const handleClick = () => {
        setState({...state, 'toggle': !state.toggle})
        console.log('a')
    }
    return (
        <div className="upload-img__container">
            <input type="file" onChange={e => handleChange(e)} id="upload" hidden/>

            <div className="upload-site"> 
                {
                    !state.imageVisible 
                        ? <label for="upload">
                                <div className="upload__btn">
                                    <AiOutlinePlus size={24} fontWeight={700}/>
                                </div>
                            </label>
                        : <div className="upload__img">
                            <img src={state.image} alt="pic"/>
                            <div className='hover-modal'>
                                <div onClick={handleClick} style={{visibility: `${!canEnlarge ? 'hidden' : 'visible'}`}}>
                                    <ImEnlarge color="var(--color)" />
                                </div>
                                <div className="upload__change-image"> 
                                    <label for="upload">
                                        <div className="upload-change__btn">
                                            <div> 
                                                <FaCloudUploadAlt size={28} color='var(--success-color)'/>
                                            </div>
                                            <span>Upload Image</span>
                                        </div>
                                    </label>    
                                </div>
                            </div>
                        </div>
                }
            </div>
            <Modal toggle={state.toggle} root={"modal-root"}>
                
                <div className='enlange__container'> 
                    <div className='enlange-overlay'onClick={handleClick}></div>
                    <div className="enlange-wrapper" >
                        <div className="enlange-picture">
                            <div style={{backgroundImage: `url(${state.image})`}}>
                                <button onClick={downloadImage}>
                                    <AiOutlineDownload />
                                </button>
                                <button onClick={handleClick}>
                                    <MdCancel />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}