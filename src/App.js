
import './App.css';
import { ToastContainer } from './components/Toast/ToatContainer';
import { addToastToList, visiblizeModal, autoRemove, removeToastFromList } from './components/Context/action';
import { useModal } from './components/useHook';
import { Modal } from './components/Modal/Modal';

function App() {

  const [state, dispatch] = useModal()

  const handleClick = (toast) => {
    
    dispatch(addToastToList(toast))
    setInterval(() => {
      dispatch(removeToastFromList(toast.id))
    }, 3000)
    clearInterval()
  }

  return (
    <div className="App">
      <button className='btn__container' 
        onClick={() => handleClick({
        type: "success",
        message: "This is success toast",
        duration: 3000
      })}>{"success"}</button>

      <button className='btn__container' 
        onClick={() => handleClick({
        type: "error",
        message: "This is error toast",
        duration: 3000

      })}>Error</button>

      <button className='btn__container' 
        onClick={() => handleClick({
        type: "warn",
        message: "This is warning toast",
        duration: 3000

      })}>Warn</button>
      
      <button className='btn__container'
        onClick={() => dispatch(visiblizeModal("Message"))}
      >
        Confirm
      </button>

      <button className='btn__container'
        onClick={() => dispatch(visiblizeModal(" Line 18:8:  React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array  react-hooks/exhaustive-deps!"))}
      >
        Check
      </button>
      
      <ToastContainer/>  
      <Modal />
    </div>
  );
}

export default App;
