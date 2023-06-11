import { useModal } from "../../contexts/ModalContext";
import { Modal } from "../Modal/Modal";


export const Button = (props) => {
    const {className, text, onClick, message} = props;
    const {visible} = useModal()

    return (
        <>
        <button className={`btn__container ${className}`}
            onClick={onClick}
        >
            <span>{text}</span>
        </button>
        <Modal root={'modal-root'} toggle={visible} message={message} />
        </>
    )
}