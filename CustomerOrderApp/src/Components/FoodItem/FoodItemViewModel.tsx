import { useAppDispatch } from "../../State/hooks";
import { useState } from "react";
import { setStartPosition } from "../../State/Slices/BackdropSlice";

const useFoodItemViewModel = () => {

    const dispatch = useAppDispatch()
    const [selected, setSelected] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const clickX = e.clientX;
        const clickY = e.clientY;

        dispatch(setStartPosition({ top: clickY, left: clickX, initiator: 'Food Item' }));
    };

    return {
        dispatch, selected, setSelected, handleClick
    }

}
export default useFoodItemViewModel