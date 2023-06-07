import { useContext } from "react"
import { storeContext } from "./Context/Context"

export const useModal = () => {

    const [state, dispatch] = useContext(storeContext)

    return (
        [state, dispatch]
    )
}