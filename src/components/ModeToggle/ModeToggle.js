import { useModal } from "../useHook"
import {FaSun} from 'react-icons/fa'
import {IoMoon} from 'react-icons/io5'
import { toggleMode } from "../Context/action"

export const ModeToggle = () => {

    const [state, dispatch] = useModal()
    const handleToggle = () => {
        dispatch(toggleMode())
      }
    
      console.log(state.isDarkMode)

    return (
        <div className='toggle-btn'>
          {
            state.isDarkMode ? <FaSun onClick={handleToggle} color='#ffee58' fontSize={20}/> :
            <IoMoon onClick={handleToggle} fontSize={20} color="#616161"/>
          }
        </div>
    )
}