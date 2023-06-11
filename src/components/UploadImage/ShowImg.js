import React from "react";
import './style.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { ImEnlarge } from 'react-icons/im';



export const ShowImage = ({state, onClick, canEnlarge}) => {
    return (
        <div className="upload__img">
            <img src={state.image} alt="pic" />
            <div className='hover-modal'>
              <div 
                onClick={onClick} 
                style={{ visibility: `${!canEnlarge ? 'hidden' : 'visible'}` }}
              >
                <ImEnlarge color="var(--color)" />
              </div>
              <div className="upload__change-image">
                <label htmlFor="upload">
                  <div className="upload-change__btn">
                    <div>
                      <FaCloudUploadAlt size={28} color='var(--success-color)' />
                    </div>
                    <span>Upload Image</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
    )
}