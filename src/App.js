
import './App.css';
import { ToastContainer } from './components/Toast/ToatContainer';
import { addToastToList, visiblizeModal, removeToastFromList} from './components/Context/action';
import { useModal } from './components/useHook';
import { Modal } from './components/Modal/Modal';
import { useEffect, useState } from 'react';
import { ModeToggle } from './components/ModeToggle/ModeToggle';

function App() {

  const [state, dispatch] = useModal()
  const [theme, setTheme] = useState('theme-light')

  useEffect(() => {
    if (state.isDarkMode) {
      setTheme('theme-dark')
    }
    else setTheme('theme-light')
  }, [state.isDarkMode])


  const delay = (duration) => new Promise(resolve => setTimeout(resolve, duration));

  const handleClick = async (toast) => {
    await dispatch(addToastToList(toast))
    await delay(3000);
    return dispatch(removeToastFromList(toast.id));
  };

  return (
    <div className={`App ${theme}`}>

        <div className='app__handler'>
          <div className='app__btn'>
            <button className={`btn__container success`}
              onClick={() => handleClick({
              type: "success",
              message: "This is success toast",
            })}><span>Success</span></button>
          
            <button className={`btn__container error`}
              onClick={() => handleClick({
              type: "error",
              message: "This is error toast",
            })}><span>Error</span></button>

            <button className={`btn__container warn`}
              onClick={() => handleClick({
              type: "warn",
              message: "This is warning toast",

            })}><span><span>Warn</span></span></button>
          
            <button className='btn__container modal-style'
              onClick={() => dispatch(visiblizeModal("Message"))}
            >
              <span>Confirm</span>
            </button>
            <button className='btn__container modal-style'
              onClick={() => dispatch(visiblizeModal(" Line 18:8:  React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array  react-hooks/exhaustive-deps!"))}
            >
              <span>Check</span>
            </button>
          </div>
          <ModeToggle />
        </div>
        <ToastContainer/>  
        <Modal />

    </div>
  );
}

export default App;
