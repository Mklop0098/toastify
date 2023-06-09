
import './App.css';
import { ToastContainer } from './components/Toast/ToatContainer';
import { Modal } from './components/Modal/Modal';
import { Button } from './components/Button';
import { useToast } from './contexts/ToastContext';
import { useModal } from './contexts/ModalContext';
import {FaSun} from 'react-icons/fa'
import {IoMoon} from 'react-icons/io5'
import { useTheme } from './contexts/ThemeContext';
import { UploadImage } from './components/UploadImage/UploadImage';

function App() {

  const {addToast} = useToast();
  const {theme, setTheme} = useTheme();
  const {visible, showModal, hideModal} = useModal()

  const handleUploadedImage = (image) => {
    console.log(image)
  }

  return (
    <div className={`App`}>

        <div className='app__handler'>
          <div className='app__btn'>

            <Button
                className='warn'
                text='warn' 
                onClick={() => {
                  addToast({
                    type: "warn",
                    message: "Warning"
                  })
                }}
            />
            <Button
                className='warn'
                text='Show modal' 
                onClick={showModal}
            />
            <UploadImage onChange={(image) => handleUploadedImage(image)} canEnlarge={true}/>

            </div>
            
              <div className='toggle-btn'>       
              {
                theme === 'theme-dark' 
                  ? <FaSun onClick={() => {setTheme('theme-light')}} color='#ffee58' fontSize={20}/> 
                  : <IoMoon onClick={() => setTheme('theme-dark')} fontSize={20} color="#616161"/>
              }
              </div>
            </div>
        <ToastContainer/>  
        <Modal root={'modal-root'} toggle={visible}>
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
            </div>
        </Modal>

    </div>
  );
}

export default App;
