import { useState } from "react"
const useNotificationsItem = () => {
    const [dropDown, setDropDown] = useState(false)

    return {
        dropDown,
        setDropDown
    }
}

export default useNotificationsItem