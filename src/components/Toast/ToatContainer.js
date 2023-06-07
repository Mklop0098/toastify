import  ReactDOM  from "react-dom"
import './style.css'
import { Toast} from "./Toast";  
import { useModal } from "../useHook";

export const ToastContainer = () => {

    const [{toastList}, dispatch] = useModal()

        const toastDOM = document.getElementById("toast-root")
        return ReactDOM.createPortal(
            <div className="toast__container">
                {
                    toastList.map((item, key) => (
                        <Toast props={item} key={key}/>
                    ))
                }
            </div>,
            toastDOM
            
        )

};

    