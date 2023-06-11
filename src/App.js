
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
  const {setModal} = useModal()

  const handleUploadedImage = (image) => {
    console.log(image)
  }

  const showModal = () => {
    setModal({
      title: "abc",
      body: "xasd",
      footer: true
    })
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


    </div>
  );
}

export default App;
