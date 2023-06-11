import React, { useEffect, useState } from "react";
import './style.css';
import { AiOutlinePlus} from 'react-icons/ai';
import { Modal } from "../Modal/Modal";

import { getBase64 } from "../../ultil";
import { ShowImage } from "./ShowImg";
import { useModal } from "../../contexts/ModalContext";
import { AiOutlineDownload } from 'react-icons/ai';


export const UploadImage = ({ src, onChange, canEnlarge }) => {
  const [state, setState] = useState({ image: '', imageVisible: false, toggle: false });
  const {setModal} = useModal()

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


  useEffect(() => {
    if (src) {
      setState({ ...state, "imageVisible": true, "image": src });
    }
  }, []);

  const handleChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const currentImage = URL.createObjectURL(img);
      setState(prevState => ({ ...prevState, imageVisible: true, image: currentImage }));
      handleFileInputChange(event, currentImage);
    }
  };

  const downloadImage = () => {

  }

  const showEnLargeImage = () => {
    setModal({
      title: "image",
      body: (
        <div style={{ backgroundImage: `url(${src})` }} className='modal-block__body'>
            <button onClick={downloadImage}>
            <AiOutlineDownload />
            </button>
        </div>
      )
    })
  }


  return (
    <div className="upload-img__container">
      <input type="file" onChange={handleChangeImage} id="upload" hidden accept="image/*" />

      <div className="upload-site">
        {!state.imageVisible ?
          <label htmlFor="upload">
            <div className="upload__btn">
              <AiOutlinePlus size={24} fontWeight={700} />
            </div>
          </label> :
          <ShowImage 
            state={state} 
            onClick={showEnLargeImage} 
            canEnlarge={canEnlarge}/>
        }
      </div>
    </div>
  );
};
