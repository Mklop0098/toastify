
import './App.css';
import { ToastContainer } from './components/Toast/ToatContainer';
// import { useModal, useTheme, useToast } from './components/useHook';
import { Modal } from './components/Modal/Modal';
import { Button } from './components/Button';
import { useToast } from './contexts/ToastContext';
import { useModal } from './contexts/ModalContext';
import {FaSun} from 'react-icons/fa'
import {IoMoon} from 'react-icons/io5'
import { useTheme } from './contexts/ThemeContext';

function App() {

  const {addToast} = useToast();
  const {showModal} = useModal();
  const {theme, setTheme} = useTheme();

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
        <Modal />

    </div>
  );
}

export default App;
