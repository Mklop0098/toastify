
import './style.css'
import  ReactDOM  from "react-dom"

export const Modal = ({children, root, toggle}) => {

    console.log(root)

    if (toggle) {
        return ReactDOM.createPortal(
            children,
            document.getElementById(root)
        )
    
    }
    
    else return <></>
}