import React, { useEffect, useState } from "react";
import './style.css';
import { AiOutlinePlus, AiOutlineDownload } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { ImEnlarge } from 'react-icons/im';
import { Modal } from "../Modal/Modal";
import { saveAs } from 'file-saver';
import { MdCancel } from 'react-icons/md';
import { getBase64 } from "../../ultil";

export const UploadImage = ({ src, onChange, canEnlarge }) => {
  const [state, setState] = useState({ image: '', imageVisible: false, toggle: false });

  const handleFileInputChange = async (e, url) => {
    let file = e.target.files[0];
    const result = await getBase64(file);
    onChange({
      base64: result,
      imgUrl: url,
      file: file,
      fileName: file.name
    });
  };

  const downloadImage = () => {
    saveAs(state.image, 'image.jpg');
  };

  useEffect(() => {
    if (src) {
      setState(prevState => ({ ...prevState, imageVisible: true, image: src }));
    }
  }, [src]);

  const handleChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const currentImage = URL.createObjectURL(img);
      setState(prevState => ({ ...prevState, imageVisible: true, image: currentImage }));
      handleFileInputChange(event, currentImage);
    }
  };

  const handleClick = () => {
    setState(prevState => ({ ...prevState, toggle: !prevState.toggle }));
  };

  return (
    <div className="upload-img__container">
      <input type="file" onChange={handleChangeImage} id="upload" hidden />

      <div className="upload-site">
        {!state.imageVisible ?
          <label htmlFor="upload">
            <div className="upload__btn">
              <AiOutlinePlus size={24} fontWeight={700} />
            </div>
          </label> :
          <div className="upload__img">
            <img src={state.image} alt="pic" />
            <div className='hover-modal'>
              <div onClick={handleClick} style={{ visibility: `${!canEnlarge ? 'hidden' : 'visible'}` }}>
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
        }
      </div>
      <Modal toggle={state.toggle} root={"modal-root"}>
        <div className='enlange__container'>
          <div className='enlange-overlay' onClick={handleClick}></div>
          <div className="enlange-wrapper">
            <div className="enlange-picture">
              <div style={{ backgroundImage: `url(${state.image})` }}>
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
  );
};
