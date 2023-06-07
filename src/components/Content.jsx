import { addToastToList } from '.Context/action';
import { useModal } from './useHook';

export const Content = () => {

    const [state, dispatch] = useModal()

    const handleClick = (toast) => {
      dispatch(addToastToList(toast))
    }

    return <>
        <h1>Content</h1>
        <button className='btn__container' 
        onClick={() => handleClick({
        type: "success",
        message: "This is success toast",
      })}>{"success"}</button>
    </>
}