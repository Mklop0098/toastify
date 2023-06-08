import  ReactDOM  from "react-dom"
import './style.css'
import { Toast} from "./Toast";  
import { useToast } from "../../contexts/ToastContext";
// import { useModal, useToast } from "../useHook";

export const ToastContainer = () => {

    // const {toast} = useToast()
    const {toast} = useToast()

        const toastDOM = document.getElementById("toast-root")
        return ReactDOM.createPortal(
            <div className="toast__container">
                {
                    toast.map((item, key) => (
                        <Toast {...item} key={key}/>
                    ))
                }
            </div>,
            toastDOM
            
        )

};

    